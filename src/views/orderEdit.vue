<template>
	<div class="add-layout">
		<el-table :data="tableData" style="width: 100%;">
			<el-table-column type="index" label="序号" width="100" align="center" />
			<el-table-column prop="name" label="姓名" align="center" />
			<el-table-column prop="department" label="部门" align="center" />
			<el-table-column prop="iphone" label="手机号" align="center" />
			<el-table-column prop="address" label="地址" align="center" />
			<el-table-column prop="time" label="入职时间" align="center" />
			<el-table-column label="操作" align="center">
				<template #default="scope">
					<el-button style="background: rgb(255,98,99);" size="small" type="danger"
						@click="handleDelete(scope.$index, scope.row)">修改</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--添加时的确认框-->
		<el-dialog v-model="dialogVisible" title="提示" width="350">
			<el-input v-model="user.name" placeholder="请输入姓名" />
			<el-input v-model="user.department" placeholder="请输入部门" />
			<el-input v-model="user.iphone" placeholder="请输入手机号" />
			<el-input v-model="user.address" placeholder="请输入地址" />
			<el-date-picker style="width: 100%;" class="timepicker" v-model="user.time" type="date" placeholder="请选择时间"
				size="default" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="edituser">
						确定
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: "",
				department: "",
				iphone: "",
				address: "",
				time: ""
			},
			tableData: [],
			dialogVisible: false,
			idx: 0
		}
	},
	methods: {
		handleDelete(idx, row) {
			this.dialogVisible = true;
			this.idx = idx;
			console.log(idx)//下标
			console.log(row)//内容
			this.user = { ...row }
		},
		edituser() {
			this.dialogVisible = false;
			var obj = {
				idx: this.idx,
				row: this.user
			}
			this.$store.commit("edittableData", obj);
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

.el-input {
	margin-bottom: 15px;
}
</style>