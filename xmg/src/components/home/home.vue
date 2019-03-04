<template>
  <div id="home">
    <header>
      <router-link to="/search">
        <div class="search">
          <i class="iconfont">&#xe621;</i>
          输入您需要的商品名称
        </div>
      </router-link>
      <router-link to="/footprint">
        <i class="iconfont">&#xe70a;</i>
      </router-link>
    </header>
    <Content></Content>
  </div>
</template>

<script>
import Vuex from "vuex";
import Content from "./components/content";

export default {
  created() {
    this.handleHomeData();
  },
  data() {
    return {
      icon: ""
    };
  },
  components: {
    Content
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeData: "home/handleHomeData"
    })
  }
};
</script>


<style lang="" scoped>
#home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#home > header {
  padding: 0.15rem;
  font-size: 0.28rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
}
#home > header .search {
  width: 6.4rem;
  height: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  border-radius: 0.4rem;
  text-indent: 0.48rem;
  color: #ccc;
}
#home > header i {
  font-size: 0.45rem;
}
</style>