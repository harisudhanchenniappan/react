import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import All from './components/All'
import Fsd from './components/Fsd'
import Ds from './components/Ds'
import Cs from './components/Cs'
import Career from './components/Career'
import Index from './components/Index'


const router=createBrowserRouter([
  {
    path:'/',
    element: <All />,
    children:[
      {
        index:true,
        element:<Index />
      },
      {
      path:'/fullStackDevelopment',
      element:<Fsd />,
    },
    {
      path:'/dataScience',
      element:<Ds />,
    },
    {
      path:'/cyberSecurity',
      element:<Cs />,
    },
    {
      path:'/career',
      element:<Career />,
    },
  ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App