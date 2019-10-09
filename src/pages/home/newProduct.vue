<template>
  <div class="wrap">
    <div class="headerTitle">
      <slot name="title"></slot>
      <span>更多</span>
    </div>
    <div class="content">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  width 100%
  height 690px
  box-sizing border-box
  padding 0 15px
  .headerTitle
    height 100px
    width 100%
    justify-content space-between
    display flex
    align-items center
    span 
     font-size 32px
 
</style>
