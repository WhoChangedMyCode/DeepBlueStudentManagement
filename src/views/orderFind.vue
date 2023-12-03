<template>
	<div class="add-layout">
		<div class="add-header">
			<el-input v-model="searchText" placeholder="请输入搜索的关键字" />
			<el-button @click="finduser()" type="primary">查找</el-button>
		</div>
		<el-table :data="tableData" style="width: 100%;">
			<el-table-column type="index" label="序号" width="100" align="center" />
			<el-table-column prop="name" label="姓名" align="center" />
			<el-table-column prop="department" label="部门" align="center" />
			<el-table-column prop="iphone" label="手机号" align="center" />
			<el-table-column prop="address" label="地址" align="center" />
			<el-table-column prop="time" label="入职时间" align="center" />
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: "",
			tableData: []
		}
	},
	methods: {
		finduser() {
			var arr = this.$store.state.tableData;
			this.tableData = arr.filter((value, idx) => {
				if (value.name.indexOf(this.searchText) != -1 || value.department.indexOf(this.searchText) != -1 || value.iphone.indexOf(this.searchText) != -1 || value.address.indexOf(this.searchText) != -1) {
					return value;
				}
			})
		}
	},
	mounted() {
		this.tableData = this.$store.state.tableData
	}
}
</script>

<style lang="less" scoped="scoped">
.add-header {
	background: rgb(236, 242, 245);
	padding: 15px;

	.el-input {
		width: 180px;
		margin-right: 10px;
	}

	.el-button {
		margin-left: 10px;
	}
}

.err {
	color: red;
}
</style>