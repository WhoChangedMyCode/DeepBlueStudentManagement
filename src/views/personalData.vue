<template>
	<div class="persobal-layout">
		<img src="../assets/img/girl2.png" />
		<ul class="info-list">
			<li>
				<b>姓名：</b>
				<span>{{ obj.name }}</span>
			</li>
			<li>
				<b>部门：</b>
				<span>{{ obj.bm }}</span>
			</li>
			<li>
				<b>岗位：</b>
				<span>{{ obj.gw }}</span>
			</li>
			<li>
				<b>职责：</b>
				<ol>
					<li v-for="site in obj.zz">{{ site }}</li>
				</ol>
			</li>
			<li>
				<b>座右铭：</b>
				<p>{{ obj.zym }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			obj: {
				url: "girl2.png",
				name: "Tux",
				bm: "软件技术开发",
				gw: "web前端工程师",
				zz: ["负责Web产品的前端表现层与后端交互的设计和开发，保证页面浏览的兼容性和流畅浏览;", "负责Javascript程序模块的开发，通用类库和框架的编写;", "负责配合产品经理、后端开发人员实现产品界面;", "快速响应产品迭代以及优化升级，持续优化前端体验，并保持良好兼容性，提升友好和易用性;", "负责产品的交互界面设计，分析用户的使用习惯和偏好；从用户体验的角度出发，提出最优的界面交互设计方案;", "参与产品的原型讨论和整体UE设计，规划产品界面交互设计方案;"],
				zym: "111111111111111111111111111111111"
			}
		}
	}
}  
</script>

<style lang="less" scoped>
.persobal-layout {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	img {
		height: 50%;
	}

	.info-list {
		li {
			margin-bottom: 15px;

			span {
				font-size: 18px;
			}

			p,
			ol {
				margin-top: 10px;
			}

			li {
				list-style: decimal inside;
			}
		}
	}
}
</style>