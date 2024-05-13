import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Content from './components/Content.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"/",
      element:<Content/>
    }
  ]
  },{
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
