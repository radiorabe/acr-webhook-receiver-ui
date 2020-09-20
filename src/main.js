import Vue from "vue";
import App from "@/App.vue";

import Vuex from "vuex";

import VueLuxon from "vue-luxon";

import Store from "@/store";

import vuetify from "./plugins/vuetify";

import '@/assets/main.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueLuxon, {
  serverFormat: "iso",
});

new Vue({
  vuetify,

  store: Store,
  render: (h) => h(App),
}).$mount("#app");
