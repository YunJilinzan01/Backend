<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCheckFilled, CircleCloseFilled, Search } from '@element-plus/icons-vue'
import type { TableDateType } from '@/type/TableDateType/dataType'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const useTableFunction = () => {
  const tableData = ref<TableDateType[]>([
    {
      id: 1,
      title: '如何提升审核效率？',
      name: '张三',
      date: '2024-06-01',
      status: '待审核',
    },
    {
      id: 2,
      title: '审核流程优化建议',
      name: '李四',
      date: '2024-06-02',
      status: '待审核',
    },
    {
      id: 3,
      title: '审核标准更新通知',
      name: '王五',
      date: '2024-06-03',
      status: '待审核',
    },
    {
      id: 4,
      title: '审核系统维护公告',
      name: '赵六',
      date: '2024-06-04',
      status: '待审核',
    }
  ])

  const success = (index: TableDateType["id"]) => {
    ElMessage({
      message: '操作成功',
      type: 'success',
    })
  }
  const fail = (index: TableDateType["id"]) => {
    ElMessage({
      message: '驳回成功',
      type: 'success',
    })
  }

  const details = (index: TableDateType["id"]) => {
    router.push({ name: 'details', params: { id: index } })
  }
  return {
    tableData,
    success,
    fail,
    details
  }

}

const { tableData, success, fail, details } = useTableFunction()
</script>
<template>
  <div id="table">
    <div class="table-main">
      <div class="table-title">
        <p>
          最近待审核帖子
        </p>
      </div>
      <div class="main">
        <el-table :data="tableData" style="width: 100%" max-height="627">
          <el-table-column prop="title" label="标题" width="150" />
          <el-table-column prop="name" label="作者" width="120" />
          <el-table-column prop="date" label="提交时间" width="120" />
          <el-table-column prop="status" label="当前状态" width="120">
            <template #default="scope">
              <el-tag type="warning">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" min-width="120">
            <template #default="scope">
              <el-button plain :icon="Search" @click="details(scope.row.id)">查看详情</el-button>
              <el-button type="success" plain @click="success(scope.row.id)" :icon="CircleCheckFilled">通过</el-button>
              <el-button type="danger" plain @click="fail(scope.row.id)" :icon="CircleCloseFilled">拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
#table {
  position: relative;
  margin: 30px 0;
  padding: 20px 0;
  width: 100%;
  height: 627px;
  box-shadow: 0px 4px 8px #00000014, 0px 0px 0px #171a1f00;
  border: 1px solid #DEDFE3FF;
  border-radius: 8px;
  overflow: hidden;
  background: white;

  .table-main {
    position: relative;
    height: 100%;

    .table-title {
      position: relative;
      left: 20px;
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
    }

    .main {
      margin: 20px 40px;
      border: 1px solid #DEDFE3FF;
      border-radius: 10px;
      overflow: hidden;
      height: 100%;
    }
  }
}
</style>
