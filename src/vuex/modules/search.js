import { reqSearchData, reqSearchWord } from "../../api";
//常量引入
import { RECEIVE_SEARCHDATA,RECEIVE_RESULT } from "../mutations_type";

 const actions = {
   async getSearchData({ commit }) {
     const result = await reqSearchData();

     if (result.code == 200) {
       const searchData = result.data;
       commit(RECEIVE_SEARCHDATA, searchData);
     }
   },
   async getSearchResult({ commit },keyWord) {
     const result = await reqSearchWord(keyWord);
     if (result.code == 200) {
       const searchResult = result.data;
       commit(RECEIVE_RESULT, searchResult);
     }
   }
 };
const mutations = {
  [RECEIVE_SEARCHDATA](state, searchData) {
    state.searchData = searchData;
  },
  [RECEIVE_RESULT](state, searchResult) {
    state.searchResult = searchResult;
  }
};
const getters={

}
const state={
   searchData:{},
   searchResult:[]
}


export default {
  actions,
  mutations,
  getters,
  state
}