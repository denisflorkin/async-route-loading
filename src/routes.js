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
    props: {
      path: '/posts',
      key: 'posts',
      component: Posts,
    },
  },
  {
    inMainMenu: false,
    componentPath: './Post',
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
    // component: makeLoadable(route.componentPath),
  },
}))
