<template>
  <div class="app-screen">
    <div :class="classObj" class="app-wrapper app-layout">
      <!-- 头部 -->
      <div class="app-header app-layout">
        <i class="logo">logo</i>
        <hamburger />
        <breadcrumb />
        <headersetting />
        <theme class="can-hover" />
        <size class="can-hover" />
        <lang-select class="can-hover set-language" />
      </div>
      <!-- 布局 -->
      <div class="app-body app-layout">
        <sidebar class="app-sidebar" />
        <div class="app-main-wrapper app-layout">
          <tags-view/>
          <app-main/>
          <footer class="app-footer">
            <div class="antd-pro-components-global-footer-index-copyright">Copyright <svg-icon icon-class="copyright" /> 2018 兴民智通软件部</div>
          </footer>
        </div>
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
