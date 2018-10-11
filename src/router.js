import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './components/news/News'
import Other from './views/Other.vue'
import ChildLinkOne from './components/otherChild/ChildLinkOne.vue'
import ChildLinkTwo from './components/otherChild/ChildLinkTwo.vue'
import Weather from './views/Weather.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/faker/:Id',
      redirect: '/other/:Id'
    },
    {
      path: '/other/:Id',
      name: 'other',
      component: Other,
      children: [
        {
          path: 'childLinkOne/:lprops',
          components: {
            a: ChildLinkOne
          },
          props: {
            a:true
          }
        },
        {
          path: 'childLinkTwo',
          components: {
            b: ChildLinkTwo
          }
        }
      ]
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    }
  ]
})
