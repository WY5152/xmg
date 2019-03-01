<template>
  <div id="footer">
    <ul>
      <li v-for="(item,index) in tabBar" :key="index">
        <router-link :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBar: [
        {
          icon: "&#xe610;",
          name: "首页",
          path: "/home",
         
        },
        {
          icon: "&#xf022c;",
          name: "9.9包邮",
          path: "/free-shipping",
         
        },
        {
          icon: "&#xe604;",
          name: "分类",
          path: "/classification"
        },
        {
          icon:"&#xe60f;",
          name:"收藏",
          path:"/collection"
        },
        {
          icon:"&#xe651;",
          name:"我的",
          path:"/my"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    handleToggle(index) {
      this.$emit("handleToggle", index);
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="">
#footer {
  width: 100%;
  height: 0.98rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid seagreen;
}
#footer > ul {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
}
#footer > ul > li,
#footer > ul > li > a {
  width: 100%;
  height: 100%;
}
#footer > ul > li > a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#footer > ul > li > a > i {
  display: block;
  font-size: 0.35rem;
}
#footer > ul > li > a > span {
  display: block;
  font-size: 0.28rem;
}
#footer > ul > li > .router-link-active {
  color: red;
}
</style>