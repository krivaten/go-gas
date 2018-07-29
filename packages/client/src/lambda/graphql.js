import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs} from './api/schema'
import { resolvers } from './api/resolvers'

const myGraphQLSchema = new ApolloServer({
    typeDefs,
    resolvers
})

export const handler = myGraphQLSchema.createHandler();