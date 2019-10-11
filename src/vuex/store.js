import Vue from 'vue';
import Vuex from 'vuex';

//模块状态的引入
import categorys from './modules/categorys';
import home from './modules/home';
import search from './modules/search';



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categorys,
    home,
    search
  }
});