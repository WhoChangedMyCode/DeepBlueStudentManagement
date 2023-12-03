<template>
	<div class="index-layout">
		<el-card class="box-card" v-for="(item, key) in cardList" :key="key">
			<template #header>
				<div class="card-header">
					<el-button type="success" :icon="item.icon" size="small" />
					<router-link @click="savadefaultactive(item.path, item.title)"
						:to="item.path">{{ item.title }}</router-link>
				</div>
			</template>
			<div class="text item">
				<p class="textbox" v-html="item.show ? item.text : item.text.substring(0, 40) + '...'"></p>
			</div>
			<div class="ft">
				<span class="btn" @click="showitem(key)">{{ item.show ? '[收起]' : '[展开]' }}</span>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cardList: ""
		}
	},
	methods: {
		showitem: function (n) {
			this.cardList[n].show = !this.cardList[n].show;
		},
		savadefaultactive(path, title) {
			var obj = {
				path: path,
				title: title
			}
			this.$store.commit("editdefaultActive", obj);
		},
	},
	mounted() {
		if (this.$store.state.username == "admin") {
			this.cardList = [
				{
					icon: "Memo",
					title: "通讯录",
					path: "/addressList",
					text: "通讯录是一种利用互联网或移动互联网实现通讯录信息同步更新和备份的应用/服务。你可以在个人电脑、掌上电脑、移动电话等任何联网设备上录入你的联系人的手机\电话号码、Email、QQ、MSN、通信地址等通讯录信息，或对以前的信息进行分组、管理和更新，在你的许可下，该联系人可以看到他所在组内的其他联系人信息，从而实现通讯录共享，如果该联系人更新自己的联系信息，你的通讯录会自动更新，实现同步通讯录，并留下旧版本的通讯录信息。",
					show: false
				},
				{
					icon: "OfficeBuilding",
					title: "会议安排",
					path: "/meeting",
					text: "“会议”，是汉语词汇，拼音是huì yì，意思是指有组织、有领导、有目的的议事活动，它是在限定的时间和地点，按照一定的程序进行的。会议一般包括议论、决定、行动3个要素。因此，必须做到会而有议、议而有决、决而有行，否则就是闲谈或议论，不能成为会议。会议是一种普遍的社会现象，几乎有组织的地方都会有会议，会议的主要功能包括决策、控制、协调和教育等功能。",
					show: false
				},
				{
					icon: "Reading",
					title: "集团新闻",
					path: "/news",
					text: "会上，双方分别就合作履约情况及取得的成绩进行了汇报，对未来战略合作表示期望。随后双方开展了深入的交流。集团副总裁钱秀纯表示，在双方多年来的合作中，华润置地一直带领集团华润事业部团队成长与发展，并越战越勇。2023年作为交付年，华新将全力做好项目履约及结算管理，打好保级攻坚战。在市场结构调整下，华新集团将抓好现场跟市场，加大与华润的管理融合，文化融合，与华润协同发展。同时做好商业项目复盘，加大拓展华润置地商业项目规模。",
					show: false
				},
				{
					icon: "Avatar",
					title: "优秀学员",
					path: "/excellentStaff",
					text: "能否打造一支高素质的员工队伍是干好一切工作的前提，在创建学习型班组的过程中，该班组注重提升员工素质和责任心的培养，因为作为-名调温工，如果责任心不强，将对产品质造成不可估量的损失，为了提高班组员工主动履责的能力，充分利用班前班后会,对当天的工作质量进行分析评价，对干得好的员工谈工作经验，做得不好的分析查找原因,主动赶上。为了引导员工牢固树立学习的重要性,该班组以公司”岗位大练兵” 活动为契机，认真组织开展每月一次的员工技能实际操作培训和技能竞赛活动、三学活动”，激发全班人员”学技术、学技能”的热情。另外通过“师带徒、传帮带”等形式，使班组里的新员工技能水平不断得到提升。",
					show: false
				}
			]
		} else {
			this.cardList = [
				{
					icon: "UserFilled",
					title: "个人资料",
					path: "/personalData",
					text: "我性格开朗，爱好广泛,在学习期间用心参加各种活动，多次组织一些校园活动。 用心向上且对待工作认证负责,有上我性格开朗，爱好广泛，在学习期间用心参加各种活动，多次组织一些校园活动.用心向上且对待工作认证负责，有上进心，勤于学习能不断进步，喜欢向高难度挑战，提升自身的潜力与综合素质。我是一个很有时间观念的人， 能用心认真做进心，勤于学习能不断进步，喜欢向高难度挑战，提升自身的潜力与综合素质.我是一个很有时间观念的人，能用心认真做好每件事，不怕辛苦不怕累，更不怕挫折,待人真诚，善于沟通、协调，有较强的组织潜力与团队精神。",
					show: false
				},
				{
					icon: "OfficeBuilding",
					title: "会议安排",
					path: "/meeting",
					text: "“会议”，是汉语词汇，拼音是huì yì，意思是指有组织、有领导、有目的的议事活动，它是在限定的时间和地点，按照一定的程序进行的。会议一般包括议论、决定、行动3个要素。因此，必须做到会而有议、议而有决、决而有行，否则就是闲谈或议论，不能成为会议。会议是一种普遍的社会现象，几乎有组织的地方都会有会议，会议的主要功能包括决策、控制、协调和教育等功能。",
					show: false
				},
				{
					icon: "Reading",
					title: "集团新闻",
					path: "/news",
					text: "会上，双方分别就合作履约情况及取得的成绩进行了汇报，对未来战略合作表示期望。随后双方开展了深入的交流。集团副总裁钱秀纯表示，在双方多年来的合作中，华润置地一直带领集团华润事业部团队成长与发展，并越战越勇。2023年作为交付年，华新将全力做好项目履约及结算管理，打好保级攻坚战。在市场结构调整下，华新集团将抓好现场跟市场，加大与华润的管理融合，文化融合，与华润协同发展。同时做好商业项目复盘，加大拓展华润置地商业项目规模。",
					show: false
				},
				{
					icon: "Avatar",
					title: "优秀学员",
					path: "/excellentStaff",
					text: "能否打造一支高素质的员工队伍是干好一切工作的前提，在创建学习型班组的过程中，该班组注重提升员工素质和责任心的培养，因为作为-名调温工，如果责任心不强，将对产品质造成不可估量的损失，为了提高班组员工主动履责的能力，充分利用班前班后会,对当天的工作质量进行分析评价，对干得好的员工谈工作经验，做得不好的分析查找原因,主动赶上。为了引导员工牢固树立学习的重要性,该班组以公司”岗位大练兵” 活动为契机，认真组织开展每月一次的员工技能实际操作培训和技能竞赛活动、三学活动”，激发全班人员”学技术、学技能”的热情。另外通过“师带徒、传帮带”等形式，使班组里的新员工技能水平不断得到提升。",
					show: false
				}
			]
		}
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

.ft {
	text-align: right;
	margin-top: 6px;
}

.btn {
	color: #999;
	font-size: 14px;
}

.textbox {
	height: 70px;
	overflow: auto;
}</style>