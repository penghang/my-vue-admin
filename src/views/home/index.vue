<template>
  <div>
    <el-button style="margin:0 0 20px 20px;" type="primary" icon="document" @click="handleDownload">{{ $t('excel.export') }} Excel</el-button>
    <div v-drag style="position:absolute;top:30px;left:0">我可以拖拽</div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  directives: {
    'drag': {
      inserted: function(el, binding, vnode) {
        const oDiv = el
        oDiv.onmousedown = function(e) {
          const l = e.clientX - oDiv.offsetLeft
          const t = e.clientY - oDiv.offsetTop
          document.onmousemove = function(e) {
            oDiv.style.left = e.clientX - l + 'px'
            oDiv.style.top = e.clientY - t + 'px'
          }
          oDiv.onmouseup = function() {
            document.onmousemove = null
            oDiv.onmouseup = null
          }
        }
      }
    }
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleDownload() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const data = [[0, '标题1', 'linlei', 3029, '2018-11-15'],
          [0, '标题1', 'linlei', 3029, '2018-11-15'],
          [0, '标题1', 'linlei', 3029, '2018-11-15']]
        excel.export_json_to_excel({
          /* 表头 必填*/
          header: tHeader,
          /* 具体数据 必填*/
          data,
          /* 非必填*/
          filename: 'excel-list',
          autoWidth: true,
          bookType: 'xlsx'
        })
      })
    }
  }
}
</script>
