import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/RobotoCondensed-Regular.ttf'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { QueryClientProvider, QueryClient  } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {BrowserRouter} from 'react-router-dom'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>

  <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
