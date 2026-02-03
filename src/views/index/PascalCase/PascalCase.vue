<script setup lang="ts">
import CardItem from '@/components/card/cardItem.vue'
</script>

<template>
  <div id="pascal-case">
    <div class="container">
      <div class="card">
        <template v-for="(_, index) in 4" :key="index">
          <CardItem></CardItem>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#pascal-case {
  width: 100%;
  height: 100%;
  background: white;
  .container {
    display: flex;
    justify-content: center;
    .card {
      display: flex;
      gap: 100px;
    }
  }
}
</style>
