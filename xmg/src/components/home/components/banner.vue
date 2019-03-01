<template>
  <div id="banner">
    <div class="swiper-container" ref="swiperWrapper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  props: {
    imgs: Array
  },
  mounted() {
    new Swiper(this.$refs.swiperWrapper, {
      autoplay: true
    });
  }
};
</script>


<style lang="">
.swiper-container {
 margin-top: .1rem;
 width: 7.5rem;
  height: 1.86rem;
}
.swiper-slide>img{
    width:95%;
    margin:auto;
}
</style>