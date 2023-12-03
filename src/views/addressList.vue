<template>
	<div class="address-layout">
		<el-header class="address-header">
			<el-input v-model="searchText" placeholder="请输入关键字" />
			<el-button type="primary" @click="searchFn()">搜索</el-button>
		</el-header>
		<div class="address-list">
			<div class="address-card" v-for="item in newarr">
				<img :src="require(`@/assets/img/${item.url}`)" />
				<!--<img :src="require('@/assets/img/'+item.url)"/>-->
				<div style="padding: 14px">
					<p>姓名：{{ item.name }}</p>
					<p>部门：{{ item.department }}</p>
					<p>电话：{{ item.phone }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import img1 from "../assets/img/photo1.png"
export default {
	name: 'login',
	data() {
		return {
			searchText: "",
			newarr: [],
			arr: [
				{ name: "张吉惟", url: "photo1.png", phone: "13840643123", department: "组织部" },
				{ name: "林国瑞", url: "photo7.png", phone: "15240643132", department: "组织部" },
				{ name: "林玟书", url: "photo3.png", phone: "1340643278", department: "建筑部" },
				{ name: "林雅南", url: "photo4.png", phone: "1524066565", department: "建筑部" },
				{ name: "江奕云", url: "photo5.png", phone: "1567677767", department: "后勤部" },
				{ name: "唐灿", url: "photo6.png", phone: "1346565767", department: "后勤部" },
				{ name: "刘柏宏", url: "photo7.png", phone: "15240643123", department: "秘书部" },
				{ name: "阮建安", url: "photo1.png", phone: "18734343434", department: "秘书部" },
				{ name: "林子帆", url: "photo2.png", phone: "15221234344", department: "设计部" },
				{ name: "张吉惟", url: "photo1.png", phone: "13840643123", department: "设计部" },
				{ name: "黄国瑞", url: "photo7.png", phone: "15240643132", department: "组织部" },
				{ name: "刘玟书", url: "photo3.png", phone: "1340643278", department: "建筑部" },
				{ name: "赵雅南", url: "photo4.png", phone: "1524066565", department: "建筑部" },
				{ name: "钱奕云", url: "photo5.png", phone: "1567677767", department: "软件部" },
				{ name: "苏灿", url: "photo6.png", phone: "1346565767", department: "后勤部" },
				{ name: "孙柏宏", url: "photo7.png", phone: "15240643123", department: "宣传部" },
				{ name: "李建安", url: "photo1.png", phone: "18734343434", department: "宣传部" },
				{ name: "楼子帆", url: "photo2.png", phone: "15221234344", department: "秘书部" },
				{ name: "蒙子帆", url: "photo2.png", phone: "15221234344", department: "设计部" },
				{ name: "张吉惟", url: "photo1.png", phone: "13840643123", department: "设计部" },
				{ name: "覃国瑞", url: "photo7.png", phone: "15240643132", department: "组织部" },
				{ name: "秦玟书", url: "photo3.png", phone: "1340643278", department: "建筑部" },
				{ name: "琴雅南", url: "photo4.png", phone: "1524066565", department: "建筑部" },
				{ name: "勤奕云", url: "photo5.png", phone: "1567677767", department: "软件部" },
				{ name: "唐灿", url: "photo6.png", phone: "1346565767", department: "后勤部" },
				{ name: "汤柏宏", url: "photo7.png", phone: "15240643123", department: "宣传部" },
				{ name: "艾建安", url: "photo1.png", phone: "18734343434", department: "宣传部" },
				{ name: "林子帆", url: "photo2.png", phone: "15221234344", department: "秘书部" },
			]
		}
	},
	methods: {
		searchFn: function () {
			this.newarr = this.arr.filter(item => {
				if (item.name.indexOf(this.searchText) != -1 || item.phone.indexOf(this.searchText) != -1 || item.department.indexOf(this.searchText) != -1) {
					return item;
				}
			})
		}
	},
	mounted() {
		this.newarr = this.arr;
	}
}  
</script>

<style lang="less" scoped="scoped">
.address-header {
	height: 46px;
	background: rgb(234, 242, 245);
	display: flex;
	align-items: center;

	.el-input {
		width: 200px;
		margin-right: 10px;
	}
}

.address-list {
	display: flex;
	flex-wrap: wrap;
}

.address-list .address-card {
	display: flex;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;
	width: 30%;
	margin-top: 30px;
	padding: 10px;
	border-radius: 8px;
	margin-right: 5%;
	box-sizing: border-box;
}

.address-list .address-card:nth-child(3n) {
	margin-right: 0;
}

.address-list img {
	width: 90px;
	height: 90px;
}
</style>