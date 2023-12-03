<template>
	<div class="err-layout">
		<img src="../assets/img/404.png" />
		<div class="err-info">
			<h1>404</h1>
			<h3>UH UH!页面丢失</h3>
			<p>你所寻找的页面不存在，你可以点击下面的按钮</p>
			<router-link to="/">重新登陆系统</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
.err-layout {
	height: 100vh;
	max-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.err-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h1 {
			font-size: 100px;
		}

		h3 {
			font-size: 50px;
		}

		p {
			margin-bottom: 20px;
		}

		a {
			color: blue;
			text-decoration: underline;
		}
	}
}</style>