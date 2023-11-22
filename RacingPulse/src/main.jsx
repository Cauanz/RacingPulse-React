import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Create from './pages/Create.jsx'
/* import LogIn from './pages/Login-Authentication/LogIn.jsx'
import SignUp from './pages/Login-Authentication/SignUp'; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "CreatePost",
    element: <Create />,
  },
/*   {
    path: 'Login',
    element: <LogIn />,
  },
  {
    path: 'SignUp',
    element: <SignUp />,
  } */
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
