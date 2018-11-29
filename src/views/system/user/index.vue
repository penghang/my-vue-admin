<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input :placeholder="$t('table.username')" v-model="listQuery.username" clearable style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <el-button v-waves class="filter-item" type="primary" @click="dialogTableVisible = true" >＋新增</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;">
      <el-table-column :label="$t('table.id')" align="center" width="65">
        <template slot-scope="scope">
          <span>{{ (scope.$index+1)+(listQuery.page-1)*listQuery.limit }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.username')" align="center" prop="username" width="100" />
      <el-table-column :label="$t('table.realname')" align="center" prop="realname" width="150" />
      <el-table-column :label="$t('table.address')" align="center" prop="address" />
      <el-table-column :label="$t('table.status')" align="center" width="80" >
        <template slot-scope="scope">
          <div class="pointer" @click="handleChangeStatus(scope)">
            <el-tag :type="scope.row.lock | statusFilter">{{ scope.row.lock | statusText }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">

          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <!-- <el-button type="warning" size="mini" @click="restPwd(scope.row)">{{ '重置密码' }}</el-button> -->
          <el-button type="danger" size="mini" @click="handleDelete(scope)">{{ $t('table.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30,50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
    <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" :before-close="closeDia" title="新增用户" @dragDialog="handleDrag">
      <el-row>
        <el-col :span="12">
          <el-form ref="formLeft" :label-position="'right'" :model="formLabelAlign" label-width="80px" >
            <el-form-item label="登录账号">
              <el-input v-model="formLabelAlign.loginUser"/>
            </el-form-item>
            <el-form-item label="真实姓名">
              <el-input v-model="formLabelAlign.realName"/>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="formLabelAlign.contactWay"/>
            </el-form-item>

            <el-form-item v-if="restaurants.length>0?false:true" label="密码">
              <el-input v-model="formLabelAlign.userPwd"/>
            </el-form-item>

            <el-form-item v-else label="密码">
              <el-autocomplete
                v-model="formLabelAlign.userPwd"
                :fetch-suggestions="querySearch"
                popper-class="my-autocomplete"
                type="password"
                @select="handleSelect"
              >
                <template slot-scope="{ item }">
                  <div class="name">{{ item.value }}</div>
                </template>
              </el-autocomplete>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-form ref="formRight" :label-position="'right'" :model="formLabelAlign" label-width="80px">
            <el-form-item label="所属角色">
              <el-select v-model="formLabelRight.realName" placeholder="请选择角色">
                <el-option v-for="(item,index) in subordinateRoleList" :key="index" :label="item.name" :value="item.value"/>
              </el-select>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="formLabelRight.mail"/>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="formLabelRight.confirmPwd"/>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="16">
          <el-form ref="formBottom" :label-position="'right'" :model="formLabelBottom" label-width="80px">
            <el-form-item label="简介">
              <el-input :rows="6" v-model="formLabelBottom.synopsis" :autosize="{ minRows: 2, maxRows: 4}" type="textarea"/>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="headleCancel">取 消</el-button>
        <el-button type="primary" @click="submitForm('formLeft','formRight')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { userList } from '@/api/user'
import { pagingMixin } from '@/mixins/table'
import waves from '@/directive/waves' // 水波纹指令
import elDragDialog from '@/directive/el-dragDialog' // 可拖动弹窗
export default {
  name: 'User',
  directives: {
    waves,
    elDragDialog
  },
  filters: {
    statusFilter(status) {
      return status ? 'success' : 'danger'
    },
    statusText(status) {
      return status ? '正常' : '锁定'
    }
  },
  mixins: [pagingMixin],
  data() {
    return {
      isEidt: false, // 是否编辑
      formLabelAlign: {
        loginUser: '',
        realName: '',
        contactWay: '',
        userPwd: ''
      },
      formLabelRight: {
        realName: '',
        mail: '',
        confirmPwd: ''
      },
      formLabelBottom: {
        synopsis: ''
      },
      subordinateRoleList: [
        { name: '请选择角色', value: '0' },
        { name: '业务部门_转发', value: '1' },
        { name: '普通用户', value: '2' },
        { name: '部门_超管', value: '3' },
        { name: '数据管理员', value: '4' },
        { name: 'IT', value: '5' },
        { name: '管理员', value: '6' },
        { name: 'test', value: '7' },
        { name: '超管', value: '8' }
      ],
      // restaurants: [{ 'value': '三全鲜食（北新泾店）' }],
      restaurants: [], // 密码下拉提示
      total: null,
      listLoading: false,
      dialogTableVisible: false,
      list: [],
      listQuery: {
        username: ''
      }
    }
  },
  mounted() {

  },
  methods: {

    restForm() {
      this.formLabelAlign = {
        loginUser: '',
        realName: '',
        contactWay: '',
        userPwd: ''
      }
      this.formLabelRight = {
        realName: '',
        mail: '',
        confirmPwd: ''
      }
      this.formLabelBottom = {
        synopsis: ''
      }
    },
    // 关闭弹框回掉
    closeDia(done) {
      this.isEidt = false
      this.restForm()
      done()
    },
    // 点击弹框取消事件
    headleCancel() {
      this.dialogTableVisible = false
      this.isEidt = false
      this.restForm()
    },
    // 点击弹框确认事件
    submitForm(formName1, formName2) {
      // console.log(this.list)
      if (!this.isEidt) {
        const o = {
          address: '武汉市区',
          age: 26,
          id: 1,
          lock: false,
          realname: 'linlei1111',
          sex: 1,
          username: 'linlei'

        }
        this.list.unshift(o)
      } else {
        // alert('编辑页面')
        this.isEidt = false
      }
      this.dialogTableVisible = false
      this.restForm()
      // this.$refs[formName1].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    // 重置密码
    restPwd(row) {
      // this.$message({
      //   message: '操作成功',
      //   type: 'success'
      // })
      this.$confirm('确认重置密码？',
        { confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning' })
        .then(_ => {

        })
        .catch(_ => {})
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect(item) {
      // console.log(item)
    },
    handleDrag() {
      // console.log('w') // 拖动弹窗事件
    },
    listLoad() {
      this.listLoading = true
      userList(this.listQuery).then(({ data }) => {
        this.list = data.list
        this.total = data.total
        this.listLoading = false
      })
    },
    handleChangeStatus(scope) {
      // row.lock = !row.lock
      scope.row.lock = !scope.row.lock
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    },
    handleUpdate(row) {
      this.dialogTableVisible = true
      this.isEidt = true
      // this.$message({
      //   message: '操作成功',
      //   type: 'success'
      // })
    },
    handleDelete(e) {
      this.list.splice(e.$index, 1)
    }
  }
}
</script>
<style lang='scss' scoped>
  .el-select.el-select--medium {
    width: 100%;
  }
  .el-autocomplete{
    width: 100%;
  }
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 5px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>

