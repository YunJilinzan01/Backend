<script lang="ts" setup>
import { ref } from 'vue'
import {  Search } from '@element-plus/icons-vue'

const tableData = ref([

  {
    id: 1,
    title: 'Vue3.0发布了',
    name: 'Tom',
    status: '待审核',
    date: '2016-05-03',
  },
  {
    id: 2,
    title: 'Vue3.0发布了',
    name: 'Tom',
    status: '待审核',
    date: '2016-05-03',
  },
  {
    id: 3,
    title: 'Vue3.0发布了',
    name: 'Tom',
    status: '待审核',
    date: '2016-05-03',
  },

])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}


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
    <el-table-column prop="status" label="当前状态" width="120" >
      <template #default="scope">
        <el-tag type="warning">{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column  label="操作" min-width="120">
      <template #default="scope">
        <el-button plain :icon="Search">查看详情</el-button>
        <el-button type="success" plain>通过</el-button>
        <el-button type="danger" @click="deleteRow(scope.$index)" plain>拒绝</el-button>
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
    .table-main{
      position: relative;
      height: 100%;
      .table-title{
        position: relative;
        left: 20px;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
      }
      .main{
        margin: 20px 40px;
        border: 1px solid #DEDFE3FF;
        border-radius: 10px;
        overflow: hidden;
        height: 100%;
      }
    }
  }
</style>
