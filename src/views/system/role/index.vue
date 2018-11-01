<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input :placeholder="$t('table.rolename')" v-model="listQuery.rolename" clearable style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
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
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.rolename')" align="center" prop="rolename" />
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
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :page-sizes="[10,20,30,50]" :page-size="listQuery.limit" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>
<script>
import { roleList } from '@/api/role'
import { pagingMixin } from '@/mixins/table'
import waves from '@/directive/waves' // 水波纹指令
export default {
  name: 'Role',
  directives: {
    waves
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
      total: null,
      listLoading: false,
      list: [],
      listQuery: {
        rolename: ''
      }
    }
  },
  methods: {
    listLoad() {
      this.listLoading = true
      roleList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total
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
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    }
  }
}
</script>

