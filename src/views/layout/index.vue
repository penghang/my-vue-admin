<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 头部 -->
    <div class="app-header">
      <i class="logo">logo</i>
      <hamburger :toggle-click="toggleSideBar" :is-active="!sidebarCollapse" class="hamburger-container"/>
      <breadcrumb class="breadcrumb-container"/>

      <div style="flex:1"/>
      <headersetting />
      <themePicker />
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

<style lang="scss">
$header_height: 60px;
$sidebar_width: 200px;
$sidebar_collapse_width: 65px;
.app-wrapper {
  height: 100%;
  background-color: #fff;
  padding-top: $header_height;
  .app-header {
    display: flex;
    display: -webkit-flex;
    height: $header_height;
    margin-top: -$header_height;
    line-height: $header_height;
    position: fixed;
    top: $header_height;
    z-index: 999;
    background-color: #EBF1F6;
    width:100%;
    align-items: center;
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
      width: 50px;
      text-align: center;
      transform: translateY(3px);
    }
  }
  .app-content {
    height: 100%;
    padding-left: $sidebar_width;
    .app-sidebar {
      float: left;
      width: $sidebar_width;
      // height: 100%;
      margin-left: -$sidebar_width;
      overflow-y: auto;
      overflow-x: hidden;
      position:fixed;
      top:$header_height;
      bottom: 0;
    }
    .app-sidebar::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    .app-sidebar::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .app-sidebar::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }
    .app-main-wrapper {
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
    .app-sidebar{
      width:65px;
      margin-left: -65px;
      .el-icon-arrow-right{
        display: none;
      }
    }
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

