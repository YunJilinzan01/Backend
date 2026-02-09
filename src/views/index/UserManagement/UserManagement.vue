<script lang="ts" setup>
import type { UserManagementType } from '@/type/UserManagementType/UserManagementType';
import { computed, ref } from 'vue'

const search = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const tableData = ref<UserManagementType[]>([])
</script>

<template>
  <div id="UserManagement">
    <div class="main">
      <div class="title">用户管理</div>
      <el-table :data="filterTableData" style="width: 100%;" class="table">
        <el-table-column label="名字" prop="username" />
        <el-table-column label="账号" prop="email" />
        <el-table-column label="权限" prop="requiresAuth" />
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Type to search" />
          </template>
          <template #default="{ row }">
            <el-button type="danger" size="small" plain>
              删除
            </el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss">
#UserManagement {
  background: white;

  .main {
    position: relative;
    padding: 20px 30px;
    margin: 0 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: white;

    .title {
      position: relative;
      left: 20px;
      padding: 20px 0;
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      margin-bottom: 20px;
    }

    .table {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
}
</style>
