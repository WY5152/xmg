<template>
  <div class="chOne">
    <div class="chOne-pic">
      <h3>
        <span>大家都在买</span>
      </h3>
      <div class="chOne-cen">
        <div class="chOne-cen-1" v-for="(item,index) in list" :key="index">
          <a :href="item.jump_url">
            <img :src="item.pic">
            <p>
              <i>{{item.xiaoliang}}人</i>
            </p>
          </a>
          <p class="p">{{item.d_title}}</p>
          <p class="p2">
            ￥{{item.yuanjia}}
            <span>劵后</span>
          </p>
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
      list: state => state.freeShipping.data,
    })
  }
};
</script>

<style lang="" scoped>
.chOne {
  width: 100%;
  height: 6.2rem;
  padding-top: 0.88rem;
 
}
.chOne>.chOne-pic{
   background:#fff;
  margin-bottom: 1rem;
}
.chOne-pic > h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.82rem;
  border-bottom: 1px solid silver;
}
.chOne-pic > .chOne-cen {
  height: 4.28rem;
  width: 100%;
  display:flex;
  justify-content: space-around;
  margin-top: .1rem;

}
.chOne-pic>.chOne-cen>.chOne-cen-1{
    width:30%;
    margin: 0

}
.chOne-cen-1>a>p>i{
  width: 2.232rem;
  border-radius: 0 0 2px 2px;
  text-align: center;
  text-indent: 0.2rem;
  background: #fff3f3;
  border: 1px solid #ffbdbf;
  color: #fc4d52;
  font-size: 0.2rem;
  overflow: hidden;
  height: 0.36rem;
  line-height: 0.36rem;
  /* margin: 0 0.1rem; */
  display:block;
}
.chOne-cen-1>.p{
 width: 2.232rem;
  font-size: 0.22rem;
  /* padding: .1rem 0 0; */
  margin-bottom: 0.1rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
 height: .748rem;
  color: #666;
  margin: 0.1rem 0;
}
.chOne-cen-1>a>img {
  width: 2.232rem;
  height: 2.24rem;
}
.chOne-cen-1>.p2{
  color:red;
  font-size: .3rem;
  padding-bottom: .1rem;
}
.chOne-cen-1>.p2>span{
  color:#000;
  font-size: .25rem;
}
</style>