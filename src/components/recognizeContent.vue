<template>
  <div id="recommend">
    <div class="bannerImg">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg" >
      </a>
    </div>
    <div class="recommend_content">
      <ul class="article_list">
        <li class="article_item1">
          <div class="userInfo">
            <div class="userName">
             <img src="https://yanxuan.nosdn.127.net/0f7bd95440a3b445fabe1d4923593950.png">
              <span>网易员工精选</span>
            </div>
            <div class="userTitle">今年双十一</div>
            <div class="desc"></div>
            <div class="likeNum"></div>
          </div>
          <div class="userPic">
            <img src="https://yanxuan.nosdn.127.net/79198f7552b43e77a136d16f23e0c45b.jpg" alt="1">
          </div>
        </li>
        <li class="article_item2"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

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
      background-color red
      padding 32px 30px
      margin 10px  0
      display flex
      .userInfo
        width 400px
        height 266px
        display flex
        flex-direction column
        align-items center
        .userName
          width 400px
          height 56px
          display flex
          img 
            width 42px
            height 52px
            border-radius 50%
          span
           width 332px
           height 52px
           display block  
           font-size 28px
           color #000
           line-height 52px
           margin-left 10px
        .userTitle
          font-size 36px
          width 400px
          height 100px
          margin-top 20px
          
              



 
</style>
