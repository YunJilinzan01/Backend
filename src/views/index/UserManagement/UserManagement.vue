<script lang="ts" setup>
import UserDrawer from '@/components/UserDrawer/UserDrawer.vue';
import { useTableFunction } from './Service/UserManagementService'

const { search, filterTableData, toggleAuth, remove } = useTableFunction()


</script>

<template>
  <div id="UserManagement">
    <div class="main">
      <div class="title"><span>
          用户管理
        </span><user-drawer class="drawer"></user-drawer></div>
      <el-table :data="filterTableData" class="table">
        <el-table-column label="名字" prop="username" />
        <el-table-column label="账号" prop="email" />
        <el-table-column label="权限" prop="requiresAuth">
          <template #default="{ row }">
            <el-tag class="clickable-tag" :type="row.requiresAuth ? 'success' : 'info'" @click="toggleAuth(row)">
              {{ row.requiresAuth ? '管理员' : '普通用户' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Type to search" />
          </template>
          <template #default="{ row }">
            <div class=" btn">
              <el-button type="danger" size="small" plain @click="remove(row.id)">
                删除
              </el-button>
            </div>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 20px 0;
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      margin-bottom: 20px;

      .drawer {}
    }

    .table {
      width: 100%;
      border: 1px solid #DEDFE3FF;
      background: white;

      .clickable-tag {
        cursor: pointer;
      }

      .btn {
        display: flex;
        width: 100%;
        justify-content: center;
      }
    }
  }
}
</style>
