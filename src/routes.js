import Loadable from 'react-loadable'
import Home from './Home'
import Loading from './Loading'

const routes = [
  {
    inMainMenu: true,
    props: {
      path: '/',
      key: 'home',
      component: Home,
      exact: true,
    },
  },
  {
    inMainMenu: true,
    props: {
      path: '/page2',
      key: 'page2',
      component: Loadable({
        loader: () => import('./Page2'),
        loading: Loading,
      }),
      exact: true,
    },
  },
  {
    inMainMenu: true,
    props: {
      component: Loadable({
        loader: () => import('./Page3'),
        loading: Loading,
      }),
      path: '/page3',
      key: 'page3',
      exact: true,
    },
  },
  {
    inMainMenu: true,
    props: {
      component: Loadable({
        loader: () => import('./About'),
        loading: Loading,
      }),
      path: '/about',
      key: 'about',
      exact: true,
    },
  },
  {
    inMainMenu: true,
    componentPath: './Posts',
    props: {
      path: '/posts',
      key: 'posts',
      component: Loadable({
        loader: () => import('./Posts'),
        loading: Loading,
      }),
    },
  },
  {
    inMainMenu: false,
    props: {
      path: '/post/:id',
      key: 'post',
      component: Loadable({
        loader: () => import('./Post'),
        loading: Loading,
      }),
    },
  },
]

export default routes.map(route => ({
  ...route,
}))
