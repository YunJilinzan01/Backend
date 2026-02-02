<script setup lang="ts"></script>

<template>
  <div id="index">
    <div class="container">
      <el-container class="main">
        <el-aside width="255px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
#index {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    .main {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
