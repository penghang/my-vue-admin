/**
 * 分页查询混入
 * 组件必须有一个listLoad方法用来加载列表数据
 */
const pagingMixin = {
  data: function() {
    return {
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  /**
   * 组件挂载自动查询
   */
  created() {
    this.listLoad()
  },
  methods: {
    /**
     * 处理查询
     */
    handleFilter() {
      this.listQuery.page = 1
      this.listLoad()
    },
    /**
     * 处理分页大小改变
     * @param {number} value - 分页大小
     */
    handleSizeChange(value) {
      this.listQuery.page = 1
      this.listQuery.limit = value
      this.listLoad()
    },
    /**
     * 处理页码改变
     * @param {number} value - 页码
     */
    handleCurrentChange(value) {
      this.listQuery.page = value
      this.listLoad()
    }
  }
}

export {
  pagingMixin
}
