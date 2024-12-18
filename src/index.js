import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoDetails from "./pages/TodoDetails";
import Todos from "./pages/Todos";
import {FilterProvider} from "./components/filter/FilterDetails.js";


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todos />,
  },
  {
    path: '/todos/:todoId',
    element: <TodoDetails />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
