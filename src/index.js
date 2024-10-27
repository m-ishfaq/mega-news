import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    {/* <ColorModeScript theme={theme} />
    <ColorModeSwitcher /> */}
    <App />
  </ChakraProvider>
);