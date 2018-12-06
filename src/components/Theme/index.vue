<template>
  <div class="theme">
    <el-tooltip :content="theme" effect="dark" placement="bottom">
      <el-button type="text" class="btn-icon" @click="dialogVisible = true">
        <svg-icon icon-class="sketch" />
      </el-button>
    </el-tooltip>
    <el-dialog :visible.sync="dialogVisible" :append-to-body="true" :title="theme" width="600px">
      <theme-list style="margin-top: -25px;"/>
    </el-dialog>
  </div>
</template>

<script>
import ThemeList from './components/ThemeList'
export default {
  components: {
    ThemeList
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    theme() {
      return this.$t('navbar.theme')
    }
  }
}
</script>
<style scoped>
.theme {
  display: inline-block;
}
</style>

