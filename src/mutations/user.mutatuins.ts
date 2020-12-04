import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import {UserType} from '../types';
import {UserModel} from '../models';
export const UserMutations = {
    createUser: {
        type: UserType,
        args: {
            _id: {type: GraphQLID},
            name: {type: GraphQLNonNull(GraphQLString)},
            email: {type: GraphQLNonNull(GraphQLString)},
            age: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)}
        },
        resolve: (parent: any, args: any) => new UserModel(args).save()
    }
};
