<template>
  <div class="headerTitle">
    <span class="header_home" @click="$router.replace('/home')">
      <i class="iconfont icon-home1"></i>
    </span>
    <slot></slot>
    <div class="right">
      <span class="search">
        <i class="iconfont icon-search"></i>
      </span>
      <span class="header_cart">
        <i class="iconfont icon-cart"></i>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.headerTitle
  padding 0 15px
  box-sizing border-box
  width 100%
  position fixed
  height 88px
  display flex
  justify-content space-between
  align-items center
  background-color #fff
  .header_home
    i
      font-size 40px
      margin-left 20px
  .right
    i
      margin-right 20px
      font-size 40px
  &:after
    width 100%
    height 2px
    position absolute
    bottom 0
    left 0
    content "" 
    display block
    background-color #000

 
</style>
