<script setup lang="ts">
import AuditPassRate from '@/components/AuditPassRate/AuditPassRate.vue'
import CardItem from '@/components/card/cardItem.vue'
import CategoryItem from '@/components/category/categoryItem.vue'
import TableView from '@/components/TableView/tableView.vue';
import ViewTableChart from '@/components/ViewTableChart/ViewTableChart.vue'
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
      <div class="view-data">
        <ViewTableChart></ViewTableChart>
      </div>
      <div class="table-view">
        <TableView></TableView>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('./style/style.scss');
</style>
