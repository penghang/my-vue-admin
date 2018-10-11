<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <sidebar class="sidebar-container"/> -->
    <div class="main-container">
      Hello
      <!-- <navbar/>
      <tags-view/>
      <app-main/> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  }
}
</script>
