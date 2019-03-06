<template>
	<div>
		<!-- 登录 -->
		<div class="header_pr  ">
			<header class="icon_header">

				<a class="iconfont icon-zuojiantou" ui-back></a><i class="iconfont" style="color: #fff;">&#xe603;</i>
				<div>
					登录
				</div>
			</header>
		</div>
		<!--内容  -->
		<div class="layout">
			<h1 class="col-mar text-center">
			</h1>

			<form action="" ui-login data-type="1" data-url="?r=login/login" onSubmit="return false;" data-return-url="/m?r=user/index"
			 data-mta-case="login">
				<div class="col-mar form_input_item" error>
					<i class="iconfont tab_fl icon-phone"></i>
					<div class="inputtext">
						<input type="text" maxLength="11" name="phone" placeholder="手机号码" />
						<i class="iconfont icon-closecircle tab col-hr close"></i>
					</div>
					<p class="input_msg">请输入正确11位的手机号码！</p>
				</div>
				<div class="col-mar form_input_item">
					<i class="iconfont tab_fl icon-path"></i>
					<div class="inputtext">
						<input type="password" maxLength="18" name="password" placeholder="密码" />
						<i class="iconfont icon-eyeclose tab col-text showPassword"></i>
					</div>
					<p class="input_msg">密码为8-16位的数字或字母！</p>
				</div>


				<div class="col-mar login_submit">
					<input type="submit" class="btn btn-default btn-block btn-max" value="登录">
				</div>

				<div class="side">
					还没有账号？立即<a href="/m?r=login/register" class="col-link" style="color: #0074D9;">注册</a>
				</div>
			</form>
		</div>



		<footer class="login_footer">
			<a>验证码登录</a>
			<span class="col-hr">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="/m?r=login/findpw" class="col-aaa">找回密码</a>
		</footer>
	</div>
</template>
<script>
</script>

<style>
	h1.text-center {
		margin: 0;
		height: 2rem;
	}

	.icon_header>div {
		text-align: center;
		font-size: .38rem;
		color: #666;
		position: relative;
		z-index: 2;
		zoom: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	input {
		padding: 0;
		margin: 0;
		list-style-type: none;
		border-bottom: solid 1px #eee; 
	}

	.layout {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	footer {
		position: fixed;
		bottom: 0;
		left: center;
	}

	input {
		width: 6rem;
		border: 0;
		margin-top: .5rem;
		height: .88rem;
		font-size: .38rem;
	}

	.input_msg {
		display: none;
	}

	.side {
		margin-top: .3rem;
		font-size: .33rem;
	}
</style>
