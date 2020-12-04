import { GraphQLList} from 'graphql';

import {UserModel} from '../models';
import {UserType} from '../types';

export const userQuery = {

    // getUserById: {
    //     type: UserType,
    //     args: {id: {type: GraphQLID}},
    //     resolve: (parent: any, args: any) => UserModel.findOne({_id: args.id})
    // },

    getAllUser: {
        type: GraphQLList(UserType),
        resolve: () => UserModel.find({})
    }
};
