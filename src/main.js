import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementUi from 'element-ui';
import '@/style/elementUI.css';
import '@/style/reset.css';
import '@/style/index.scss';
Vue.config.productionTip = false;
Vue.use(elementUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
