import Home from './Home'
import Posts from './Posts'
import Post from './Post'

export default [
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
