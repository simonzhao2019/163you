<template>
<swiper :options="swiperOption" class="carrousel">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="img" style="height:100%;width:100%">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 
</template>

<script type="text/ecmascript-6">
  export default {
     data() {
      return {
        swiperOption: {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
             renderCustom: function (swiper, current, total) {
                var customPaginationHtml = "";
                for(var i = 0; i < total; i++) {
                    //判断哪个分页器此刻应该被激活
                    if(i == (current - 1)) {
                        customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                    } else {
                        customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                    }
                }
                return customPaginationHtml;
            }
          }
        },
        swiperSlides: ['https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0']
      }
  }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
.carrousel
  width 100%
  height 370px
 .swiper-pagination-custom
    bottom: 10px;  
    left: 0;  
    width: 100%
    .swiper-pagination-customs
      width 40px
      height 4px
      display inline-block
      background #ffffff
      opacity .5
      margin: 0 10px 0 0;
      &.swiper-pagination-customs-active 
        background-color red
            
</style>