<script lang="ts" setup>
import { Location, User } from '@element-plus/icons-vue'
</script>

<template>
  <div id="menu">
    <div class="asied">
      <el-menu default-active="/index/pascalCase" class="el-menu-vertical-demo" router>
        <el-menu-item index="/index/pascalCase">
          <el-icon>
            <location />
          </el-icon>
          <template #title>仪表盘</template>
        </el-menu-item>
        <el-menu-item index="/index/userManagement">
          <el-icon>
            <user />
          </el-icon>
          <template #title>用户管理</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
#menu {
  width: 255px;
  height: 100%; // 确保占满父级高度
  box-sizing: border-box;

  .asied {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #ffffff; // 这里的颜色要和布局里的 aside-wrapper 一致
  }
}

.el-menu-vertical-demo {
  // border-right: none !important; // 必须去掉，否则滚动时会有断开的黑线
  background-color: transparent !important; // 背景透明，交给父级容器控制

  &:not(.el-menu--collapse) {
    width: 255px;
    /* 不要在这里设置固定的 100% height，否则会限制伸缩 */
    min-height: 100%;
  }
}

// 统一菜单项的高度和样式
:deep(.el-menu-item) {
  height: 56px;
  line-height: 56px;

  &.is-active {
    background-color: #f0f7ff; // 激活时的背景色
  }
}
</style>
