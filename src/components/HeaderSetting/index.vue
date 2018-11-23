<template>
  <div class="user-setting">
    <el-dropdown @command="clickDown">
      <span class="el-dropdown-link">
        <img class="user" src="../../assets/images/user-wxz.png" alt="">
        <p>{{ userName }}</p>
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
import Cookies from 'js-cookie'
export default {
  name: 'Headersetting',
  data() {
    return {
      userName: this.$store.state.user.token || Cookies.get('username')
    }
  },
  computed: {
  },
  created() {
    this.userName = this.$store.state.user.token || Cookies.get('username')
  },
  methods: {
    clickDown(e) {
      switch (e) {
        case '1':

          break
        case '2':
          this.$router.push({ path: '/system/setting' })
          break
        case '3':// 退出登录
          this.$store.dispatch('loginOut')
            .then(() => {
              Cookies.remove('username')
              this.$store.dispatch('delAllViews')
              this.$router.replace({ path: '/login' })
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
