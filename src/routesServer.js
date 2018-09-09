import Home from './Home'
import Page2 from './Page2'
import Page3 from './Page3'
import About from './About'
import Posts from './Posts'
import Post from './Post'

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
      component: Page2,
      exact: true,
    },
  },
  {
    inMainMenu: true,
    props: {
      component: Page3,
      path: '/page3',
      key: 'page3',
      exact: true,
    },
  },
  {
    inMainMenu: true,
    props: {
      component: About,
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
      component: Posts,
    },
  },
  {
    inMainMenu: false,
    props: {
      path: '/post/:id',
      key: 'post',
      component: Post,
    },
  },
]

export default routes
