<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages"
                    :key="index">
        <div class="icon"
             :key="item.id"
             v-for="item of page">
          <div class="icon-img">
            <img class="icon-img-content"
                 :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '0002',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/inn.png',
          desc: '客栈'
        },
        {
          id: '0003',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/oversea.png',
          desc: '换外币'
        },
        {
          id: '0004',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '0005',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id: '0006',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '0007',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/group.png',
          desc: '特惠酒店'
        },
        {
          id: '0008',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '0009',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        }
      ]
    }
  },
  computed: {
    // 一维数组拆分为两个数组
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
  .icon
    position relative
    overflow hidden
    width 25%
    float left
    padding-bottom 25%
    height 0
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      padding 0.1rem
      box-sizing border-box
      .icon-img-content
        height 100%
        display block
        margin 0 auto
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      line-height 0.44rem
      height 0.44rem
      color $darkTestColor
      text-align center
      ellipsis()
</style>
