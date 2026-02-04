<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const categoryRef = ref<HTMLElement | null>(null)
let chart: echarts.ECharts | null = null

const handleResize = () => {
  chart?.resize()
}

onMounted(() => {
  if (!categoryRef.value) return
  chart = echarts.init(categoryRef.value)

  const option = {
    title: {
      text: '审核通过率',
      left: '20',
      top: '20',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'none' }, // 隐藏指示线，更清爽
    },
    legend: {
      bottom: '5%',
      left: 'center',
      icon: 'circle', // 图例设为圆点
      itemWidth: 10,
      textStyle: { color: '#4B5563' },
    },
    grid: {
      top: '20%',
      left: '5%',
      right: '8%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      // 隐藏 X 轴相关线条，只保留网格线
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }, // 原型图 X 轴没有数字
      splitLine: {
        lineStyle: { color: '#F3F4F6' },
      },
    },
    yAxis: {
      type: 'category',
      data: ['系统审核', '赵审核员', '王审核员', '李审核员', '张审核员'], // 倒序排列以匹配原型图从上到下
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#374151',
        fontSize: 14,
      },
    },
    series: [
      {
        name: '通过率',
        type: 'bar',
        stack: 'total',
        barWidth: 24, // 柱子宽度
        itemStyle: {
          color: '#28A745', // 绿色
          borderRadius: [6, 0, 0, 6], // 左侧圆角
        },
        // 原型图不显示数字标签，如需显示可开启
        label: { show: false },
        data: [95, 88, 75, 92, 85],
      },
      {
        name: '驳回率',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: '#DC3545', // 红色
          borderRadius: [0, 2, 2, 0], // 右侧微小圆角
        },
        data: [5, 12, 25, 8, 15],
      },
    ],
  }

  chart.setOption(option)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
})
</script>

<template>
  <div id="AuditPassRate">
    <div class="main" ref="categoryRef"></div>
  </div>
</template>

<style scoped lang="scss">
#AuditPassRate {
  width: 24.9vw;
  height: 100%; // 确保父容器（.data-list）有高度，如 452px
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); // 加上阴影更像原型图

  .main {
    width: 100%;
    height: 100%;
  }
}
</style>
