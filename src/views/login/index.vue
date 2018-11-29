<template>
  <div class="login-con">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" >
      <div class="login-con-title">
        <h4 class="title-text">{{ $t('login.title') }}</h4>
        <lang-select class="set-language" />
      </div>

      <div class="login-con-input">
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            v-model="loginForm.username"
            :placeholder="$t('login.username')"
            name="username"
            type="text"
            autocomplete="off" />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :type="passwordType"
            v-model="loginForm.password"
            :placeholder="$t('login.password')"
            name="password"
            @keyup.enter.native="login('loginForm')" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon icon-class="eye" />
          </span>
        </el-form-item>
        <div class="lose-pwd">
          <span @click="losePwd">忘记密码?</span>
        </div>
        <el-button :loading="loading" type="primary" @click.native.prevent="login('loginForm')">{{ $t('login.logIn') }}</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername, validPassword } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
// import Cookies from 'js-cookie'
export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    const validateUsername = (rule, value, cb) => {
      if (!validUsername(value)) {
        cb(new Error(this.$t('login.username')))
      } else {
        cb()
      }
    }
    const validatePassword = (rule, value, cb) => {
      if (!validPassword(value)) {
        cb(new Error(this.$t('login.password')))
      } else {
        cb()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      passwordType: 'password',
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('login', this.loginForm).then((obj) => {
            this.loading = false
            // Cookies.set('username', obj.username)
            this.$router.push({ name: 'Home' })
            // 更换用户时之前的路由可能变得无权限
            // this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!!')
          return false
        }
      })
    },
    losePwd() {
      this.$router.push({ path: '/losepwd' })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#515a6e;
  $cursor: #fff;
  $form_padding: 20px;

  .login-con {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #00070f;
    background-image: url(../../assets/images/login-bg.png);
    background-size: cover;
    background-position: center;
    .el-form-item {
      border: 1px solid #dcdee2;
      border-radius: 5px;
      color: #515a6e;
    }
    .el-input {
      display: inline-block;
      width: 85%;
      input {
        background-color: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        color: $light_gray;
      }
    }
    .login-form {
      position: absolute;
      right: 160px;
      top: 50%;
      transform: translateY(-60%);
      width: 300px;
      background: #fff;
      border-radius: 4px;
    }
    .login-con-title {
      position: relative;
      border-bottom: 1px solid #e8eaec;
      text-indent: $form_padding;
      .title-text {
        margin: 0;
        line-height: 61px;
      }
      .set-language {
        position: absolute;
        color: $light_gray;
        top: 20px;
        right: $form_padding;
      }
    }
    .login-con-input {
      padding: $form_padding;
      .el-button {
        width: 100%;
      }
      .lose-pwd {
        font-size: 14px;
        color: $light_gray;
        padding-bottom: 10px;
        text-align: right;
        span{
          cursor: pointer;
        }
      }
    }
    .svg-container {
      padding: 0 5px 0 15px;
      color: $dark_gray;
      width: 30px;
      display: inline-block;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>

