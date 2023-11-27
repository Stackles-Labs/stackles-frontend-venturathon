import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Form from './components/Form/Form.jsx'
import Layout from './components/Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPage from './components/StartPage/StartPage.jsx'
import Platform from './components/Platform/Platform.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<StartPage/>
      },
      {
        path:"platform",
        element:<Platform/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
