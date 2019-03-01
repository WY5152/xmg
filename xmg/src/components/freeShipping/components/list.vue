<template>
  <div class="list">
    <h3>精选推荐</h3>
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <div class="cen">
          <a :href="item.jump_url">
            <img :src="item.pic">
          </a>
          <div class="man" >
                <a href>
                    <h3 class="bt">{{item.d_title}}</h3>
                </a>
                <div class="row-s">
                    <div>天猫价{{item.yuanjia}}</div>
                    <div>已售{{item.xiaoliang}}</div>
                </div>
                <div class="row-s">
                    <div class="left">
                        <span>券后价25¥</span>
                    </div>
                    <div class="right">
                        <span>
                        <i>{{item.quan_jine}}元卷</i>
                        </span>
                    </div>
                </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      data: state => state.freeShipping.data
    })
  }
};
</script>

<style lang="" scoped>
.list{
   margin-bottom: 1rem;
}
.list > ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.list > h3 {
  height: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
}
img {
  width: 3.702rem;
  height: 3.702rem;
  
}
.man{
    height:1.92rem;
}
.bt {
  width:3.302rem;
  height:  .6rem;
  line-height: .6rem;
  font-size: .28rem;
  overflow: hidden;
  font-weight: 400;
  margin: 0;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.row-s{
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size: .26rem;
    color: #888;
    padding: .1rem 0 .2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:3.302rem;
}
ul>li>.cen{
    height:5.67rem;
}
.row-s>.right>span{
    display:block;
    width: 1.2rem;
    height: .4rem;
    border:1px solid red;
    border-radius: .2rem;
    text-align:center;
    line-height: .4rem;
    color:red;

}
.left{
    color:red;
}
</style>