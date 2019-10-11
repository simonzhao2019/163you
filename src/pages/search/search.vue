<template>
  <div id="search">
    <div class="search_header">
      <div class="search_input">
        <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索商品，共23069款好物品"  v-model="searchWords" 
      @keyup="submitKeyWords"/>
      </div>
      <span class="cancel" @click="jump">取消</span>
    </div>
    <div class="result_show" v-if="searchWords" >
        <ul>
          <li v-for="(item,index) in searchResult" :key="index">
           {{ item}}
          </li>
        </ul>
      </div>
    <div class="hot_search">热门搜索</div>
    <ul class="hot_search_list">
      <li v-for="(item,index) in searchData.hotKeywordVOList" :key="index">
        <a href="javascript:">
        {{item.keyword}}
        </a>
      </li>
   
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex';
export default {
  data(){
    return {
      searchWords:"",
    }
  },
  methods: {
    jump(){
      console.log(111)
      this.$router.back()
    },
    submitKeyWords(){
      const keyWords=this.searchWords.trim()
      if(!keyWords){
        return
      }else{
         clearTimeout(this.timeId)
       this.timeId=setTimeout(() => {
       this.$store.dispatch("getSearchResult",keyWords)
      }, 2000); 
      }
    }
  },
  computed: {
    ...mapState({
      searchData:state=>state.search.searchData,
      searchResult:state=>state.search.searchResult
    })
  },

  mounted() {
    this.$store.dispatch("getSearchData")
  },
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#search
 width 100%
 height 100%
 .search_header
    width 100%
    height 88px
    padding 0 30px
    box-sizing border-box
    background-color #fff
    display flex
    align-items center
    .search_input
      width 604px
      height 54px
      background-color #ededed
      display flex 
      justify-content center
      align-items center
      input 
        width 520px
        height 40px
        outline none 
        font-size 24px
        background-color #ededed
    .cancel
      margin-left 15px
      font-size 29px
      height 27px
      width 100px
      border none
  .hot_search
    padding 0 30px
    color #999
    font-size 30px
    height 90px
    width 690px
    line-height 90px
  .hot_search_list
    height 238px
    width 720px
    padding 0 15px
    display flex
    flex-wrap wrap
    li
      margin 0 16px 16px 0
      height 47px
      a
        margin-right 16px
        padding 4px 7px
        border 1px solid #999
        height 23px
        box-sizing border-box
        line-height 46px
        text-align center
        font-size 28px
  .result_show
    min-height 1258px
    width 100%
    box-sizing border-box
    position absolute
    left 0
    bottom 0
    background-color #fff
    ul
      width 100%
      padding 0 15px
      box-sizing border-box
      li
        height 91px
        width 690px
        font-size 28px
        line-height 91px


</style>
