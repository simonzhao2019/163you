<template>
  <div class="nav-wrapper" ref="navScroll">
    <ul class="nav-content">
      <li>
        <div class="picture">
          <img src="http://yanxuan.nosdn.127.net/8a7d846aa334d1a14ae33d612fe4f01e.jpg" alt="picUrl" />
        </div>
        <div class="bottom_price">
          <span class="flash_price">女式咖啡碳+5℃保暖内衣（上衣/裤子）</span>
        </div>
      </li>
      <li>
        <div class="picture">
          <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl" />
        </div>
        <div class="bottom_price">
          <span class="flash_price">女式咖啡碳+5℃保暖内衣（上衣/裤子）</span>
        </div>
      </li>
      <li>
        <div class="picture">
          <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl" />
        </div>
        <div class="bottom_price">
          <span class="flash_price">女式咖啡碳+5℃保暖内衣（上衣/裤子）</span>
        </div>
      </li>
      <li>
        <div class="picture">
          <img src="http://yanxuan.nosdn.127.net/8a7d846aa334d1a14ae33d612fe4f01e.jpg" alt="picUrl" />
        </div>
        <div class="bottom_price">
          <span class="flash_price">女式咖啡碳+5℃保暖内衣（上衣/裤子）</span>
       
        </div>
      </li>
      <li>
        <div class="picture">
          <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg" alt="picUrl" />
        </div>
        <div class="bottom_price">
          <span class="flash_price">女式咖啡碳+5℃保暖内衣（上衣/裤子）</span>
         
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
export default {
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
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.nav-wrapper
  height  361px
  margin-top 20px
  box-sizing border-box
  display flex
  overflow hidden
  .nav-content
    height 361px
    display flex
    li
      display flex
      flex-direction column
      width 200px
      height 361px
      margin-right 20px
      .picture
        background-color #ccc
        img
          width 200px
          height 200px
      .bottom_price
         height 40px
         width  175px
         .flash_price
            color #333
            font-size 20px
            text-align center
          

     
     
</style>
