<template>
	<div class="staff-layout">
		<img class="ry" src="../assets/img/ry.png" />
		<el-carousel height="auto" indicator-position="outside">
			<el-carousel-item class="photoBox" v-for="item in arr">
				<ul class="photoList">
					<li v-for="site in item.children">
						<img :src="require(`@/assets/img/${site.url}`)" />
						<p>姓名：{{ site.name }}</p>
					</li>
				</ul>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr: [
				{
					children: [
						{ name: "张吉惟", url: "photo1.png", phone: "13840643123", department: "组织部" },
						{ name: "林国瑞", url: "photo7.png", phone: "15240643132", department: "组织部" },
						{ name: "林玟书", url: "photo3.png", phone: "1340643278", department: "建筑部" },
						{ name: "林雅南", url: "photo4.png", phone: "1524066565", department: "建筑部" },
						{ name: "江奕云", url: "photo5.png", phone: "1567677767", department: "后勤部" },
						{ name: "唐灿", url: "photo6.png", phone: "1346565767", department: "后勤部" }
					]
				},
				{
					children: [
						{ name: "刘柏宏", url: "photo7.png", phone: "15240643123", department: "秘书部" },
						{ name: "阮建安", url: "photo1.png", phone: "18734343434", department: "秘书部" },
						{ name: "林子帆", url: "photo2.png", phone: "15221234344", department: "设计部" },
						{ name: "张吉惟", url: "photo1.png", phone: "13840643123", department: "设计部" },
						{ name: "黄国瑞", url: "photo7.png", phone: "15240643132", department: "组织部" },
						{ name: "刘玟书", url: "photo3.png", phone: "1340643278", department: "建筑部" },
					]
				},
				{
					children: [
						{ name: "赵雅南", url: "photo4.png", phone: "1524066565", department: "建筑部" },
						{ name: "钱奕云", url: "photo5.png", phone: "1567677767", department: "软件部" },
						{ name: "苏灿", url: "photo6.png", phone: "1346565767", department: "后勤部" },
						{ name: "孙柏宏", url: "photo7.png", phone: "15240643123", department: "宣传部" },
						{ name: "李建安", url: "photo1.png", phone: "18734343434", department: "宣传部" },
						{ name: "楼子帆", url: "photo2.png", phone: "15221234344", department: "秘书部" }
					]
				},
				{
					children: [
						{ name: "蒙子帆", url: "photo2.png", phone: "15221234344", department: "设计部" },
						{ name: "张吉惟", url: "photo1.png", phone: "13840643123", department: "设计部" },
						{ name: "覃国瑞", url: "photo7.png", phone: "15240643132", department: "组织部" },
						{ name: "秦玟书", url: "photo3.png", phone: "1340643278", department: "建筑部" },
						{ name: "琴雅南", url: "photo4.png", phone: "1524066565", department: "建筑部" },
						{ name: "勤奕云", url: "photo5.png", phone: "1567677767", department: "软件部" }
					]
				},
				{
					children: [
						{ name: "唐灿", url: "photo6.png", phone: "1346565767", department: "后勤部" },
						{ name: "汤柏宏", url: "photo7.png", phone: "15240643123", department: "宣传部" },
						{ name: "艾建安", url: "photo1.png", phone: "18734343434", department: "宣传部" },
						{ name: "林子帆", url: "photo2.png", phone: "15221234344", department: "秘书部" },
					]
				}
			]
		}
	}
}
</script>

<style lang="less" scoped>
.photoBox {
	height: 270px;
	display: flex;
	align-items: center;
}

.staff-layout {
	height: 100%;
	background: url(../assets/img/bg.png) no-repeat fixed center 0px/100% 100%;
	overflow: auto;
	text-align: center;

}

.photoList {
	width: 96%;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: white;
	padding: 10px;
	border-radius: 10px;

	li {
		width: 15%;
		background: white;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;
		color: red;
		text-align: center;
		padding: 20px 0px 40px;
		margin: calc(10% / 12);

		img {
			width: 80%;
		}
	}
}
</style>