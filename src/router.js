import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BandsView from './views/BandsView.vue';
import BandEditView from './views/BandEditView';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bands',
      name: 'View Bands',
      component: BandsView
    },
    {
      path: '/bands/new',
      name: 'Create Band',
      component: BandEditView
    },
    {
      path: '/bands/edit/:id',
      name: 'Edit Band',
      component: BandEditView,
      props: true
    }
  ]
})
