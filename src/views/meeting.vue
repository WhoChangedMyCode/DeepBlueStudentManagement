<template>
	<div class="index-layout">
		<el-card class="box-card" v-for="(item, key) in cardList" :key="key">
			<template #header>
				<div class="card-header">
					<el-button type="success" :icon="item.icon" size="small" />
					<span>{{ item.title }}</span>
				</div>
			</template>
			<div class="text item">
				<p class="textbox">会议时间：{{ item.time }}</p>
				<p class="textbox">领导：{{ item.ld }}</p>
				<p class="textbox">参与人员：{{ item.ry }}</p>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cardList: [
				{
					icon: "Memo",
					title: "支援大佬岭项目建设座谈会",
					time: "2023-10-20 12:30",
					ld: "李英俊",
					ry: "组织部整个部门"
				},
				{
					icon: "Memo",
					title: "前梁项目建设座谈会",
					time: "2023-10-21 12:30",
					ld: "李英俊",
					ry: "组织部整个部门"
				},
				{
					icon: "Memo",
					title: "小区改造项目建设座谈会",
					time: "2023-10-23 12:30",
					ld: "李英俊",
					ry: "组织部整个部门"
				},
				{
					icon: "Memo",
					title: "扶贫项目建设座谈会",
					time: "2023-10-24 12:30",
					ld: "李英俊",
					ry: "组织部整个部门"
				}

			]
		}
	},
	methods: {

	},
	mounted() {

	}
}
</script>

<style lang="less" scoped="scoped">
.index-layout {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.box-card {
	width: 40%;
	margin: 2vw;
}

.card-header {
	display: flex;
	align-items: center;

	a {
		font-size: 16px;
		margin-left: 10px;
		color: black;
	}
}

.el-button {
	margin-right: 5px;
}

p {
	color: #666;
	margin-bottom: 10px;
}</style>