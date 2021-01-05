import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>
, document.getElementById('root'));

// Hot Module Replacement, remove this snippet to remove HMR... as if😂
if(import.meta.hot) {
    import.meta.hot.accept();
}