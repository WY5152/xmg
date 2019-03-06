<template>
	<div>
		<!-- 注册 -->

		<header class="icon_header">
			
			<a class="iconfont icon-zuojiantou" ui-back></a><i class="iconfont"style="color: #fff;">&#xe603;</i>
			<div>
				注册
			</div>
		</header>

		<!--内容  -->
		<div class="layout">
			<h1 class="col-mar text-center">
			</h1>

			<form action="" autocomplete="off" ui-login data-type="1" data-url="?r=login/register" onSubmit="return false;"
			 data-mta-case="register">
				<div class="col-mar form_input_item" error>
					<i class="iconfont tab_fl icon-phone"></i>
					<div class="inputtext">
						<input type="text" autocomplete="off" name="phone" placeholder="手机号码" />
						<i class="iconfont icon-closecircle tab col-hr close"></i>
					</div>
					<p class="input_msg">请输入正确11位的手机号码！</p>
				</div>
				<div class="col-mar form_input_item">
					<i class="iconfont tab_fl icon-yanzhengma"></i>
					<div class="inputtext">
						<input type="number" autocomplete="off" name="code" placeholder="请输入验证码" />
						<a class="btn btn-outline btn-min getPhone" data-url="?r=login/codeeg" data-nc_appkey="FFFF0000000001798134"
						 data-scene="register">获取验证码</a>
					</div>
					<p class="input_msg">验证码不能为空！</p>
				</div>
				<div class="col-mar form_input_item">
					<i class="iconfont tab_fl icon-path"></i>
					<div class="inputtext">
						<input type="password" autocomplete="off" maxLength="18" name="password" placeholder="密码" />
						<i class="iconfont icon-eyeclose tab col-text showPassword"></i>
					</div>
					<p class="input_msg">密码为8-16位的数字或字母！</p>
				</div>

				<div class="col-mar login_submit">
					<input type="submit" class="btn btn-default btn-block btn-max" value="注册">
					<p></p>
				</div>

				<div class="content-d">
					点击注册表示您已同意<a href="#" class="col-link">《小咪购用户协议》</a>
				</div>
			</form>

		</div>

		<footer class="login_footer text-center">
			已有账号？点击<a href="/m?r=login/login" class="col-link">登录</a>
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
		border: 0;
	}

	form {
		display: block;
		margin-top: 0em;
	}

	.col-mar {
		margin: 0 2rem;
	}

	.form_input_item {
		height: 1.8rem;
		border-bottom: solid 1px #eee; 
		position: relative;
		z-index: 1;
		zoom: 1;
		padding: .7rem 0;
		transition: all .4s ease-out 0s;
		-o-transition: all .4s ease-out 0s;
		-moz-transition: all .4s ease-out 0s;
		-webkit-transition: all .4s ease-out 0s;
		transform-origin: center;
	}
	.input_msg{
		display: none;
	}
	.content-d{
		margin-left: 1rem !important;
		font-size: .33rem;
		margin: .3rem ;
		
	}
	.content-d>.col-link{
		color: #0074D9;
		
	}
	
</style>
