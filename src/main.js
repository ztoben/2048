import Vue from "vue";
import { VueHammer } from "vue2-hammer";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.use(VueHammer);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
