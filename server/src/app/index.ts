import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser';
import { prismaClient } from '../clients/db';
import { User } from './user';
import { Tweet } from './tweet';


export async function initServer() {
    const app = express();

    app.use(bodyParser.json())

    // prismaClient.user.create({
    //     data: {

    //     }
    // })

    const graphqlServer = new ApolloServer({
        typeDefs: `
            ${User.types}

            type Query {
                ${User.queries}
            }

        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },

        },
    });

    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer));

    return app;
}

