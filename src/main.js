// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Weather from './components/Weather'
import SearchBar from './components/SearchBar'
import VueResource from 'vue-resource';

Vue.use(VueResource);


Vue.component('weather', Weather)
Vue.component('search-bar', SearchBar)
Vue.config.productionTip = false

const axios = require('axios');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


