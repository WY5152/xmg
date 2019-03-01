<template>
  <div>
    <router-link to="/ch">
    <ul class="box">
      <li class="co1-6" v-for="(item,index) in tabBar" :key="index">
          <a href>
            <h3>{{item.name}}</h3>
            <p>
              <span>{{item.price}}</span>
            </p>
            <img :src="item.img">
          </a>
       
      </li>
    </ul>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabBar: []
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "http://localhost:3000/data"
    })
      .then(data => {
        //console.log(data);
        this.tabBar = data.data;
      })
      .catch(err => {
        console.log("没有获取到", err);
      });
  }
};
</script>

<style lang="">
.box {
  display: flex;
  width: 100%;
  height: 3.79rem;
  flex-wrap: wrap;
  padding: 0.1rem 0.1rem;
  margin-top: 0.89rem;
}
.box > li {
  width: 50%;
  height: 1.875rem;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}
.box > li > a {
  position: absolute;
}
.box > li > a > img {
  width: 3.75rem;
  height: 1.75rem;
  position: absolute;
  top: 0;
  z-index: -100;
}
.box > li:nth-of-type(2),
.box > li:nth-of-type(3),
.box > li:nth-of-type(5),
.box > li:nth-of-type(6) {
  width: 25%;
}
.box > li > a > h3 {
  position: relative;
  z-index: 10;
  padding: 0.01rem 0 0.01rem 0.02rem;
  overflow: hidden;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.3rem;
  font-weight: 400;
  color: #fc4073;
}
.box > li:nth-of-type(2) > a > img,
.box > li:nth-of-type(3) > a > img,
.box > li:nth-of-type(5) > a > img,
.box > li:nth-of-type(6) > a > img {
  width: 1.785rem;
  height: 1.785rem;
}
.box > li:nth-of-type(2) > a > p,
.box > li:nth-of-type(3) > a > p,
.box > li:nth-of-type(5) > a > p,
.box > li:nth-of-type(6) > a > p {
  position: relative;
  z-index: 10;
  color: #888;
  top: -0.01rem;
  font-size: 0.24rem;
  padding-left: 0.02rem;
  line-height: 0.36rem;
}
</style>