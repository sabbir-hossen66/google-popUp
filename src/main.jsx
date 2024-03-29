import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './pages/Home/Home';
import Root from './layout/Root/Root';
import Login from './Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/contact",
        element: <div>hellaaa</div>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
