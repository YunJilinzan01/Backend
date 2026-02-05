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
          <MenuItem style="width: 255px; height: 100%"></MenuItem>
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
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
    }
    .main {
      width: 100%;
      gap: 10px;
      .controller {
        padding: 0 20px;
        flex: 1;
        margin-left: 30px;
      }
    }
  }
}
</style>
