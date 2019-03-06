<template>

	<!-- 头部-->
	<div id="home">
		<header>
			<i class="iconfont">&#xe603;</i>
			<div class="search">
				<i class="iconfont">&#xe621;</i>
				补水面膜
			</div>
		</header>

		<div class="menu-content">
			<ul class="main-cat">
				<li class="cat-item mm-nolistview" v-for="(item,index)in data :key="index" ">
					<a data-catid="item.cid" href="##">{{item.name}}</a>
					
					
				</li>

			</ul>
		</div>
	</div>




	</div>

	<!-- 内容区 -->



	</ul>
	</div>



	</div>


</template>

<script>
	import Vuex from "vuex";
	export default {
		data() {
			return {
				active: "",
				value: ""
			}
		},
		created() {

			this.handleClassData();

		},
		methods: {
			...Vuex.mapActions({
				handleClassData: "classification/handleClassData"
			})
		},
		 computed: {
		  ...Vuex.mapState({
		    data: state => state.classification.data
		  })
		}
	}
</script>


<style lang="">
	#home {
		width: 100%;

	}

	#home>header {
		padding: 0.15rem;
		font-size: 0.28rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #FE2E54 !important;
	}

	#home>header a {
		color: #fff;

	}

	#home>header .search {
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

	#home>header i {
		font-size: 0.45rem;
	}
</style>
