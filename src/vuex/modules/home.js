import {reqHomeDate } from "../../api";
//常量引入
import {RECEIVE_HOMEDATA } from "../mutations_type";

 const actions={
  async getHomeData({commit}){
    const result = await reqHomeDate();
    if(result.code===0){
      const homeData=result.data
      commit(RECEIVE_HOMEDATA, homeData);
    }

   
  }
}
const mutations = {
  [RECEIVE_HOMEDATA](state, homeData) {
    state.homeData = homeData;
  }
};
const getters={

}
const state={
   homeData: {}
}


export default {
  actions,
  mutations,
  getters,
  state
}