import Loadable from 'react-loadable'
import Home from './Home'
import Posts from './Posts'
import Post from './Post'
import Loading from './Loading'

const makeLoadable = modulePath => ( // eslint-disable-line no-unused-vars
  Loadable({
    loader: () => import(`${modulePath}`),
    loading: Loading,
  })
)

const routes = [
  {
    inMainMenu: true,
    componentPath: './Home',
    component: Loadable({
      loader: () => import('./Home'),
      loading: Loading,
    }),
    props: {
      path: '/',
      key: 'home',
      component: Home,
      exact: true,
    },
  },
  {
    inMainMenu: true,
    componentPath: './Posts',
    component: Loadable({
      loader: () => import('./Posts'),
      loading: Loading,
    }),
    props: {
      path: '/posts',
      key: 'posts',
      component: Posts,
      exact: true,
    },
  },
  {
    inMainMenu: false,
    componentPath: './Post',
    component: Loadable({
      loader: () => import('./Post'),
      loading: Loading,
    }),
    props: {
      path: '/post/:id',
      key: 'post',
      component: Post,
    },
  },
]

export default routes.map(route => ({
  ...route,
  props: {
    ...route.props,
    component: route.component,
  },
}))
