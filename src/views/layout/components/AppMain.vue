<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return []
      // return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  /*94 = header + tags-view = 60 +34 */
  min-height: calc(100vh - 94px);
  width: 100%;
  position: relative;
  overflow: hidden;
  border-left: 1px solid #cfd7e5;
  background: #fff;
}
</style>

