<template>
  <div class="chTwo">
    <div class="chTwo-pic">
      <h3>
        <span>为您精选</span>
      </h3>
      <div class="chTwo-cen">
        <div class="chTwo-cen-1" v-for="(item,index) in cen" :key="index">
          <a :href="item.jump_url">
            <img :src="item.pic">
            <p>{{item.d_title}}人</p>
          </a>
          <div class="p">
            <p>天猫价￥{{item.yuanjia}}</p>

            <span>已售{{item.xiaoliang}}</span>
          </div>
          <div class="p2">
            <p>劵后价￥{{item.yuanjia}}</p>
            <span>{{item.quan_jine}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      cen: state => state.freeShipping.cen
    })
  }
  //   created(){
  //       console.log(this.cen)
  //   }
};
</script>

<style lang="" scoped>
.chTwo {
  width: 100%;
  background: #fff;
}
.chTwo > .chTwo-pic {
}
.chTwo-pic > h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.82rem;
}
.chTwo-pic > .chTwo-cen {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.chTwo-pic > .chTwo-cen > .chTwo-cen-1 {
  width: 50%;
  margin-bottom: .2rem;
}
.chTwo-cen-1 > a > p {
  width: 3.702rem;
  height: 0.6rem;
  line-height: 0.6rem;
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 0;
}
.chTwo-cen-1 > .p {
  width: 3.702rem;
  border-radius: 0 0 2px 2px;
  text-align: center;
  text-indent: 0.2rem;
  font-size: 0.24rem;
  overflow: hidden;
  height: 0.36rem;
  line-height: 0.36rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.chTwo-cen-1 > a > img {
  width: 3.702rem;
  height: 3.702rem;
}
.chTwo-cen-1 > .p2 {
  color: red;
  font-size: 0.3rem;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: space-around;
}
.chTwo-cen-1 > .p2 > span {
  width: 0.5rem;
  height: 0.4rem;
  border: 1px solid red;
  display: block;
  text-align: center;
}
</style>
