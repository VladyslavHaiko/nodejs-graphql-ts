import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {UserMutations} from '../mutations';
import {userQuery} from '../query';

const Query = new GraphQLObjectType({
    name: `Query`,
    fields: {
        getUserList: userQuery.getAllUser
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: UserMutations.createUser
        // deleteUser: UserMutations.deleteUser,
        // updateUser: UserMutations.updateUserWithParams

        // createPost: PostMutations.addPost
    }
});

export const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
