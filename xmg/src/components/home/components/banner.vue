<template>
  <div id="banner">
    <div class="handpick">
      <div>精选</div>
    </div>
    
    <div class="swiper-container" ref="swiperWrapper">
      <div class="swiper-wrapper">
<<<<<<< HEAD
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index" v-html="item">
          <!-- <img :src="item"> -->

          <!-- <div v-html="item"></div> -->
=======
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
          <img :src="item">
>>>>>>> wu
        </div>
      </div>
    </div>
    <div class="arrows iconfont">&#xe60c;</div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  // props: {
  //   imgs: Array
  // },
  data(){
    return {
      imgs:["精选","女装","精选","女装精选","精选","女装","精选","女装","精选","女装","精选","女装","精选","女装","精选"]
    }
  },
  mounted() {
    new Swiper(this.$refs.swiperWrapper, {
      autoplay: false,
      slidesPerView: 'auto',
      spaceBetween: 60
    });
  }
};
</script>


<style scoped>
#banner{
  width: 100%;
  height: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size:0.3rem;
}
#banner>.handpick,#banner>.arrows{
  width: 1.3rem;
  height:100%;
  text-align: center;
  line-height: 0.8rem;
}
#banner>.handpick{
  position: relative;
}
#banner>.handpick>div:before{
  content: '';
  position: absolute;
  width: 2px;
  height: 60%;
  top: 20%;
  background: #eee;
  right: 0;
}
#banner>.handpick>div:after{
  content: '';
  position: absolute;
  left: 15%;
  bottom: 0px;
  height: 4px;
  width: 70%;
  background-color: #FC3F78;
}
#banner>.arrows{
  font-size: 0.32rem;
}
#banner .swiper-container {
  width: 100%;
  height: 100%;
  padding:0px 0.3rem;
}
#banner .swiper-slide{
  width: auto;
  height: 100%;
  line-height: 0.8rem;
}
/* .swiper-slide>img{
    width:95%;
    margin:auto;
} */
</style>