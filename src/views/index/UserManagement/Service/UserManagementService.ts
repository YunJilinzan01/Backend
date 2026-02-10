import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { UserManagementType } from '@/type/UserManagementType/UserManagementType';


export const useTableFunction = () => {
  const search = ref('')
  const tableData = ref<UserManagementType[]>([
    {
      id: 1,
      username: '张三',
      email: "zhangsan@example.com",
      requiresAuth: true
    },
    {
      id: 2,
      username: '李四',
      email: "lisi@example.com",
      requiresAuth: false
    },
  ])

  const filterTableData = computed(() =>
    tableData.value.filter(
      (data) =>
        !search.value ||
        data.username.toLowerCase().includes(search.value.toLowerCase())
    )
  )


  function toggleAuth(row: UserManagementType) {
    row.requiresAuth = !row.requiresAuth
    ElMessage({
      message: `已将 ${row.username} 设置为 ${row.requiresAuth ? '管理员' : '普通用户'}`,
      type: 'success',
    })
  }


  const remove = (id: UserManagementType["id"]) => {
    const index = tableData.value.findIndex(user => user.id === id)
    if (index !== -1) {
      tableData.value.splice(index, 1)
    }
  }

  return {
    search,
    filterTableData,
    toggleAuth,
    remove
  }
}
