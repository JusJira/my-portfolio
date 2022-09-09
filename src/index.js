import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NotFound from './404';
import theme from './Theme';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route excat path='/' element={<App/>}/>
          <Route excat path='404' element={<NotFound/>}/>
          <Route path='*' element={ <Navigate to="/404" />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
