<template>
  <div >
    <HomeNav></HomeNav>
    <Swiper></Swiper>
    <div class="servicePolicy">
      <span class="servicePolicy_item" >
        <span class="item_icon">
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
        </span>
        <span>网易自营品牌</span>
      </span>
      <span class="servicePolicy_item" >
        <span class="item_icon">
          <i class="iconfont icon-baozhang-copy"></i>
        </span>
        <span>30天无忧退货</span>
      </span>
      <span class="servicePolicy_item" >
        <span class="item_icon">
          <i class="iconfont icon-renminbi"></i>
        </span>
        <span>48小时快速退款</span>
      </span>
    </div>
    <div class="middle_swiper">
      <ul class="middle_swiper_list">
        <li class="middle_swiper_item">
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a></li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
          </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
          </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a>
            <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
            <span>新品首发</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="freshManGift">
      <div class="freshManGift_title">
        <span>新人专享礼</span>
      </div>
      <div class="freshManGift_content">
        <div class="reduce15yuan">
          <a href="javascript:;">
            <span>新人专享礼包</span>
            <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </a>
        </div>
        <div class="right">
          <div class="welfare">
            <div class="welfare_left">
              <p>福利社</p>
              <p>今日特价</p>
            </div>
            <div class="welfare_right">
              <p>￥64.5</p>
              <p>￥129</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/eddaeb4852b8a4732102eab839641c95.png" alt="shoes">
          </div>
          <div class="welfare" style="background-color:#FFECC2">
            <div class="welfare_left">
              <p>福利社</p>
              <p>今日特价</p>
            </div>
            <div class="welfare_right">
              <p>￥64.5</p>
              <p>￥129</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75" alt="shoes">
          </div>
        </div>
      </div>

    </div>
    <div class="manufacturer">
      <div class="manufacturerTitle">
        <h2>品牌制造商</h2>
        <span>更多
          <i class="iconfont icon-jiantou"></i>
        </span>
      </div>
      <ul class="manufacturer_list">
        <li>
          <a href="javascript:;">
            <h4>海外制造商</h4>
            <span>9.9元起</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <h4>海外制造商</h4>
            <span>9.9元起</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <h4>海外制造商</h4>
            <span>9.9元起</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <h4>海外制造商</h4>
            <span>9.9元起</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="categoryHotSell">
      <div class="categoryHotSell_title">类目热销榜</div>
      <div class="categoryHotSell_content">
        <div class="categoryHotSell_top">
          <div class="hotlist">
            <span>热销榜</span>
            <img src="https://yanxuan-item.nosdn.127.net/a5b6447bf85a8ff946c9438fe2ee740a.png" alt="wine">
          </div>
            <div class="hotlist" style="background-color:#EBEFF6">
            <span>好评榜</span>
            <img src="https://yanxuan-item.nosdn.127.net/35a8a3840106785c88a84b3ad91f7ebd.png" alt="piano">
          </div>
        </div>
        <div class="categoryHotSell_bottom">
          <a href="javascript:;" v-for="(item,index) in category" :key="index">
            <span>居家生活榜单</span>
            <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png" alt="mao">
          </a>
        </div>
      </div>
    </div>
    <div class="popularRecommend">
      <div class="popularRecommend_title">
        <span>人气推荐</span>
      </div>
      <div class="popularRecommend_content">
        <div class="model1">
          <div class="wrap">
            <img src="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png" alt="img" >
          </div>
          <div class="text">
            冬夏两用床垫
          </div>
        </div>
        <ul class="popularRecommend_list">
          <li class="popularRecommend_item">
            <a>
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png" alt="img">
              <span>洗脱一体不脏手懒人拖把￥149</span>
            </a>
          </li>
          <li class="popularRecommend_item">
            <a>
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png" alt="img">
              <span>洗脱一体不脏手懒人拖把￥149</span>
            </a>
          </li>
          <li class="popularRecommend_item">
            <a>
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png" alt="img">
              <span>洗脱一体不脏手懒人拖把￥149</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <NewProduct>
      <span slot="title">限时购</span>
      <ul slot="list" class="newproduct">
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
      </ul>
    </NewProduct>
    <NewProduct>
      <span slot="title">限时购</span>
      <ul slot="list" class="newproduct">
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
        <li >
       <div class="infopicture"> <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl"></div>
        <div class="bottom_info">
          <span class="flash_price">¥320</span>
          <span class="old_price">¥450</span>
        </div>
      </li>
      </ul>
    </NewProduct>
    <div class="banner">
      <img src="https://yanxuan.nosdn.127.net/1752f2c923663900acbedd688a90213b.jpg" alt="">
    </div>
  <BottomSlide></BottomSlide>
  </div>
</template>

<script type="text/ecmascript-6">
import BottomSlide from './home/bottomslide';
import HomeNav from "../components/homeHeader/HomeNav.vue";
import Swiper from '../components/homeHeader/swiper';
import NewProduct from './home/newProduct';
export default {
  data(){
    return {
      category:[]
    }
  },
  mounted() {
    for(let i=0;i<8;i++){
      this.category.push("kong")
    }
  },
  components: {
    HomeNav,
    Swiper,
    NewProduct,
    BottomSlide
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
 @import "../common/stylus/mixins.styl"
.servicePolicy
  width 100%
  height 72px
  padding 0 30px
  box-sizing border-box
  display flex
  justify-content space-between
  .servicePolicy_item
    display flex
    font-size 24px
    color #333
    text-align center
    align-items center
    .item_icon
      color $themeColor
      margin-right 5px
.middle_swiper
  width 100%
  height 341px
  display flex
  .middle_swiper_list
    display flex
    height 100%
    width 100%
    flex-wrap wrap
    a
      display flex
      flex-direction column
      margin 10px 20px
      justify-content space-between
      img 
        width 110px
        height 110px
      span
        margin-top 20px 
        font-size  24px
        color #333
.freshManGift
  width 100%
  box-sizing border-box
  height 558px
  padding 0 20px
  margin 30px 0 0
  background-color #fff
  overflow hidden
  .freshManGift_title
    width 100%
    height 90px
    text-align center
    line-height 90px
    font-size 32px
    span
     position relative
     &:before
      content ""
      position absolute
      left -30px
      bottom 16px
      width 24px
      height 3px
      background #333333
     &:after
      content ""
      position absolute
      right -24px
      bottom 16px
      width 24px
      height 3px
      background #333333
  .freshManGift_content
    width 100%
    height 438px
    display flex
    justify-content space-between
    .reduce15yuan
      width 343px
      height 434px
      background-color #F9E9CF
      a
        display flex
        width 100%
        height 100%
        flex-direction column
        justify-content center
        align-items center
        img 
          width 258px
          height 257px
        span 
          font-size 26px
          color #333
          margin-bottom 40px
          margin-left -40px 
    .right
      width 343px
      height 438px
      display flex
      flex-direction column
      justify-content space-between
      .welfare
        position relative
        width 100%
        height 215px
        box-sizing border-box
        background-color #FBE2D3
        display flex
        padding 20px
        justify-content space-around
        .welfare_left
          p:nth-child(1)
           font-size 30px
           color #333
          p:last-child
           font-size 24px
           color #7F7F7F
           margin-top 15px
        .welfare_right
          height 80px
          width 80px
          border-radius 40px
          background-color #F59524
          color #fff
          display flex
          flex-direction column
          justify-content center
          align-items center
          p:nth-child(1)
            font-size 16px
          p:nth-child(2)
            font-size 24px
            text-decoration line-through
        img 
          width 200px
          height 200px
          position absolute
          right 0
          bottom  0 
.manufacturer
  width 100%
  height 654px
  margin-bottom 30px
  background-color #fff
  .manufacturerTitle
    width 100%
    height 100px
    display flex
    justify-content space-between
    align-items center
    padding 0 15px
    box-sizing border-box
    h2
      font-size 32px
      color #333
    span 
      font-size 24px
  .manufacturer_list
    display flex
    width 100%
    padding 0 15px
    box-sizing border-box
    justify-content space-between
    flex-wrap wrap
    li
      width 49%
      height 260px 
      text-align center
      background url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1")
      background-size cover
      margin-bottom 12px
      h4
       color #333
       font-size 28px
       margin-top 15px
      span
        font-size 24px
        color #7f7f7f
.categoryHotSell
  width 100%
  height 710px
  margin-bottom 20px
  padding 0 15px
  box-sizing border-box
  .categoryHotSell_title 
    width 100%
    height 100px
    font-size 30px
    color #333
    line-height 100px
  .categoryHotSell_content
    width 100%
    height 610px
    .categoryHotSell_top
      width 100%
      display flex
      justify-content space-between
      .hotlist
        display flex
        width 49%
        background-color #F9F3E4
        justify-content space-around
        align-items center
        img 
         height 200px
         width 200px
        span 
         font-size 28px
         text-align center
    .categoryHotSell_bottom
      width 100%
      display flex
      box-sizing border-box
      justify-content space-between
      flex-wrap wrap
      a
       width 165px
       height 180px
       display flex
       margin-top 15px
       justify-content center
       flex-direction column
       align-items center
       background-color #F5F5F5
       span 
        font-size 20px
        margin 10px 0 0
      img 
        height 120px
        width 120px
.popularRecommend
  width 100%
  height 784px
  padding 0 15px
  box-sizing border-box
  .popularRecommend_title
    width 100%
    height 100px
    font-size 32px
    line-height 100px
  .model1
    width 100%
    height  280px
    background-color #FEF0DF
    display flex
    justify-content space-around
    img
      width 280px
      height 280px
    .text
      font-size 29px
      line-height 280px
      text-align center
      color #333
  .popularRecommend_list
    display flex
    justify-content space-around
    width 100%
    height 354px
    background-color #ccc
    a
      display flex
      flex-direction column
      align-items center
      width 216px
      height 300px
      img 
        width 216px
        height 216px
      span 
        color #333
        font-size 24px
.newproduct
  width 100%
  height 599px
  display flex
  flex-wrap wrap
  justify-content space-between
  li
    width 216px
    height 299px
    .infopicture
      background-color #ccc
      img
        width 216px
        height 216px
    .bottom_info
      text-align center
      width 216px
      height 41px
      .flash_price
        color red
        font-size 24px
      .old_price
        text-decoration line-through
        font-size 20px
        margin-left 10px
.banner
  width 100%
  height 370px
  margin-top 20px
  img
    width 100%
    height 370px
      
      


     



</style>
