<template>
	<div class="add-layout">
		<div class="add-header">
			<el-input v-model="user.name" placeholder="请输入姓名" />
			<el-input v-model="user.department" placeholder="请输入部门" />
			<el-input v-model="user.iphone" placeholder="请输入手机号" />
			<el-input v-model="user.address" placeholder="请输入地址" />
			<el-date-picker style="width: 180px;" class="timepicker" v-model="user.time" type="date" placeholder="请选择时间"
				size="default" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
			<el-button @click="addbtn()" type="primary">添加</el-button>
		</div>
		<el-table :data="tableData" style="width: 100%;">
			<el-table-column type="index" label="序号" width="100" align="center" />
			<el-table-column prop="name" label="姓名" align="center" />
			<el-table-column prop="department" label="部门" align="center" />
			<el-table-column prop="iphone" label="手机号" align="center" />
			<el-table-column prop="address" label="地址" align="center" />
			<el-table-column prop="time" label="入职时间" align="center" />
		</el-table>
		<!--Dialog 对话框-->
		<el-dialog v-model="dialogVisible" title="提示" width="30%">
			<span class="err">请填写所有内容！</span>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="dialogVisible = false">
						确定
					</el-button>
				</span>
			</template>
		</el-dialog>
		<!--添加时的确认框-->
		<el-dialog v-model="dialogVisible2" title="提示" width="30%">
			<span>请点击确认是否添加用户</span>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible2 = false">取消</el-button>
					<el-button type="primary" @click="adduser">
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
			dialogVisible2: false
		}
	},
	methods: {
		addbtn() {
			if (this.user.time != "" && this.user.name != "" && this.user.department != "" && this.user.iphone != "" && this.user.address != "") {
				this.dialogVisible2 = true
			} else {
				this.dialogVisible = true
			}
		},
		adduser() {
			this.dialogVisible2 = false;
			this.$store.commit("addtableData", { ...this.user });
			// 清空輸入框內容
			Object.assign(this.user, {
				name: "",
				department: "",
				iphone: "",
				address: "",
				time: ""
			});
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