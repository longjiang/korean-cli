import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dictionary'
    },
    {
      path: '/dictionary/:method?/:args?',
      name: 'dictionary',
      props: true,
      component: () => import('./views/Dictionary.vue'),
      meta: {
        title: 'Dictionary | Korean Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Type Korean with the Korean script.'
          }
        ]
      }
    }
  ]
})
