import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from './Components/ErrorPage/ErrorPage';

 // Create and render a browser router in main.jsx START

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/HOME/Home';
import Dashboard from './Components/Dashboard/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>
    },
    {

    },
   ]

  },
]);
  // Create and render a browser router in main.jsx End


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
