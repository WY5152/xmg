<template>
  <div class="ch">
    <Header-com/>
    <ChOne-com/>
    <ChTwo-com/>
  </div>
</template>

<script>
import Header from "./header";
import Vuex from "vuex";
import ChOne from "./chOne";
import ChTwo from "./chTwo";
export default {
  components: {
    "Header-com": Header,
    "ChOne-com":ChOne,
    "ChTwo-com":ChTwo,
  },
  methods: {
    ...Vuex.mapActions({
      handleChData: "freeShipping/handleChData",
    })
  },
  created(){
      this.handleChData();
  }
};
</script>

<style lang="" scroped>
.ch{
  background:rgb(238, 235, 235);
}
</style>