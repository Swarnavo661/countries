import React from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetails from './components/CountryDetails'
import App from './App'

const root = createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact', // ✅ Now contact also gets Header
        element: <Contact />,
      },
      {
        path: '/:country',
        element: <CountryDetails />,
      },
    ],
  },
])

root.render(<RouterProvider router={router} />)
