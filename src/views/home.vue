<template>
	<div class="common-layout">
		<el-container class="home-layout">
			<el-header class="home-header">
				<h3>深蓝软件学员管理系统</h3>
				<div class="home-header-dropdown">
					<img src="../assets/img/Tux.svg" />
					<el-dropdown trigger="click">
						<span class="el-dropdown-link">
							{{ username }}
							<el-icon class="el-icon--right">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu class="home-header-dropdown-menu">
								<el-dropdown-item icon="QuestionFilled">
									<router-link to="">修改密码</router-link>
								</el-dropdown-item>
								<el-dropdown-item icon="Setting">
									<router-link to="/" @click="delvuex">安全退出</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</el-header>
			<el-container class="home-container">
				<el-aside width="200px">
					<el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
						:default-active="this.$store.state.defaultActive.path" router text-color="#fff">
						<div v-for="(item, key) in routerList">
							<el-sub-menu :index="key" v-if="item.children">
								<template #title>
									<component :is="item.icon" style="width: 20px; height:20px;" />
									{{ item.title }}
								</template>
								<el-menu-item @click="savadefaultactive(site.path, site.title)" :index="site.path"
									:route="site.path" v-for="site in item.children">
									<component :is="site.icon" style="width: 20px; height:20px;" />
									{{ site.title }}
								</el-menu-item>
							</el-sub-menu>
							<el-menu-item @click="savadefaultactive(item.path, item.title)" :index="item.path" v-else
								:route="item.path">
								<component :is="item.icon" style="width: 20px; height:20px;" />
								{{ item.title }}
							</el-menu-item>
						</div>


					</el-menu>
				</el-aside>
				<el-container class="home-main">
					<el-header class="home-main-header">
						<router-link to="/home" @click="savadefaultactive('/index', '主页')">首页</router-link> /
						{{ this.$store.state.defaultActive.title }}
					</el-header>
					<el-main class="home-main-content">
						<router-view />
					</el-main>
					<el-footer class="home-main-footer">欢迎</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			username: "",
			routerList: []
		}
	},
	methods: {
		savadefaultactive(path, title) {
			var obj = {
				path: path,
				title: title
			}
			this.$store.commit("editdefaultActive", obj);
		},
		delvuex() {
			var obj = {
				path: "",
				title: ""
			}
			this.$store.commit("editdefaultActive", obj);
			localStorage.removeItem("vuex");
			location.reload();
		}
	},
	mounted() {
		console.log(this.$route.params.username);
		console.log(this.$route.query.username);
		console.log(this.$store.state.routerList);
		this.routerList = this.$store.state.routerList
		this.username = this.$store.state.username
	}
}
</script>

<style lang="less" scoped>
.home-layout {
	width: 100%;
	height: 100vh;

	.home-header {
		height: 60px;
		background: rgb(0, 24, 41);
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;

		img {
			width: 30px;
			margin-right: 10px;
		}

		.home-header-dropdown {
			display: flex;
			align-items: center;

			span {
				color: white;
			}
		}
	}

	.home-container {
		height: calc(100vh - 60px);
		background: rgb(81, 92, 100);
		display: flex;
		justify-content: space-between;

		.home-aside {
			width: 220px;
			height: 100%;
			background: rgb(73, 92, 100);
		}

		.home-main {
			width: calc(100% - 220px);
			height: 100%;
			background: white;

			.home-main-header {
				height: 50px;
				line-height: 50px;
				background: rgb(237, 242, 245);
				font-size: 14px;
				color: black;

				a {
					color: black;
				}
			}

			.home-main-content {
				height: calc(100% - 110px);
				overflow: auto;
			}

			.home-main-footer {
				height: 60px;
				background: rgb(237, 242, 245);
				line-height: 60px;
				text-align: center;
				color: #888;
			}
		}
	}
}

.home-header-dropdown-menu a {
	color: #606266;
}

.home-header-dropdown-menu a:hover {
	color: rgb(0, 160, 255);
}

/*激活当前菜单*/

.is-active {
	color: black !important;
	background: rgb(139, 223, 220) !important;
}

.home-main-header {
	height: 46px;
	background: rgb(236, 242, 245);
	line-height: 46px;
}
</style>