<script lang="ts" setup>
import { Location, User } from '@element-plus/icons-vue'
</script>

<template>
  <div id="menu">
    <div class="asied">
      <el-menu default-active="pascalCase" class="el-menu-vertical-demo" router>
        <el-menu-item index="pascalCase">
          <el-icon><location /></el-icon>
          <template #title>仪表盘</template>
        </el-menu-item>
        <el-menu-item index="userManagement">
          <el-icon><user /></el-icon>
          <template #title>用户管理</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
#menu {
  width: 255px; // 默认展开宽度
  box-sizing: border-box;
  .asied {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 255px;
  height: 100%;
}
</style>
