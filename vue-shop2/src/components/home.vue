<template>
  <div>
    <!-- 13.退出实现 -->
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      //13请求sessionStorage中的token,然后路由跳到(push)login页面
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
</style>