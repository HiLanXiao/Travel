<template>
  <div class='wrapper'>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"
                    :key="item.id"><img class="swiper-image"
             :src="item.imgUrl"
             alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://m.elongstatic.com/promotions/index/fold/fold1/pic/suzhou.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://m.elongstatic.com/promotions/index/fold/fold1/pic/hangzhou.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff !important
.swiper-image
  width 100%
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25% // 高度会相对于宽度撑开31.25%的空间
  .swiper-img
    width 100%
</style>
