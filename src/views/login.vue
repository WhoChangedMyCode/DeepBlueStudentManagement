<template>
	<div class="login-box">
		<div class="login-main">
			<h3>深蓝软件学员管理系统</h3>
			<el-input autofocus v-model="user.name" class="w-50 m-2" placeholder="演示账号：admin" prefix-icon="Stamp"
				@focus="errhide" clearable />
			<el-input v-model="user.psw" class="w-50 m-2" placeholder="演示账号密码：admin" type="password" prefix-icon="GoodsFilled"
				show-password @focus="errhide" clearable />
			<p class="err" ref="err">用户名或密码错误</p>
			<el-button type="primary" class="login-btn" @click="submit">登录</el-button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'login',
	data() {
		return {
			user: {
				name: "",
				psw: ""
			}
		}
	},
	methods: {
		submit() {
			//用户名密码为空，则显示错误提示
			if (this.user.name == "" || this.user.psw == "") {
				this.$refs.err.style.height = "16px";
			} else {
				var obj = {
					path: "/index",
					title: "主页"
				}
				this.$store.commit("editdefaultActive", obj);
				//根据不同角色返回不同的数据
				if (this.user.name == "admin") {
					var routerList = [
						{ path: "/index", name: "index", title: "主页", icon: "HomeFilled" },
						{ path: "/err", name: "err", title: "404页面", icon: "Failed" },
						{ path: "/update", name: "update", title: "公告", icon: "Calendar" },
						{ path: "/personalData", name: "personalData", title: "个人资料", icon: "UserFilled" },
						{
							title: "学员管理", icon: "Failed", children: [
								{ path: "/orderAdd", name: "orderAdd", title: "添加学员", icon: "List" },
								{ path: "/orderDel", name: "orderDel", title: "删除学员", icon: "List" },
								{ path: "/orderEdit", name: "orderEdit", title: "修改学员", icon: "List" },
								{ path: "/orderFind", name: "orderFind", title: "查找学员", icon: "List" }
							]
						},
						{ path: "/systemSetup", name: 'systemSetup', title: "统计分析", icon: "Operation" },
						{
							title: "公司动态", icon: "BellFilled", children: [
								{ path: "/meeting", name: 'meeting', title: "会议安排", icon: "OfficeBuilding" },
								{ path: "/news", name: 'news', title: "公司新闻", icon: "Reading" },
								{ path: "/excellentStaff", name: 'excellentStaff', title: "优秀学员", icon: "Avatar" }
							]
						},
						{ path: "/addressList", name: 'addressList', title: "通讯录", icon: "Memo" }
					]
				} else {
					var routerList = [
						{ path: "/index", name: "index", title: "主页", icon: "HomeFilled" },
						{ path: "/err", name: "err", title: "404页面", icon: "Failed" },
						{ path: "/update", name: "update", title: "公告", icon: "Calendar" },
						{ path: "/personalData", name: "personalData", title: "个人资料", icon: "UserFilled" },
						{ path: "/systemSetup", name: 'systemSetup', title: "统计分析", icon: "Operation" },
						{
							title: "公司动态", icon: "BellFilled", children: [
								{ path: "/meeting", name: 'meeting', title: "会议安排", icon: "OfficeBuilding" },
								{ path: "/news", name: 'news', title: "公司新闻", icon: "Reading" },
								{ path: "/excellentStaff", name: 'excellentStaff', title: "优秀学员", icon: "Avatar" }
							]
						}
					]
				}
				this.$store.commit("savarouterList", routerList);
				//存用户名
				this.$store.commit("savausername", this.user.name);
				this.$router.push({ name: 'home', query: { username: this.user.name } })
			}
		},
		errhide() {
			this.$refs.err.style.height = "0px";
		},
	},
	mounted() {
		this.$axios
			.get('http://localhost:8080/user.json')
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {

			})

	}
}
</script>
<style lang="less" scoped="scoped">
.login-box {
	height: 100vh;
	background: url(../assets/img/login_page_background.jpg) no-repeat 0px 0px/cover;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;

	.login-main {
		border-radius: 10px;
		width: 305px;
		background: rgba(0, 0, 0, 0.5);
		padding: 30px;

		h3 {
			text-align: center;
			margin-bottom: 10px;
		}

		.el-input {
			margin: 10px 0px;
		}

		.err {
			font-size: 12px;
			color: red;
			height: 0px;
			line-height: 16px;
			overflow: hidden;
			transition: all 0.5s;
		}

		.login-btn {
			margin: 10px 0px;
			width: 100%;
		}

		.register {
			font-size: 13px;
			text-align: right;

			a {
				color: white;
			}
		}
	}
}
</style>