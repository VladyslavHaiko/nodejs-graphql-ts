import { Model, model, Schema} from 'mongoose';
import {GraphQLString} from 'graphql';


export const UserSchema: Schema = new Schema({
    name: {
        type: GraphQLString,
        required: true
    },
    email: {
        type: GraphQLString,
        required: true,
        unique: true
    },
    password: {
        type: GraphQLString,
        required: true
    },
    age: {
        type: GraphQLString,
        required: true
    }
});

export const UserModel: Model<any> = model<any>('user', UserSchema);
