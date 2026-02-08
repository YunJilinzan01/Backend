<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLElement | null>(null)
let chart: echarts.ECharts | null = null

onMounted(() => {
  if (!chartRef.value) return
  chart = echarts.init(chartRef.value)

  const option = {
    // 调色盘：对应图中的 珊瑚橙、青绿、深蓝、淡黄
    color: ['#F07D5B', '#38A096', '#314659', '#F9CF6E'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    legend: {
      bottom: '5%', // 布局在底部
      left: 'center',
      icon: 'circle', // 图例形状改为圆点
      itemWidth: 8, // 图例图标宽度
      itemHeight: 8,
      textStyle: {
        color: '#666',
        fontSize: 12,
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '75%'], // 环形图内外半径
        center: ['50%', '45%'], // 调整中心点，给下方图例留空间
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0, // 保持平滑切口
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false, // 默认不显示文字
          position: 'center',
        },
        // 高亮样式（鼠标悬停）
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 40, name: '直接访问' },
          { value: 30, name: '搜索引擎' },
          { value: 20, name: '社交媒体' },
          { value: 10, name: '推荐链接' },
        ],
      },
    ],
  }
  chart.setOption(option)

  // 响应式处理
  window.addEventListener('resize', () => chart?.resize())
})
</script>

<template>
  <div id="ViewTableCard">
    <div class="header">
      <h3 class="title">总页面浏览量分布</h3>
    </div>

    <div class="chart-container">
      <div class="chart" ref="chartRef"></div>
    </div>

    <div class="footer-stats">
      <div class="label">日活跃浏览量</div>
      <div class="value">12,345</div>
      <div class="trend">
        <span class="percent">+5.2%</span>
        <span class="compare">环比昨日</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#ViewTableCard {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 24vw;
  min-width: 300px;
  height: 480px; /* 增加了高度以容纳文字 */
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  background: white;

  .header {
    .title {
      margin: 0;
      font-size: 18px;
      color: #333;
      font-weight: 600;
    }
  }

  .chart-container {
    flex: 1; /* 自动撑开 */
    width: 100%;
    position: relative;
    .chart {
      width: 100%;
      height: 100%;
    }
  }

  .footer-stats {
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;

    .label {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .value {
      font-size: 28px;
      color: #722ed1; /* 紫色数值 */
      font-weight: bold;
      font-family: 'Arial', sans-serif;
      margin-bottom: 4px;
    }

    .trend {
      font-size: 13px;
      .percent {
        color: #999; /* 图片中看似是灰色，或者是根据正负变色 */
        margin-right: 8px;
      }
      .compare {
        color: #999;
      }
    }
  }
}
</style>
