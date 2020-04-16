// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "vuetify/dist/vuetify.min.css";
import "./vuetify-overrides.scss";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Vue from "vue";

import Vuetify from "vuetify";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.config.devtools = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  vuetify: new Vuetify({}),
  iconfont: "md",
  store,
  router,
  template: "<App/>",
  components: { App },
  render: h => h(App)
});
