<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 头部 -->
    <div class="app-header">
      <i class="logo">logo</i>
      <hamburger :toggle-click="toggleSideBar" :is-active="!sidebarCollapse" class="hamburger-container"/>
      <breadcrumb class="breadcrumb-container"/>
      <div class="app-header-right">
        <headersetting />
        <themePicker />
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
import themePicker from '@/components/themePicker'
export default {
  name: 'Layout',
  components: {
    Hamburger,
    Breadcrumb,
    Headersetting,
    themePicker,
    Sidebar,
    AppMain,
    TagsView
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
  },
  methods: {
    toggleSideBar() {
      this.$store.commit('toggleSideBar')
    }
  }
}
</script>
