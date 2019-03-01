// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/js/flexble";
import "./common/css/reset.css";
import "./assets/iconfont/iconfont.css";
import store from "./store";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> wyss
import Mint from 'mint-ui';
import "mint-ui/lib/style.css"
=======
import "mint-ui/lib/style.css";
import Mint from "mint-ui";
import axios from "axios";
>>>>>>> wu
Vue.use(Mint);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
