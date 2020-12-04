import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {TypeEnums} from '../constants';

export const UserType = new GraphQLObjectType({
    name: TypeEnums.USER_TYPE,
    fields: () => ({
        _id: {type: GraphQLID},
        name: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)}
    })
});
