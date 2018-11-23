<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" v-if="item.title" :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{ generateTitle(item.title) }}</span>
        <router-link v-else :to="item.path">{{ generateTitle(item.title) }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
import { generateTitle } from '@/utils/i18n'
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      const { path } = this.$route
      const matched = []
      this.$route.matched.forEach(item => {
        if (item.name && item.name !== 'home') {
          const toPath = pathToRegexp.compile(item.path)
          matched.push({
            path: toPath(path),
            redirect: item.redirect,
            title: item.meta.title
          })
        }
      })
      this.levelList = matched
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-breadcrumb{
    .el-breadcrumb__item{
      line-height: 60px;
    }
  }
</style>
