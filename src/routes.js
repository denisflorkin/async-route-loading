import Loadable from 'react-loadable'
import Home from './Home'
import Posts from './Posts'
import Post from './Post'
import About from './About'
import Loading from './Loading'
import Page2 from './Page2'
import Page3 from './Page3'

// const makeLoadable = modulePath => ( // eslint-disable-line no-unused-vars
//   Loadable({
//     loader: () => import(`${modulePath}`),
//     loading: Loading,
//   })
// )

const routes = [
  {
    inMainMenu: true,
    componentPath: './Home',
    component: Loadable({
      loader: () => import('./Home'),
      loading: Loading,
    }),
    component: Home,
    props: {
      path: '/',
      key: 'home',
      component: Home,
      exact: true,
    },
  },
  {
    inMainMenu: true,
    componentPath: './Page2',
    component: Loadable({
      loader: () => import('./Page2'),
      loading: Loading,
    }),
    props: {
      path: '/page2',
      key: 'page2',
      component: Page2,
      exact: true,
    },
  },
  {
    inMainMenu: true,
    componentPath: './Page3',
    component: Loadable({
      loader: () => import('./Page3'),
      loading: Loading,
    }),
    props: {
      path: '/page3',
      key: 'page3',
      component: Page3,
      exact: true,
    },
  },
  {
    inMainMenu: true,
    componentPath: './About',
    component: Loadable({
      loader: () => import('./About'),
      loading: Loading,
    }),
    props: {
      path: '/about',
      key: 'about',
      component: About,
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
