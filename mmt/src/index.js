import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider toastOptions={{ defaultOptions: { position: 'top' } }}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </ChakraProvider>
);
