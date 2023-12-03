<template>
	<el-timeline class="news-layout">
		<el-timeline-item v-for="(item, idx) in logList" :timestamp="item.updatetime" placement="top">
			<el-card>
				<h4>{{ item.title }}</h4>
				<p>{{ item.content }}<span @click="fn(idx)">[更多内容]</span></p>
			</el-card>
		</el-timeline-item>
	</el-timeline>
</template>


<script>
export default {
	data() {
		return {
			logList: [
				{
					title: "来思尔股权获利出让，吹响进军华东市场集结号",
					content: "公司谋定而后动，为实现“布局西南、提速扩张”的目标，早在2011年6月公司通过增资方式控股来思尔乳业。经过多年深耕，集团品牌已经扎根云南市场并实现了川、渝、黔三省的基本覆盖。随着公司业务架构逐渐成熟，以及广西公司产能的不断扩张，呈现出三家子公司在区位和产品结构的互补性，为集团品牌在西南市场目标的达成，为西南市场的布局和精耕细作提供了有力的支撑。",
					updatetime: "2023-12-01",
					src: "photo1.png"
				},
				{
					title: "安徽省阜阳市考察团一行莅临集团 交流考察",
					content: "通过本次交流考察，阜阳市考察团一行对本集团有了更新更全面的认识，双方对当前重点项目建设形势进行了分析研判，并对下步工作进行安排部署，确保项目顺利建设，合力为阜阳市经济社会高质量发展作出更大贡献。",
					updatetime: "2023-11-01",
					src: "photo2.png"
				},
				{
					title: "“审视、转变、阔步未来”专题战略研讨会",
					content: "集团2023年第一季度营、利双涨暴增，其中营业收入增长53.83%，利润增长102.55％，乳业集团旗下多家公司都实现了逆势奔跑、业绩开门红。在经济弱复苏、乳品行业发展态势摇摆不定的大环境下，这份成绩实属不易，倍加珍贵！然而，这样的强劲态势是否具有持续性，这是我们必须深刻思考的问题。",
					updatetime: "2023-10-01",
					src: "photo3.png"
				},
				{
					title: "广西营养健康创新中心正式挂牌",
					content: "该营养健康创新中心将以“增品质，创品牌，争新品”为目标，推动食物营养健康科技创新，助力本土乳企新品研发与市场运营，倡导全生命周期健康饮食行为，建立具有广西特色的健康膳食模式，全面提升国民营养健康素养水平。",
					updatetime: "2023-09-01",
					src: "photo4.png"
				},
				{
					title: "工商银行广西分行行长莅临集团调研指导",
					content: "首先参观了皇氏中央智能化生产车间，何海晏副董事长对自动化生产线、产品技术创新、智能仓储管理的情况进行了详细的介绍。平凡行长听后给予了高度评价及肯定，他表示，皇氏集团多年来致力于深耕乳品行业，一直以高标准高质量推进奶水牛产业的发展，未来前景光明且势头强劲。",
					updatetime: "2023-08-01",
					src: "photo5.png"
				},
				{
					title: "牵手春天，纵情向前、慰问外派员工家属活动",
					content: "2023年，您的亲人承载理想，背井离乡，勇担重任，在负责的工作领域取得了突出的成绩。一分耕耘，一分收获。值得您为他感到骄傲和自豪!这些工作成绩的取得，得益于他自身的顽强拼搏和艰苦奋斗，更得益于您和家人在背后的大力支持和无私付出。",
					updatetime: "2023-07-01",
					src: "photo6.png"
				}
			]
		}
	},
	methods: {
		fn(n) {
			this.$store.commit("savanews", this.logList[n]);
			this.$router.push("/newstemplate");
		}
	}
}	
</script>

<style lang="less" scoped="scoped">
.news-layout {
	span {
		color: blue;
	}

	h4 {
		font-size: 18px;
		margin-bottom: 10px;
	}
}
</style>