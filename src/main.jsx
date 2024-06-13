import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import Authprovider from './AuthProvider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  
)
