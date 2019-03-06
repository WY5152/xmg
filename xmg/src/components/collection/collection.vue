<template>
	<div>
		<!-- 开头 <-->
		<div class="header">
			<i class="iconfont">&#xe603;</i><span><a href="">我的收藏</a></span>
		</div>

		<div class="centent">
			<i class="iconfont">&#xe681;
			</i>
			<h5>登陆后添加收藏</h5>
			<p>收藏云端同步，不错过任何优惠哦</p>
			<button>登录/注册</button>
		</div>
	</div>


</template>

<script>
	export default {

	}
</script>

<style lang="">
	.header {
		display: flex;
		align-items: center;
		width: 100%;
		position: fixed;
		height: 1rem;
		background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
		padding: 0.15rem;
		justify-content: center;
		position: relative;
	}

	.header>.iconfont {
		color: #fff;
		font-size: 0.38rem;
		position: absolute;
		left: 0;

	}

	.header>span>a {
		color: #fff;
		font-size: 0.38rem;
		font-weight: 900;
	}
	
	.centent{
		width: 100%;
		height: 10rem;
		
		text-align: center;
		margin-top: 3rem;
	}
	.centent>.iconfont{
		color:hotpink ;
		font-size: 2rem;
		
		
	}
	.centent>h5{
		font-size: .38rem;
		margin-top: 0.5rem;
	}
	.centent>p{
		color: grey;
		font-size: .38rem;
		margin: 0.5rem 0;
	}
	.centent>button{
		background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
		height: 1rem;
		width: 4rem;
		border-radius: 0.6rem;
		color: #fff;
		font-size: .38rem;
	}
</style>
