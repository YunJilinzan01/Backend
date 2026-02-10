import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormData } from '@/type/DrawerType/drawerType'
export const useDrawerFunction = () => {
  const dialog = ref(false) // 控制抽屉的显示与隐藏
  const loading = ref(false) // 控制提交按钮的加载状态

  // 表单数据
  const form = ref<FormData>({
    username: '',
    email: '',
    password: '',
  })

  /**
   * 关闭抽屉前的确认提示
   * @param done 关闭抽屉的回调函数
   */
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要退出吗?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        done()
        ElMessage.success('已退出')
      })
      .catch(() => {
        // 取消操作
        ElMessageBox.alert('已取消退出', '提示', {
          confirmButtonText: '确定',
          type: 'info',
        })
      })
  }


  /**
   * 提交表单数据的函数，模拟异步操作
   */
  const submit = () => {
    loading.value = true
    setTimeout(async () => {
      try {
        await Promise.resolve() // 模拟异步操作
        ElMessageBox.alert('用户添加成功!', '成功', {
          confirmButtonText: '确定',
          type: 'success',
        })
      } catch {
        ElMessageBox.alert('用户添加失败!', '失败', {
          confirmButtonText: '确定',
          type: 'error',
        }).finally(() => {
          dialog.value = false
          loading.value = false
        })
      }
    }, 1000)
  }

  return {
    dialog,
    loading,
    form,
    handleClose,
    submit
  }
}
