<template>
  <el-dropdown class="international" size="medium" @command="changeLanguage">
    <el-button type="text" class="btn-icon">
      <svg-icon :icon-class="cls" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    cls() {
      return `language-${this.language}`
    },
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
    }
  }
}
</script>
