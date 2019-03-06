<template>
	<div>
		<div class="header">

			<div class="col-mar row-s">
				<i class="iconfont">&#xe61c;</i>
				<a href="" class="img"><img src="http://cmsstatic.dataoke.com//wap_new/user/images/user_info_tx.png?v=201902151532"
					 alt=""></a>

				<div class="info">
					<p class="name off">
						<router-link to="/login">
							<a>登录/</a>
						</router-link>
						<!-- <router-view></router-view> -->
						<router-link to="/register"><a>注册</a></router-link>
						<router-view></router-view>
					</p>

				</div>
			</div>
		</div>
		<ul class="ui_nav_list">
			<li class="row-s">
				<a href="/m?r=user/list">
					<p class="col-12-8 text-left">
						<i class="iconfont">&#xe60f;</i>
						我的收藏
					</p>
					<p class="col-12-4 text-right"><i class="iconfont icon-youjiantou">&#xe603;</i></p>
				</a>
			</li>
			<li class="row-s">
				<a href="/m?r=user/footprint">
					<p class="col-12-8 text-left">
						<i class="iconfont">&#xe70a;</i>
						浏览记录
					</p>
					<p class="col-12-4 text-right"><i class="iconfont icon-youjiantou">&#xe603;</i></p>
				</a>
			</li>
		</ul>
		<div class="hr"></div>
		<ul class="ui_nav_list">
			<li class="row-s">
				<a href="/m?r=index/feedback">
					<p class="col-12-8 text-left">
						<i class="iconfont ">&#xeb1e;</i>
						意见反馈
					</p>
					<p class="col-12-4 text-right"><i class="iconfont icon-youjiantou">&#xe603;</i></p>
				</a>
			</li>

			<li class="row-s">
				<a href="/m?r=index/customService">
					<p class="col-12-8 text-left">
						<i class="iconfont ">&#xe602;</i>
						联系客服
					</p>
					<p class="col-12-4 text-right"><i class="iconfont icon-youjiantou">&#xe603;</i></p>
				</a>
			</li>
			<li class="row-s">
				<a href="/m?r=user/couponhelp">
					<p class="col-12-8 text-left">
						<i class="iconfont ">&#xe605;</i>
						领券帮助
					</p>
					<p class="col-12-4 text-right"><i class="iconfont icon-youjiantou">&#xe603;</i></p>
				</a>
			</li>

		</ul>
		<div class="hr"></div>
		<ul class="ui_nav_list">
			<li class="row-s">
				<a href="http://apphtml.ffquan.com/index.php?r=index/down&app_id=427272">
					<p class="col-12-8 text-left">
						<i class="iconfont ">&#xe615;</i>
						下载APP
					</p>
					<p class="col-12-4 text-right"><i class="iconfont icon-youjiantou">&#xe603;</i></p>
				</a>
			</li>
		</ul>

		<div class="hr"></div>


	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="">
	.header {
		background-image: linear-gradient(to left, rgb(250, 77, 190) 0px, rgb(251, 170, 88) 100%);
		background-position-x: initial;
		background-position-y: initial;
		background-size: initial;

		background-attachment: initial;
		background-origin: initial;
		background-clip: initial;
		background-color: initial;
		height: 4rem;
		width: 100%;
		display: flex;
		align-items: center;
	}

	a>img {
		height: 2rem;
		width: 2rem;
		margin-left: 0.2rem;
		;
	}

	.header>.col-mar>.info>.name>a {
		color: #fff;
		font-size: .38rem;
		font-weight: 900;
		margin-left: 0.2rem;

	}

	.header> {

		position: relative;
	}

	.header>.col-mar>.iconfont {
		color: #fff;
		position: absolute;
		top: 0.1rem;
		right: 0.1rem;

	}

	.header>.col-mar {
		display: flex;
		align-items: center;
	}

	.ui_nav_list li {
		padding: 0.1rem 0.1rem;
		background: #fff;
		font-size: 0.38rem;
		color: #666;
		height: 1;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}

	.iconfont {
		color: hotpink;
		font-size: .38rem;
	}

	.hr {
		width: 100%;
		height: .16rem;
		background: #F5F5F5;
		border-radius: .1rem;
	}

	.iconfont_0 {
		color: #fff;
	}
</style>
