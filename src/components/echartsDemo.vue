<template>
  <div ref="chartOne" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
  // 引入Echarts主模块
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/bar')
  // 引入圆饼图
  require('echarts/lib/chart/pie')
  // 引入所需组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/legend')

  export default {
    name: 'echartsDemo',
    // 创建图表一
    methods: {
      createChartOne () {
        let chartOne = echarts.init(this.$refs.chartOne)

        chartOne.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ['iOS', 'Vue', 'Java', 'GO']
          },
          yAxis: {},
          series: [{
            name: '热度',
            type: 'bar',
            data: [5, 6, 9, 6]
          }]
        })
      }
    },
    mounted () {
      this.createChartOne()
    }
  }
</script>
