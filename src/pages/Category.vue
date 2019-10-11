<template>
  <div id="category_box">
    <div class="header" >
      <div class="search_box">
        <div >
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="search">
          <span @click="$router.push('/search')">搜索商品，共19999件好物</span>
        </div>
      </div>
    </div>
    <div class="category_content">
      <div class="category_list" >
        <ul >
          <li v-for="(category,index) in categoryList" :key="index"
            @click="toDetail(index)"
           :class="{active:curIndex===index}"
          >
          {{category.name}}
          </li>
        </ul>
      </div>
      <div class="category_detail" v-if="categoryList.length>0">
      <img  :src="categoryList[curIndex].bannerUrl" alt="WapBanner"> 
        <ul>
          <li v-for="(item, index) in categoryList[curIndex].subCateList" :key="index">
            <div>
              <img  :src="item.wapBannerUrl" alt="logo">
              <div>{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex';
  export default {
    data(){
      return {
        curIndex:0
      }
    },
    methods: {
      toDetail(index){
        this.curIndex=index
      }
    },
    computed: {
      ...mapState({
        categoryList:state=>state.categorys.categoryList
      })
    },
    mounted() { 
       this.$store.dispatch("getCategoryList")
    },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#category_box
  width 100%
  padding-top 88px
  .header
    position fixed
    top 0
    left 0
    z-index 100
    width 100%
    height 88px
    border-bottom 1px solid #eee
    background-color: #fff
    display flex
    align-items center
    justify-content center
    .search_box
      width 675px
      height 56px
      border-radius 8px
      background-color: #ededed
      display flex
      align-items center
      justify-content center
      >div
        display flex
        align-items center
        >img
          width 28px
          height 28px
          margin-right 10px
        >span
          font-size 28px 
  .category_content
    width 100%
    font-size 28px
    .category_list
      width 162px
      position fixed
      left 0
      top 88px
      border-right 1px solid #eee
      ul
        width 100%
        li
          width 100%
          height 50px
          line-height 50px
          text-align center
          font-size 28px
          color #7e8c8d
          margin-top 20px
          &.active
            color #b4282d
            border-left 6px solid #b4282d
    .category_detail
      float right
      width 588px
      box-sizing border-box
      padding 15px 30px 100px
      font-size 28px
      >img
        width 528px
        height 192px
        background-color: #fff
      >ul
        width 528px
        margin-top 20px
        display flex
        flex-wrap wrap
        >li
          width 144px
          height 216px
          margin-right 32px
          >div
            >img
              width 144px
              height 144px
            >div
              width 144px
              height 72px
              text-align center
                      
</style>
