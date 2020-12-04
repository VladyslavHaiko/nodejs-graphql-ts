import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as mongoose from 'mongoose';
import {config} from './config';
import {graphqlHTTP} from 'express-graphql';
import {Schema} from './schema';
dotenv.config();

class App {
    public readonly app: express.Application = express();

    constructor() {

        (global as any).appRoot = path.resolve(process.cwd(), '../');
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static(path.resolve((global as any).appRoot, 'public')));

        this.setupDB();
        this.app.use(graphqlHTTP({schema: Schema, graphiql: true}));

    }

    private setupDB(): void {
        mongoose.connect(config.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

        const db = mongoose.connection;
        db.on('error', () => console.log('MONGO ERRROR'));
    }
}

export const app = new App().app;
