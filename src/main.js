// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { ValidationProvider } from "vee-validate";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

const BASE_API = "localhost:3000/api/v1";

Vue.config.productionTip = false;
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
