import { reqCategoryList } from "../../api";
//常量引入
import { RECEIVE_CATEGORYLIST } from "../mutations_type";

 const actions={
  async getCategoryList({commit}){
    const result=await reqCategoryList()
    if(result.code===0){
      const categoryList=result.data
      commit(RECEIVE_CATEGORYLIST,categoryList)
    }

   
  }
}
const mutations={
  [RECEIVE_CATEGORYLIST](state,categorylist){
    state.categoryList=categorylist
  }

}
const getters={

}
const state={
   categoryList: []
}


export default {
  actions,
  mutations,
  getters,
  state
}