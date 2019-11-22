import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'

Vue.use(Router)

import MainMenu from './components/MainMenu.vue'
import HostOptions from './components/HostOptions.vue'
import PlayCard from './components/PlayCard.vue'
import QRScreen from './components/QRScreen.vue'

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MainMenu,
      },
      {
        path: '/host',
        component: HostOptions,
      },
      {
        path: '/qr',
        component: QRScreen,
      },
      {
        path: '/play',
        component: PlayCard,
      },
    ],
  })
  
  export default router
  