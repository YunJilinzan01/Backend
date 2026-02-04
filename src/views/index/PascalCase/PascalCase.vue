<script setup lang="ts">
import AuditPassRate from '@/components/AuditPassRate/AuditPassRate.vue'
import CardItem from '@/components/card/cardItem.vue'
import CategoryItem from '@/components/category/categoryItem.vue'
</script>

<template>
  <div id="pascal-case">
    <div class="container">
      <div class="card">
        <template v-for="(_, index) in 4" :key="index">
          <CardItem></CardItem>
        </template>
      </div>
      <div class="data-list">
        <CategoryItem class="category"></CategoryItem>
        <AuditPassRate class="audit-pass-rate"></AuditPassRate>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#pascal-case {
  width: 100%;
  height: 100%;
  background: white; // 稍微带点灰，能衬托出白色卡片的阴影
  box-sizing: border-box;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px; // 【关键】统一各行之间的间距

    .card {
      display: flex;
      justify-content: space-between;
      gap: 24px; // 统计卡片之间的间距
      width: 100%;
    }

    $card-shadow:
      0px 6px 16px rgba(0, 0, 0, 0.06),
      0px 0px 1px rgba(0, 0, 0, 0.1);
    $card-radius: 12px;

    .data-list {
      display: flex;
      justify-content: space-between;
      gap: 24px; // 两个图表卡片之间的间距，建议与上面的 gap 一致
      width: 100%;
      height: 480px;

      .category {
        flex: 3; // 占据 75% 左右
        height: 100%;
        background: #ffffff;
        border-radius: $card-radius;
        box-shadow: $card-shadow;
        border: 1px solid #f0f0f0;
      }

      .audit-pass-rate {
        flex: 1; // 占据 25% 左右
        height: 100%;
        background: #ffffff;
        border-radius: $card-radius;
        box-shadow: $card-shadow;
        border: 1px solid #f0f0f0;
      }
    }
  }
}
</style>
