import { Home, Users } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'groups',
    title: 'Groups',
    icon: <Users size={20} />,
    navLink: '/second-page'
  }
]
