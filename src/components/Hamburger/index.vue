<template>
  <el-button :class="isActive ? 'active': ''" type="text" class="btn-icon menu-toggle" @click="toggleClick">
    <svg-icon icon-class="menu" />
  </el-button>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.state.app.sidebarCollapse
    }
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style scoped>
.btn-icon {
  transform: rotate(0deg);
  transition: .38s;
  transform-origin: 50% 50%;
}

.btn-icon.active {
  transform: rotate(90deg);
}
</style>
