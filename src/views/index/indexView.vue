<script setup lang="ts">
import MenuItem from '@/components/menu/menuItem.vue'
</script>

<template>
  <div id="index">
    <div class="container">
      <el-header class="header">
        <h3>审核后台</h3>
        <div class="avatar"><el-avatar :size="35" /></div>
      </el-header>
      <el-container class="main">
        <el-aside width="255px">
          <MenuItem style="width: 255px; height: 100%">
          </MenuItem>
        </el-aside>
        <el-container class="controller">
          <el-main class="content">
            <RouterView></RouterView>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
#index {
  width: 100%;
  height: 100%; // 确保最外层占满屏幕高度

  .container {
    width: 100%;
    height: 100%;
    display: flex; // 开启 flex
    flex-direction: column; // 纵向排列 header 和 main

    .header {
      display: flex;
      justify-content: space-between;
      flex-shrink: 0; // 确保 header 不会被压缩
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
      height: 60px; // 建议给 header 固定高度
    }

    .main {
      width: 100%;
      gap: 10px;

      .controller {
        padding: 0 20px;
        overflow-y: auto; // 只有内容区允许纵向滚动
      }
    }
  }
}
</style>
