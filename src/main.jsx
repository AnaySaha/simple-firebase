import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Main from './assets/components/layouts/Main.jsx';
import Home from './assets/components/Home/Home.jsx';



import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Login from './assets/components/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/Login',
        element: <Login></Login>
      }
    ]
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)