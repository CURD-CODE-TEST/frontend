import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import Create from './components/Create.vue';
import Update from './components/Update.vue';
import Index from './components/Index.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Update',
    path: '/update',
    component: Update
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
  {
    name: 'Index',
    path: "/",
    component: Index
  }
];

const router = new VueRouter({mode: 'history', routes: routes});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
