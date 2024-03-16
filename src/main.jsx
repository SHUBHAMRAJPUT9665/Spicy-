import React, { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './component/Login.jsx'
import Contact from './component/Contact.jsx'
import Error from './component/Error.jsx'
import Body from './component/Body.jsx'
import Shimmer from './component/Shimmer.jsx'
const RestaurantMenu = lazy(() => import('./component/RestaurantMenu.jsx'))
const About = lazy(() =>import('./component/About.jsx') )

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
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/restaurant/:resId',
        element: <Suspense fallback={<Shimmer/>}> <RestaurantMenu /> </Suspense>
      }
    ],
    errorElement: <Error />
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider  router={appRouter}/>
)
