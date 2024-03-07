import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './component/Login.jsx'
import Contact from './component/Contact.jsx'
import Error from './component/Error.jsx'
import About from './component/About.jsx'
import Body from './component/Body.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider  router={appRouter}/>
)
