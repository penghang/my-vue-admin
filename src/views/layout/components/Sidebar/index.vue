<template>
  <el-scrollbar ref="scroll" wrap-class="scrollbar-wrapper" >
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="sidebarCollapse"
      mode="vertical"
      class="app-left-menu"
      @open="updateScroll"
      @close="updateScroll"
    >
      <sidebar-item v-for="route in permissionRouters" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
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
  },
  methods: {
    updateScroll: function() {
      // 手动触发一下scroll的更新
      setTimeout(() => {
        this.$refs.scroll.update()
      }, 300)
    }
  }
}
</script>
