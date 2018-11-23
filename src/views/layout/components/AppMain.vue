<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- include属性表示只有name属性会被缓存 -->
      <keep-alive :include="cachedViews">
        <!-- 改变router-view中的key来刷新组件 -->
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
      return this.$store.state.tagsView.cachedViews
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

