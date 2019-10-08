<template>
 <footer class="footer_guide border-1px" >
    <span class="guide_item" @click="jumpTo('/home')" :class="{active:'/home'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" @click="jumpTo('/category')" :class="{active:'/category'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon--shangpinfenlei-gai"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" @click="jumpTo('/recognize')" :class="{active:'/recognize'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-tupian1"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" @click="jumpTo('/cart')" :class="{active:'/cart'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="jumpTo('/personal')" :class="{active:'/personal'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-gerensvg"></i>
      </span>
      <span>个人</span>
    </span>
  
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      jumpTo(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
 .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    right 0
    bottom 0
    width 100%
    height 98px
    font-size 24px
    display flex
    background-color #fff
    justify-content space-around
    .guide_item
      display flex
      flex-direction column
      justify-content center
      align-items center
      .item_icon
        margin 15px 0
      &.active
        color #b4282d
  

 
</style>
