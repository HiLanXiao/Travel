<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>
