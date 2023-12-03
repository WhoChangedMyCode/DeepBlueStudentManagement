<template>
	<div ref="EcharRef" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
	data() {
		return {
			option: {
				legend: {
					orient: 'vertical',
					x: 'left',
					data: ['A', 'B', 'C', 'D', 'E']
				},
				series: [
					{
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						labelLine: {
							show: false
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						data: [
							{ value: 335, name: 'A' },
							{ value: 310, name: 'B' },
							{ value: 234, name: 'C' },
							{ value: 135, name: 'D' },
							{ value: 1548, name: 'E' }
						]
					}
				]
			}
		}
	},
	mounted() {
		//ref获取创建的Dom结构
		const main = this.$refs.EcharRef;
		//初始化图表
		var myChart = this.$echarts.init(main);
		//配置对应的option数据
		myChart.setOption(this.option)
	}
}	
</script>
