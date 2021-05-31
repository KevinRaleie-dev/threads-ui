import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { client } from './apolloClient';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <HelmetProvider>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </HelmetProvider>
        </ApolloProvider>
    </React.StrictMode>
, document.getElementById('root'));

// Hot Module Replacement, remove this snippet to remove HMR... as if😂
if(import.meta.hot) {
    import.meta.hot.accept();
}