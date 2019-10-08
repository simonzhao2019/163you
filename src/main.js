import Vue from 'vue'
import "amfe-flexible";

//自己模块的引入
import App from './App.vue'
import router from './Router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
