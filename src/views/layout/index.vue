<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 头部 -->
    <div class="app-header">
      <div class="app-header-left">
        <i class="logo">logo</i>
        <hamburger />
        <breadcrumb />
      </div>
      <div class="app-header-right">
        <headersetting />
        <theme />
        <size />
        <lang-select class="set-language" />
      </div>
    </div>
    <!-- 布局 -->
    <div class="app-content">

      <sidebar class="app-sidebar clearfix" />
      <div class="app-main-wrapper">
        <tags-view/>
        <app-main/>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { Sidebar, AppMain, TagsView } from './components'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import Headersetting from '@/components/HeaderSetting'
import Theme from '@/components/Theme'
import Size from '@/components/Size'
import LangSelect from '@/components/LangSelect'
export default {
  name: 'Layout',
  components: {
    Hamburger,
    Breadcrumb,
    Headersetting,
    Theme,
    Size,
    Sidebar,
    AppMain,
    TagsView,
    LangSelect
  },
  data() {
    return {
      searchActive: false
    }
  },
  computed: {
    animation() {
      return this.$store.state.app.animation
    },
    sidebarCollapse() {
      return this.$store.state.app.sidebarCollapse
    },
    classObj() {
      return {
        'animation': this.animation,
        'collapse': this.sidebarCollapse,
        'search-active': this.searchActive
      }
    }
  }
}
</script>
<style lang="scss">
// 注册主题
@import '@/styles/theme/register.scss';
</style>
