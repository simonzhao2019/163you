<template>
  <div class="home">
    <div class="headerSection">
      <div class="logo">
        <a href="javascript:;"><img src="../../common/images/logo.png" alt="logo"></a>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="搜索商品，共23069款好物品">
        </div>
        <button>登录</button>
      </div>
      <div class="nav-wrapper" ref="navScroll">
        <ul class="nav-content" @click="selectNav">
          <li><a href="javascript:" :class="{active:current==='0'}" data-index="0">推荐</a></li>
          <li><a href="javascript:" :class="{active:current==='1'}" data-index="1">居家生活</a></li>
          <li><a href="javascript:" :class="{active:current==='2'}" data-index="2">服饰鞋包</a></li>
          <li><a href="javascript:" :class="{active:current==='3'}"  data-index="3">美食酒水</a></li>
          <li><a href="javascript:" :class="{active:current==='4'}" data-index="4">个户清洁</a></li>
          <li><a href="javascript:" :class="{active:current==='5'}" data-index="5">母婴亲子</a></li>
          <li><a href="javascript:" :class="{active:current==='6'}" data-index="6">运动旅行</a></li>
          <li><a href="javascript:" :class="{active:current==='7'}" data-index="7">数码家电</a></li>
          <li><a href="javascript:" :class="{active:current==='8'}" data-index="8">礼品特色</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

  export default {
    data(){
      return {
        current:"0"
      }
    },
    methods: {
      selectNav(event){
        this.current=event.target.dataset.index
      }
    },
   mounted() {
     this.$nextTick(()=>{
        if(!this.scroll){
           this.scroll=new BScroll(this.$refs.navScroll,{  
             scrollX:true,
             click:true            
           })
        }else{
          this.bScroll.refresh()
        }
     })
   },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.home
 .headerSection
   .logo
      display flex
      align-items center
      justify-content space-around
      box-sizing border-box
      width 750px
      height 72px
      padding 16px 30px
      img 
        display block
        height 40px
        width 138px
      .search
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        margin 0 8px
        height 56px
        width 486px
        background-color #ededed
        input 
          width 330px
          height 37px
          font-size 12px
          background-color #ededed
          outline none
      button 
        width 78px
        height 44px
        border 1px solid #b4282d
        color #b4282d
        font-size 24px
        background-color #fff
   .nav-wrapper
      height  60px
      display flex
      .nav-content
        height 60px
        display flex
        li
          display flex
          flex none
          justify-content center
          box-sizing border-box
          text-align center
          line-height 60px
          font-size 28px
          width 150px
          a.active
            color #b4282d
</style>
