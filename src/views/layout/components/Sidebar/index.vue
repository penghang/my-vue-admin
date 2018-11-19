<template>
  <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="sidebarCollapse"
      mode="vertical"
    >
      <sidebar-item v-for="route in permissionRouters" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  <!-- </el-scrollbar> -->
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permissionRouters',
      'sidebarCollapse'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .scrollbar-wrapper {
    overflow-x: hidden!important;
    .el-menu {
      border-right: 0;
      background: transparent;
    }
    .el-menu-item {
      &.is-active,
      &:hover {
        background: hsla(0,0%,100%,.5);
        color: #2f74ff;
      }
    }
    .el-submenu__title {
      &.is-active,
      &:hover {
        i {
          color: #2f74ff;
        }
        background: hsla(0,0%,100%,.5);
        color: #2f74ff;
      }
    }
  }
</style>
