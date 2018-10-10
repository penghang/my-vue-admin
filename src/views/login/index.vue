<template>
  <div class="login-con">
    <el-form :model="loginForm">
      <div class="login-con-title">
        <h4>{{ $t('login.title') }}</h4>
        <lang-select class="set-language" />
      </div>
    </el-form>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      }
    }
  }
}
</script>
