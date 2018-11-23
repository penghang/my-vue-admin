<template>
  <div class="login-con">
    <div class="content-box">
      <el-row type="flex" align="middle">
        <el-col :span="4">
          <i class="el-icon-back" @click="goBack"/>
        </el-col>
        <el-col :span="16">
          <h3>找回密码</h3>
        </el-col>
      </el-row>
      <div>
        <el-radio-group v-model="radio" class="radio-group" @change="onChange" >
          <el-radio-button label="手机找回" class="radio-button" />
          <el-radio-button label="邮箱找回" class="radio-button" />
        </el-radio-group>
      </div>
      <div v-if="type==0?true:false" class="content-find tel-find">
        <div class="boder-bottom">
          <span class="input-title">手机号</span><br >
          <el-input placeholder="请输入手机号"/>
        </div>
        <div class="boder-bottom identify-code">
          <span class="input-title">验证码</span><br >
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="20">
              <el-input placeholder="请输入验证码"/>
            </el-col>
            <el-col :span="4" class="text_center">
              <span class="input-title get-code" @click="getTelCode">获取</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div v-else class="content-find main-find">
        <div class="boder-bottom">
          <span class="input-title">邮箱号</span><br >
          <el-input placeholder="请输入邮箱号"/>
        </div>
        <div class="boder-bottom identify-code">
          <span class="input-title">验证码</span><br >
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="20" >
              <el-input placeholder="请输入验证码"/>
            </el-col>
            <el-col :span="4" class="text_center">
              <span class="input-title get-code" @click="getMailCode">获取</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-button type="primary" @click.native.prevent="nextTo">下一步</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Find',
  data() {
    return {
      radio: '手机找回',
      type: 0
    }
  },
  methods: {
    onChange(e) {
      this.radio = e
      this.type = e === '手机找回' ? 0 : 1
    },
    goBack() {
      this.$router.push({ path: '/login' })
    },
    getTelCode() {
    },
    getMailCode() {
    },
    nextTo() {
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
    background-image: url(../../../assets/images/login-bg.png);
    background-size: cover;
    background-position: center;
    display: flex;
    display: -webkit-flex;
    justify-content: center;

    align-items: center;
    .content-box{
        border-radius:4px;
        width: 30%;
        padding: 0 20px 20px;
        background: #fff;
        .radio-group{
            width:90%;
            margin-left:5%;
            .radio-button{
                width: 50%;
            }
        }
        .el-icon-back{
            font-size: 20px
        }
        h3{
            margin: 20px 0;
            text-align: center;
        }
        .content-find{
            padding: 25px 0;
            .boder-bottom{
                border-bottom:1px solid rgba(0,0,0,.1);
                .input-title{
                    font-size: 14px;
                    color: $light_gray;
                }
                .text_center{
                    text-align: center;
                    .get-code{
                        cursor: pointer;
                    }
                }
                .get-code::before{
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 20px;
                    vertical-align: middle;
                    background: rgba(0,0,0,.1);
                    margin: auto;
                    margin-right: 5px;
                }
            }
        }
        .identify-code{
            margin-top: 20px
        }
        .el-input__inner{
            padding: 0;
            border: none;
        }
        .el-button{
            width: 100%;
        }
        .el-radio-button__inner{
            width: 100%
        }
    }
  }
</style>
