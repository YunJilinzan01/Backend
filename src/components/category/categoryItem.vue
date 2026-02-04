<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const categoryRef = ref<HTMLElement | null>(null)
let chart: echarts.ECharts | null = null

// 响应式处理函数
const handleResize = () => {
  chart?.resize()
}

// ... 前面代码保持不变

onMounted(() => {
  if (!categoryRef.value) return

  chart = echarts.init(categoryRef.value)
  const option = {
    // 1. 提示框配置
    tooltip: {
      trigger: 'axis', // 触发类型：'axis' 坐标轴触发，主要用于折线图、柱状图等
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // 悬浮框背景色
      borderColor: '#E4E7ED', // 边框颜色
      borderWidth: 1, // 边框宽度
      padding: [10, 15], // 内边距 [上, 右, 下, 左]
      textStyle: {
        color: '#1F2937', // 文字颜色
        fontSize: 14,
      },
      axisPointer: {
        // 坐标轴指示器配置
        type: 'line', // 指示器类型：'line' 直线；'shadow' 阴影
        lineStyle: {
          color: '#9CA3AF', // 指示线颜色
          type: 'dashed', // 指示线为虚线，更美观
        },
      },
      // 这里的 extraCssText 可以添加额外的 CSS 样式，比如阴影
      extraCssText: 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-radius: 4px;',
    },

    // 全局调色盘
    color: ['#8A2BE2', '#4B5563'],

    title: {
      text: '帖子发布趋势',
      left: '20',
      top: '10',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
      },
    },

    // 图例配置
    legend: {
      bottom: '5%',
      left: 'center',
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        color: '#4B5563',
      },
    },

    grid: {
      top: '18%',
      left: '5%',
      right: '5%',
      bottom: '15%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '01月01',
        '01月02',
        '01月03',
        '01月04',
        '01月05',
        '01月06',
        '01月07',
        '01月08',
        '01月09',
        '01月10',
      ],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9CA3AF' },
    },

    yAxis: {
      type: 'value',
      min: 0,
      max: 3800,
      interval: 950,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          type: 'solid',
          color: '#F3F4F6',
        },
      },
      axisLabel: { color: '#9CA3AF' },
    },

    series: [
      {
        name: '发布帖数',
        type: 'line',
        data: [100, 120, 110, 150, 130, 180, 160, 190, 200, 210],
        smooth: true,
        showSymbol: false, // 默认不显示圆点，只有鼠标悬停提示框出现时才显示，符合现代 UI
        lineStyle: { width: 3 },
      },
      {
        name: '页面浏览量',
        type: 'line',
        data: [1500, 2200, 1800, 2800, 2500, 3100, 2700, 3500, 3000, 3800],
        smooth: true,
        showSymbol: false, // 默认不显示圆点
        lineStyle: { width: 3 },
      },
    ],
  }

  chart.setOption(option)
  window.addEventListener('resize', handleResize)
})

// ... 后面代码保持不变

// 组件销毁时移除监听，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
})
</script>

<template>
  <div class="category-wrapper">
    <div class="category-chart" ref="categoryRef"></div>
  </div>
</template>

<style scoped lang="scss">
.category-wrapper {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 8px;
  .category-chart {
    width: 100%;
    height: 100%;
  }
}
</style>
