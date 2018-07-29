import {gql} from 'apollo-server-lambda';

export const typeDefs = gql`
    type Query {
        post: Post
        posts: [Post]
        comment: Comment
        user: User
        users: [User]
    }

    type User {
        _id: String!
        email: String!
        firstName: String!
        lastName: String!
        bio: String!
        gender: String!
        thumbnail: String!
        status: Int!
        comments: [Comment]
    }

    type Comment {
        _id: String!
        content: String!
        postId: String!
        post: Post
    }

    type Post {
        _id: String!
        title: String!
        content: String!
        comments: [Comment]
    }

    type Mutation {
        createPost: Post
        createComment: Comment
        createUser: User
    }
`