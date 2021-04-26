import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";
import Vuex from "vuex";
import storeOptions from "./stores/store"

Vue.use(Vuex);
const store = new Vuex.Store(storeOptions);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
