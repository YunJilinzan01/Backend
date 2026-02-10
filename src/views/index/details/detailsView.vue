<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
onMounted(() => {
  console.log(route.params.id);
})
const postContent = "This is the content of the post."
</script>


<template>
  <div id="post">
    <div class="controller">
      <div class="main" v-html="postContent"></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
