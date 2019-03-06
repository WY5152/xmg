<template>
    <div id="content">
        <Banner></Banner>
        <div class="wrapper" ref="wrapper">
            <ul class="content">
                <Bannerbig></Bannerbig>
                <Homenav></Homenav>
                <Homehot></Homehot>
                <Homebrand></Homebrand>
                <Groupbuy></Groupbuy>
                <Live></Live>
            </ul>
        </div>
    </div>
</template>
<script>

import Banner from "./banner"
import Bscroll from 'better-scroll'
import Bannerbig from "./bannerbig"
import Homenav from "./homenav"
import Homehot from "./homehot"
import Homebrand from "./homebrand"
import Groupbuy from "./groupbuy"
import Live from "./live"
export default {
    data(){
        return {
            ops: ""
        }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
            scrollY:true
        })
      })
    },
    components:{
        Banner,
        Bannerbig,
        Homenav,
        Homehot,
        Homebrand,
        Groupbuy,
        Live
   }
}
</script>
<style scope>
#content{
    width: 100%;
    /* height: 100%; */
    /* margin: auto; */
    /* padding-bottom: 1rem; */
    width: 100%;
    height: 100%;
    position: relative;
    /* z-index: 60; */
}
#content .wrapper{
  width: 100%;
  position: relative;
  /* top: 0.8rem; */
  left: 0;
  height: 11.8rem;
  overflow:hidden;
  
}
#content .content{
  height:auto;
   padding-bottom:1.8rem; 
}

</style>
