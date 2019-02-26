<template>
    <div id="scroll">
    <div class="wrapper tabWrapper">
      <div class="content">
        <ul class="tabbar">
          <li v-for="(item,index) in tabBar">
            <img :src="item.img">
            <p>{{item.name}}</p>
            <p>{{item.font}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    props:{
        tabBar:Array,
    },
    mounted(){
        let scroll = new BScroll(".wrapper",{
            scrollX:true,
            click:true
        })
    }
}
</script>


<style lang="">
    #scroll {
  height: 3rem;
}
#scroll > .tabWrapper > .content > .tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
#scroll > .tabWrapper > .content {
  width: max-content;
}
.tabbar > li {
  padding: 0 0.24rem;
  flex-shrink: 0;
  line-height:1rem;
  margin-top: .6rem;
}

</style>