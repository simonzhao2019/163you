<template>
  <div id="recommend">
    <div class="bannerImg">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg" >
      </a>
    </div>
    <div class="recommend_content" style="margin-bottom:50px" v-for="(recommendItem,index) in recommendList" :key="index">
      <ul class="article_list" v-for="(recommend,index) in recommendItem.topics" :key="index">
        <li class="article_item1"  v-if="recommend.style===2">
          <div class="userInfo" >
            <div class="userName">
             <img :src="recommend.avatar">
              <span>{{recommend.nickname}}</span>
            </div>
            <div class="userTitle">{{recommend.title}}</div>
            <div class="desc">{{recommend.subTitle}}</div>
            <div class="likeNum">
             {{ recommend.readCount}}k人看过
            </div>
          </div>
          <div class="userPic">
            <img :src="recommend.picUrl" alt="1">
          </div>
        </li>
        <li class="article_item2"  v-if="recommend.style==1">
          <div class="item2_userInfo">
              <img :src="recommend.avatar">
              <span>{{recommend.nickname}}</span>
          </div>
          <div class="item2_title">{{recommend.title}}</div>
          <img :src="recommend.picUrl" alt="">
          <div class="item2_likeNumber">  {{ recommend.readCount}}k人看过</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        recommendList:[]
      }
    },
    
    async mounted() {
      const commendDate=await this.$Api.reqRecommendData()
      if(commendDate.code==="200"){
        this.recommendList=commendDate.data
        console.log(commendDate.data);
      }
    },

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#recommend
  padding 180px 0 0
  width 100%
  box-sizing border-box
  .bannerImg
    width 100%
    height 448px
    margin 20px 0
    background-color #fff
    padding 36px 30px
    box-sizing border-box
    a
      width 100%
      height 100%
      display block
      img
        width 100%
        height 100%
  .recommend_content
    width 100%
    .article_item1
      height 336px
      width 100%
      padding 32px 30px
      margin 10px  0
      box-sizing border-box
      display flex
      justify-content center
      align-items center
      border-bottom 1px solid #ccc
      .userInfo
        width 400px
        height 266px
        display flex
        flex-direction column
        .userName
          width 400px
          height 56px
          display flex
          img 
            width 54px
            height 54px
            border-radius 50%
          span
           height 56px
           display block  
           font-size 14px
           color #000
           line-height 52px
           margin-left 20px
        .userTitle
          font-size 36px
          width 400px
          height 100px
          margin-top 20px
        .desc
          width 400px
          height  48px
          font-size 14px
          color #7f7f7f
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .likeNum
          width 154px
          height 34px
          font-size 11px
          margin-top 10px
      .userPic
        img 
          width 272px
          height 272px
    .article_item2
      width 100%
      height 625px
      padding 32px 30px
      box-sizing border-box
      display flex
      flex-direction column
      .item2_userInfo
        width 100%
        height 56px
        margin-bottom 24px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        display flex
        img 
          width 54px
          height 54px
          border-radius 50%
        span
          height 100%
          display inline-block
          font-size 14px
          line-height 56px
          margin-left 20px
      .item2_title
        width 100%
        height 51px
        font-size 36px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        margin-bottom 20px
      img
        width 100%
        height 376px
      .item2_likeNumber
        margin-top 19px
        font-size 11px
        color #999







 
</style>
