import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/pages/root'
import Login from '../components/pages/login'
import SignUp from '../components/pages/sign-up'
import Bank from '../components/pages/bank'
import Builder from '../components/pages/builder'
import Properties from '../components/pages/properties'

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/bank",
      element: <Bank />
    },
    {
        path: "/builder",
        element: <Builder />
      },
      {
        path: "/properties",
        element: <Properties />
      },
  ])