import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({
    userId: '',
    username: '',
    password: '',
  })
  return {
    userInfo,
  }
})
