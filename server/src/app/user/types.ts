export const types = `#graphql

    type user {
        id: ID!
        firstName: String!
        lastName: String
        email: String!
        profileImageURL: String

        tweets: [Tweet]
    }

`;