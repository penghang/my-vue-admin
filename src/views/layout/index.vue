<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 头部 -->
    <div class="app-header">
      <i class="logo">logo</i>
      <hamburger :toggle-click="toggleSideBar" :is-active="!sidebarCollapse" class="hamburger-container"/>
      <breadcrumb class="breadcrumb-container"/>
    </div>
    <!-- 布局 -->
    <div class="app-content">
      <sidebar class="app-nav clearfix" />
      <div class="app-main">
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

export default {
  name: 'Layout',
  components: {
    Hamburger,
    Breadcrumb,
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

<style lang="scss">
$header_height: 60px;
$sidebar_width: 200px;
$sidebar_collapse_width: 65px;
.app-wrapper {
  height: 100%;
  padding-top: $header_height;
  .app-header {
    height: $header_height;
    margin-top: -$header_height;
    line-height: $header_height;
    vertical-align: middle;
    * {
      display: inline-block;
    }
    .logo {
      height: 100%;
      width: $sidebar_width;
      background: url(../../assets/logo.png) no-repeat center;
      background-size: contain;
      text-indent: -9999px;
    }
    .hamburger-container {
      height: 100%;
      width: 65px;
    }
  }
  .app-content {
    height: 100%;
    padding-left: $sidebar_width;
    .app-nav {
      float: left;
      width: $sidebar_width;
      height: 100%;
      margin-left: -$sidebar_width;
    }
    .app-main {
      height: 100%;
    }
  }
}
.app-wrapper.collapse {
  .app-header {
    .logo {
      width: $sidebar_collapse_width
    }
  }
  .app-content{
    padding-left: $sidebar_collapse_width;
    .app-nav {
      width: $sidebar_collapse_width;
      margin-left: -$sidebar_collapse_width;
    }
  }
}
.animation {
  .app-header {
    .logo {
      transition: width .35s ease-out;
    }
  }
  .app-content {
    transition: padding-left .35s ease-out;
    .app-nav {
      transition: width .35s ease-out, margin-left .35s ease-out;
    }
  }
}
</style>

