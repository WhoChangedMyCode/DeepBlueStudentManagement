<template>
	<div class="index_layou">
		<el-card class="box-card" v-if="site.src">
			<template #header>
				<div class="card-header">
					<h3>{{ site.title }}</h3>
					<h4>编辑时间：{{ site.updatetime }}</h4>
				</div>
			</template>
			<img :src="require(`@/assets/img/${site.src}`)" />
			<p>{{ site.content }}</p>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			site: {}
		}
	},
	mounted() {
		this.site = this.$store.state.news;
	}
}
</script>

<style lang="less" scoped="">
.card-header {
	text-align: center;

	h3 {
		font-size: 30px;
	}
}

.box-card img {
	display: block;
	margin: 0 auto;
	width: 400px;
}

.el-card {
	box-shadow: none !important;
	border: none !important;
}
</style>