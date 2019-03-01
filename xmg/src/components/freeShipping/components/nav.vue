<template>
  <div class="nav">
    <div class="wrapper tabWrapper">
      <div class="content">
        <div class="tabbar">
          <div
            v-for="(item,index) in navs"
            :key="index"
            :class="index == activeIndex? 'active':''"
            @click="handleClick(index)"
          >
            <div>{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "navs",
  data() {
    return {
      navs: [],
      activeIndex: 0
    };
  },
  methods: {
    handleClick(index) {
      this.$emit(" handleClick", index);
      this.activeIndex = index;
    }
  },
  created() {
    this.axios({
      method: "get",
      url: "http://localhost:3000/navs"
    })
      .then(data => {
        // console.log(data);
        this.navs = data.data;
      })
      .catch(err => {
        console.log("失败", err);
      });
  },
  mounted() {
    let scroll = new BScroll(".wrapper", {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style lang="" scoped>
.nav {
  height: 1.06rem;
  overflow: hidden;
}
.nav > .tabWrapper > .content > .tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.nav > .tabWrapper > .content {
  width: max-content;
}
.tabbar > div {
  padding: 0 0.24rem;
  flex-shrink: 0;
  line-height: 1.06rem;
  border-top: 4px solid #f5f5f5;
}
.active {
  color: #fc3f78;
  font-weight: 600;
  border-bottom: 0.06rem solid #fc3f78;
}
</style>