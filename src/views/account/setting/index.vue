<template>
  <div>
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane label="基本设置" name="baseSetting">
        <el-row >
          <el-col :span="11">
            <h3 class="setting-title">基本设置</h3>
            <el-form ref="ruleForm2" status-icon class="demo-ruleForm">
              <el-col :span="20">
                <el-form-item>
                  <p>用户</p>
                  <el-input :value="user" disabled/>
                </el-form-item>
                <el-form-item>
                  <p>昵称</p>
                  <el-input v-model="nickname"/>
                </el-form-item>
                <el-form-item>
                  <p>个人简介</p>
                  <el-input :rows="6" v-model="synopsis" type="textarea" autosize/>
                </el-form-item>
              </el-col>
            </el-form>
            <el-button size="small" type="primary" class="btn-click">更新基本信息</el-button>
          </el-col>
          <el-col :span="13">
            <div class="user-img">
              <p>头像</p>
              <img src="../../../assets/images/user-wxz.png" alt="">
              <div style="margin-top:20px">
                <el-upload
                  :limit="3"
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                >
                  <div style="margin-left:11.5px">
                    <el-button size="small" type="primary"><i class="el-icon-upload el-icon--right"/>点击上传</el-button>

                  </div>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
                </el-upload>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="安全设置" name="safeSetting">
        <h3 class="setting-title">安全设置</h3>
        <div v-for="(item,index) in breadList" :key="index" >
          <SettingBread :text1="item.text1" :text2="item.text2 | switchTel" :type="item.type" :revise="revise.bind(this,item.type)" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      :visible.sync="dialogVisible"
      title="修改密码"
      width="33%">
      <el-form label-position="right" label-width="90px" >
        <el-form-item label="旧密码">
          <el-input v-model="oldPwd"/>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="newPwd"/>
        </el-form-item>
        <el-form-item label="确认新密码">
          <el-input v-model="againNewPwd"/>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { VueCropper } from 'vue-cropper'
import SettingBread from '@/components/SettingBread/index'
import reg from '@/utils/reg'
import { getSettingInfo } from '@/api/settingInfo'
export default {
  name: 'PageSetting',
  components: {
    VueCropper,
    SettingBread
  },
  filters: {
    switchTel(value) {
      if (!value) return ''
      if (reg.tel.test(value.trim())) {
        var dh = value.replace(reg.switchText, '$1****$2')
        return dh
      } else {
        return value
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      user: this.$store.state.user.username,
      nickname: '',
      synopsis: '',
      activeName: 'baseSetting',
      breadList: [
        { text1: '账号密码', text2: '密码强度', type: 0 },
        { text1: '绑定手机', text2: '未绑定', type: 1 },
        { text1: '绑定邮箱', text2: '未绑定', type: 2 }
      ],
      oldPwd: '',
      newPwd: '',
      againNewPwd: ''
    }
  },
  created() {
    getSettingInfo().then(({ data }) => {
      this.breadList[0].text2 = `密码强度:${data.strength}`
      this.breadList[1].text2 = data.tel
      this.breadList[2].text2 = data.mail
      this.nickname = data.nickname
      this.synopsis = data.synopsis
    })
  },
  methods: {
    revise(e) {
      this.dialogVisible = true
    }
  }
}
</script>
<style lang='scss' scoped>
    h3,p{
        padding: 0;
        margin: 0;
    }

    .el-tabs__nav-wrap::after{
        background-color:transparent;
    }
    .setting-title{
        height: 40px;
        line-height: 40px;
    }
    .user-img{
        margin: 80px 0 0 70px;
        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 1px solid rgba(0,0,0,.2);
            padding: 8px
        }
    }

    .el-form-item__label{
        font-weight: 300
    }

    .setting-revise{
        cursor:pointer;
    }

    .btn-click{
        padding:10px 35px;
        // margin-top: 20px;
    }
    .el-dialog{
        .el-dialog__header{
            padding: 0 !important;
        }
    }

</style>
