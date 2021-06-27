import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/pages/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/pages/SecondPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/pages/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/signup',
    component: lazy(() => import('../../views/pages/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/account-settings',
    component: lazy(() => import('../../views/pages/account-settings'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/pages/Error')),
    layout: 'BlankLayout'
  },
  {
    path: '/messenger',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  }
]

export default PagesRoutes
