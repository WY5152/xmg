<template>
  <div id="homehot">
    <div class="titles">
      <div class="titleleft">
        <div class="texts">大家都在领</div>
      </div>
      <div class="titleright">
        <span>1,424,702</span>
        次实时领券
      </div>
    </div>
    <div class="bannerx">
      <div class="swiper-container" ref="weiperx">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="##">
              <img
                src="https://img.alicdn.com/imgextra/i3/4099807948/O1CN014NtLUp28aEQKZQb2R_!!4099807948.jpg_310x310.jpg"
                alt
              >
              <p class="text"><span>4.2万</span>人已领|<span>30元券</span></p>
            </a>
            <p class="name">【猪事顺利】猪年本命年红绳手链</p>
            <p class="money">¥
              <i style="font-style: normal;">29</i>
              <del>¥39.9</del>
            </p>
            <p class="schedule"><i></i></p>
          </div>
          <div class="swiper-slide">
            <a href="##">
              <img
                src="https://img.alicdn.com/imgextra/i3/4099807948/O1CN014NtLUp28aEQKZQb2R_!!4099807948.jpg_310x310.jpg"
                alt
              >
              <p class="text"><span>4.2万</span>人已领|<span>30元券</span></p>
            </a>
            <p class="name">【猪事顺利】猪年本命年红绳手链</p>
            <p class="money">¥
              <i style="font-style: normal;">29</i>
              <del>¥39.9</del>
            </p>
            <p class="schedule"><i></i></p>
          </div>
          <div class="swiper-slide">
            <a href="##">
              <img
                src="https://img.alicdn.com/imgextra/i3/4099807948/O1CN014NtLUp28aEQKZQb2R_!!4099807948.jpg_310x310.jpg"
                alt
              >
              <p class="text"><span>4.2万</span>人已领|<span>30元券</span></p>
            </a>
            <p class="name">【猪事顺利】猪年本命年红绳手链</p>
            <p class="money">¥
              <i style="font-style: normal;">29</i>
              <del>¥39.9</del>
            </p>
            <p class="schedule"><i></i></p>
          </div>
          <div class="swiper-slide">
            <a href="##">
              <img
                src="https://img.alicdn.com/imgextra/i3/4099807948/O1CN014NtLUp28aEQKZQb2R_!!4099807948.jpg_310x310.jpg"
                alt
              >
              <p class="text"><span>4.2万</span>人已领|<span>30元券</span></p>
            </a>
            <p class="name">【猪事顺利】猪年本命年红绳手链</p>
            <p class="money">¥
              <i style="font-style: normal;">29</i>
              <del>¥39.9</del>
            </p>
            <p class="schedule"><i></i></p>
          </div>
          <div class="swiper-slide">
            <a href="##">
              <img
                src="https://img.alicdn.com/imgextra/i3/4099807948/O1CN014NtLUp28aEQKZQb2R_!!4099807948.jpg_310x310.jpg"
                alt
              >
              <p class="text"><span>4.2万</span>人已领|<span>30元券</span></p>
            </a>
            <p class="name">【猪事顺利】猪年本命年红绳手链</p>
            <p class="money">¥
              <i style="font-style: normal;">29</i>
              <del>¥39.9</del>
            </p>
            <p class="schedule"><i></i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(this.$refs.weiperx, {
      autoplay: false,
      slidesPerView: "auto",
      spaceBetween: 13
    });
  }
};
</script>


<style scoped>
#homehot {
  width: 100%;
  font-size: 0.3rem;
  line-height: 0.5rem;
  border-bottom: 10px solid rgb(245, 245, 245);
}
#homehot .titles {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.28rem 0.25rem 0 0.25rem;
}
#homehot .titles .titleleft {
  position: relative;
  padding-left: 16px;
}
#homehot .titles .titleleft .texts:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 56%;
  top: 22%;
  background: #fc3f78;
  left: 0;
}
#homehot .titles .titleright {
  font-size: 0.21rem;
  color: #aaa;
}
#homehot .titles .titleright span {
  color: #fc4d52;
  font-size: 0.3rem;
}

#homehot .bannerx {
  width: 100%;
  padding-left: 16px;
  padding-bottom: 20px;
}
#homehot .bannerx .swiper-slide {
  width: 2.4rem;
  height: 100%;
  margin: 0.1rem 0.1rem 0 0.1rem;
  position: relative;
  padding: 0.1rem 0.1rem 0;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,.1);
  border-radius: 16px 16px 0 0;
}
#homehot .bannerx a {
  position: relative;
  display: block;
  width: 2.4rem;
  height: 2.4rem;
}
#homehot .bannerx a p {
  position: absolute;
  bottom: 0;
  zoom: 1;
  z-index: 50;
  background: linear-gradient(
    to left,
    rgba(255, 113, 233, 0.91) 0,
    rgba(254, 92, 158, 0.91) 100%
  );
  left: -8px;
  width: 2.4rem;
  font-size: 0.22rem;
  padding: 0 8px;
  text-align: center;
  color: #fff;
  border-radius: 0.1rem;
}
#homehot .bannerx img {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.1rem;
}
#homehot .bannerx .name {
  font-size: 0.25rem;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#homehot .bannerx .money{
  color: #FC4D52;
  font-size: 0.28rem;
  line-height: 0.4rem;

}
#homehot .bannerx .money i{
  font-size: 0.35rem;
}
#homehot .bannerx .money del{
  color: #bbb;
}
#homehot .bannerx .schedule{
  position: absolute;
    z-index: 1;
    zoom: 1;
    left: 0;
    bottom: 0;
    overflow: hidden;
    height: 6px;
    background-color: #FFD6EC;
    width: 100%;
}
#homehot .bannerx .schedule i{
  width: 15%;
  display: block;
    height: 6px;
    overflow: hidden;
    background-color: #FF66B7;
}
</style>
