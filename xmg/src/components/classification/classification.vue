<template>
  <div class="classiflcation">
    <header>
      <router-link to="/footprint">
        <mt-button icon="back" class="right1"></mt-button>
      </router-link>
      <router-link to="/search">
        <div class="search">
          <i class="iconfont">&#xe621;</i>
          蓝牙耳机
        </div>
      </router-link>
    </header>
  </div>
</template>

<script>
// import Vuex from "vuex";
// export default {
// 	data() {
// 		return {
// 			active: "",
// 			value: ""
// 		}
// 	},
// 	created() {

// 		this.handleClassData();

// 	},
// 	methods: {
// 		...Vuex.mapActions({
// 			handleClassData: "classification/handleClassData"
// 		})
// 	},
// 	 computed: {
// 	  ...Vuex.mapState({
// 	    data: state => state.classification.data
// 	  })
// 	}
// }
</script>


<style lang="">
.classiflcation {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.classiflcation > header {
  padding: 0.15rem;
  font-size: 0.28rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
}
.classiflcation > header .search {
  width: 6.4rem;
  height: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  text-indent: 0.48rem;
  color: #ccc;
}
.right1 {
  background: #fbaa58;
  border: 0;
  color:#fff;
}
.classiflcation> header i {
  font-size: 0.3rem;
}

</style>
