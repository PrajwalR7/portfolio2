import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
// import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'box-icon': any
      }
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <ColorModeScript initialColorMode="dark" /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
