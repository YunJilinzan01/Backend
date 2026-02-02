<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 获取路由实例
const router = useRouter()

// 定义表单数据的组合式函数
const useFormDate = () => {
  const username = ref('')
  const password = ref('')

  return {
    username,
    password,
  }
}
const { username, password } = useFormDate()

const navigateToIndex = () => {
  router.push({ name: 'index' })
}
</script>

<template>
  <div id="login">
    <div class="container">
      <div class="title">
        <h2>欢迎登录</h2>
        <p>请输入您的账号和密码进行登录。</p>
      </div>
      <el-form class="form" @submit.prevent="navigateToIndex">
        <el-form-item prop="username">
          <div>用户名</div>
          <el-input v-model="username" placeholder="请输入账号"
        /></el-form-item>
        <el-form-item prop="password">
          <div>密码</div>
          <el-input v-model="password" placeholder="请输入密码" type="password" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" class="button" size="large"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('./style/style.scss');
</style>
