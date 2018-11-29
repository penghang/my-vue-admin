<template>
  <div class="user-setting">
    <el-dropdown @command="clickDown">
      <span class="el-dropdown-link">
        <img class="user" src="../../assets/images/user-wxz.png" alt="">
        <span>{{ userName }}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">个人中心</el-dropdown-item>
        <el-dropdown-item command="2">个人设置</el-dropdown-item>
        <el-dropdown-item command="3">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>
<script>
export default {
  name: 'Headersetting',
  data() {
    return {
      userName: this.$store.state.user.name
    }
  },
  computed: {
  },
  created() {
    this.userName = this.$store.state.user.name
  },
  methods: {
    clickDown(e) {
      switch (e) {
        case '1':

          break
        case '2':
          this.$router.push({ name: 'accountSetting' })
          break
        case '3':// 退出登录
          this.$store.dispatch('logout')
            .then(() => {
              location.reload()
            })
          break
        default:
          break
      }
    }

  }
}
</script>
<style lang="scss" scoped>
*{
  padding:0;
  margin: 0;
}
.user-setting{
  float: left;
  height: 100%;
  padding: 0 20px;
  .el-dropdown-link{
      cursor:pointer;
      .user{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          vertical-align: middle;
      }
  }
}

</style>
