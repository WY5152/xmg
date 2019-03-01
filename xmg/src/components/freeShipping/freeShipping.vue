<template>
  <div >
        
        <Header-com/>
        <Center-com/>
        <Nav-com/>
        <Scroll-com/>
        <List-com/>

        <!-- <mt-popup v-model="popupVisible" position="center" Modal="flase" > -->
          
    <!-- </mt-popup> -->
 
  </div>
</template>

<script>
import Vuex from "vuex";
import Header from "./components/header";
import Center from "./components/center";
import Nav from "./components/nav";
import Scroll from "./components/scroll";
import List from "./components/list";
export default {
  components:{
    "Header-com":Header,
    "Center-com":Center,
    "Nav-com":Nav,
    "Scroll-com":Scroll,
    "List-com":List,
  },
     created(){
   
        this.handleFreeData();

     },
      methods:{
          ...Vuex.mapActions({
              handleFreeData:"freeShipping/handleFreeData"
          })
      },
  data() {
    return {
      popupVisible: "",
     
    };
  }
};
</script>


<style lang="">

</style>