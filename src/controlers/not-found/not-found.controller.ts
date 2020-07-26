import {Request, Response} from 'express';

import {ResponseStatusCodeEnum} from '../../constants/enums';
import {ErrorHandler} from '../../errors/ErrorHandler';

export class NotFoundController {
  public all(req: Request, res: Response): void {
    throw new ErrorHandler(ResponseStatusCodeEnum.NOT_FOUND, 'API route not found');
  }
}

export const notFoundController = new NotFoundController();
