<template>
<div style="height:100%">
<CommonHeader >
  <span class="personTitle">
    网易严选
  </span>
</CommonHeader>
<div class="personalContent" v-if="$route.path==='/personal'">
  <div class="topImg">
     <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img"> 
  </div>
  <div class="loginContent">
    <div class="phoneLogin" @click="$router.replace('/personal/phonelogin')">手机号码快捷登录</div>
    <div class="emailLogin" @click="$router.replace('/personal/emaillogin')"> 邮箱账号登录</div>
  </div>
  <div class="socialMedia"></div>
</div>
<router-view></router-view>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.personTitle
  width 160px
  height 45px
  font-size 40px
  font-weight bold
.personalContent
  padding 88px 0
  width 100%
  height 100%
  background-color #F2F5F4
  .topImg
    width 100%
    height 510px
    text-align center
    img 
      width 268px
      height 90px
      vertical-align middle
    &:after
      content ""
      height 100%
      width 0
      display inline-block
      vertical-align middle
  .loginContent
    width 100%
    height 220px
    padding 15px
    box-sizing border-box
    font-size 14px
    .phoneLogin,
    .emailLogin
      width 100%
      height 94px
      background-color #DD1A21
      border 1px solid #DD1A21
      border-radius 8px
      text-align center
      line-height 94px
      margin-bottom  15px
      color white
    div:last-child
      background-color #fff
      color #DD1A21




</style>
