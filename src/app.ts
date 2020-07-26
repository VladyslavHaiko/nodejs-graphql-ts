import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as path from 'path';

import {config} from './config';
import {ResponseStatusCodeEnum} from './constants/enums/response-status-code.enum';
import {apiRouter} from './routes/api';
import {notFoundRouter} from './routes/not-found';

dotenv.config();

const serverRequestLimit = rateLimit({
  windowMs: config.serverRateLimits.period,
  max: config.serverRateLimits.maxRequests
});

class App {
  public readonly app: express.Application = express();

  constructor() {
    (global as any).appRoot = path.resolve(process.cwd(), '../');
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(serverRequestLimit);
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.static(path.resolve((global as any).appRoot, 'public')));

    this.mountRoutes();

    this.app.use(App.customErrorHandler);
  }

  private static customErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err.parent) {
      err.message = err.parent.sqlMessage;
    }
    res
      .status(err.status || ResponseStatusCodeEnum.SERVER_ERROR)
      .json({
        error: {
          message: err.message || 'Unknown Error',
          code: err.code,
          data: err.data
        }
      });
  }

  private mountRoutes(): void {
    this.app.use('/api', apiRouter);
    this.app.use('*', notFoundRouter);
  }
}

export const app = new App().app;
