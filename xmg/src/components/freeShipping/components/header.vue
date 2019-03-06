<template>
  <div class="header">
    <mt-header title="9.9包邮">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" >
          <!-- <mt-popup v-model="popupVisible" position="right">xxxxxxxxxxx</mt-popup> -->
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
// import { Popup } from "mint-ui";
// import Vue from "vue";
// Vue.component(Popup.name, Popup);
export default {
    // data(){
    //     return{
    //         popupVisible:""
    //     }
    // }
};
</script>

<style lang="" >
.header{
   position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 120;
    display: block;
    box-sizing: border-box;
}
.mint-header {
  height: 0.8rem;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
}
.mint-button-icon > .mintui {
  font-size: 0.3rem;
}
.mint-header-title {
  font-size: 0.3rem;
}
.mint-header .mint-button {
  font-size: 0.3rem;
  padding-right: 0.2rem;
}
</style>