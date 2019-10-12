<template>
  <div id="phoneLogin">
<div class="login_window">
  <div class="login_img">
    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
  </div>
  <form class="login_input">
    <div class="login_input_section1">
      <input type="text" placeholder="请输入手机号码">
      <input type="text" placeholder="请输入验证码">
    </div>
 
    <div class="login_input_section2">
      <span>忘记密码</span>
      <span>短信快捷登录</span>
    </div>
    <input type="submit" value="登录" @click.prevent="" class="submmitButton">
  </form>
  <div>其它登录方式</div>
</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#phoneLogin
  padding-top 88px
  .login_window
    width 100%
    height 722px
    padding 20px
    box-sizing border-box
    .login_img
      width 100%
      height 133
      margin-top 56px
      box-sizing border-box
      text-align center
      img 
        width 192px
        height 64px
        box-sizing border-box
    .login_input
      box-sizing border-box
      width 100%
      height 576px
      margin-top 50px
      .login_input_section1
        width 100%
        display flex
        flex-direction column
        input 
         outline none 
         box-sizing border-box
         border-bottom 1px solid #ccc
         margin-top 50px
         padding 20px 20px
         font-size 30px
      .login_input_section2
        width 100%
        height 44px
        display flex
        box-sizing border-box
        margin 30px 0
        font-size 30px
        justify-content space-between 


        
            



 
</style>
