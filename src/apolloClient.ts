import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import {onError} from '@apollo/client/link/error';

const errors = onError(({graphQLErrors, networkError}) => {
    if(graphQLErrors) {
        graphQLErrors.map(({locations, message, path}) => 
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
    }

    if(networkError) {
        console.log(`[Network Error]: ${networkError}`);
    }
});

const httplink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
})

export const client = new ApolloClient({
    link: errors.concat(httplink),
    cache: new InMemoryCache(),
});

