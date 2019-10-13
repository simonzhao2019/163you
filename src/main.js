import Vue from 'vue'
import "amfe-flexible";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import  '../src/mockData/mockServer'
import CommonHeader from "../src/components/CommonHeader.vue";
import './validate';
import * as Api from './api';

Vue.prototype.$Api =Api;
Vue.use(VueAwesomeSwiper );
//自己模块的引入
import App from './App.vue'
import router from './Router';//路由模块
import store from './vuex/store';

Vue.config.productionTip = false
//全局组件注册
Vue.component("CommonHeader", CommonHeader);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
