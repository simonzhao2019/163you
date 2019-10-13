<template>
  <div class="recognize">
<CommonHeader>
  <div class="headerTab">
    <span>发现</span>
    <span>甄选家</span>
  </div>
</CommonHeader>
  <div class="nav-wrapper"  ref="recognizeNavScroll">
        <ul class="nav-content" v-if="navArr.length>0">
          <li v-for="(navItem,index) in navArr"
          :key="index"
          @click="switchNav(navItem.tabId)"
          :class="{active:currentNav==navItem.tabId}"
          ><a href="javascript:" >{{navItem.tabName}}</a></li>
        </ul>
      </div>
      <RecognizeContent></RecognizeContent>
  </div>
</template>

<script type="text/ecmascript-6">
import { reqRecognizeNav  } from '../api';
import RecognizeContent from '../components/recognizeContent';
import BScroll from '@better-scroll/core';
  export default {
    data(){
      return {
        navArr:[],
        currentNav:9
      }
    },
    methods: {
      switchNav(navid){
        this.currentNav=navid
      }
    },
    async mounted() {
      console.log(1111111);
      const result=await reqRecognizeNav()
      if(result.code==200){
        this.navArr=result.data
      }
        this.$nextTick(()=>{
        if(!this.navScroll){
          this.navScroll=new BScroll(this.$refs.recognizeNavScroll,{
            scrollX:true,
            click:true   
          })
        }else{
          this.navScroll.refresh()
        }
      }) 
     
    },
    components:{
      RecognizeContent
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.recognize
  width 100%
  height 100%
  .headerTab
    height 100px
    width 320px
    line-height 100px
    display flex
    justify-content space-around
    span:first-child
      color red
      font-size 40px
      font-weight bold
  .nav-wrapper
      height  60px
      position fixed
      left 0
      top 88px
      display flex
      overflow hidden
      z-index 999
      background-color #fff
      .nav-content
        height 60px
        display flex
        flex none
        li
          display flex
          flex none
          box-sizing border-box
          text-align center
          line-height 60px
          font-size 28px
          margin-left 30px
          &.active
            color #b4282d
            border-bottom 4px solid #b4282d

 
</style>
