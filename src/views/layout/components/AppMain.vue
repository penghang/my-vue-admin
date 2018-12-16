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
