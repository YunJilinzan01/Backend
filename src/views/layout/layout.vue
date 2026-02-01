<script lang="ts">
export default {
  name: 'LayoutView',
}
</script>

<script setup lang="ts"></script>

<template>
  <div id="layout">
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
#layout {
  height: 100%;
}
</style>
