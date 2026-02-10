<script lang="ts" setup>
import { useDrawerFunction } from './Service/DrawerService';

const { dialog, loading, form, handleClose, submit } = useDrawerFunction()

</script>


<template>
  <div id="drawer">
    <el-button @click="dialog = true" type="primary" plain class="drawer-button">
      添加用户
    </el-button>
    <el-drawer v-model="dialog" title="添加用户" :before-close="handleClose" direction="rtl" class="demo-drawer">
      <div class="form">
        <el-form :model="form" label-width="auto" @submit.prevent="submit">
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="邮箱:" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain native-type="submit" :loading="loading">{{
              loading ? '提交中...' : '提交' }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>
