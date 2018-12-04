<template>
  <div class="tags-view-container">
    <el-tabs
      :value="current"
      :closable="true"
      class="multiple-page-control"
      type="card"
      @tab-click="handleClick"
      @edit="handleTabsEdit"
      @contextmenu.native="handleContextmenu">
      <el-tab-pane
        v-for="page in visitedViews"
        :key="page.name"
        :label="generateTitle(page.title)"
        :name="page.name"/>
    </el-tabs>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <template v-if="selectedTag.name !== 'Home'">
        <li @click="refreshSelectedTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>
        <li @click="closeSelectedTag(selectedTag)">{{ $t('tagsView.close') }}</li>
        <li @click="closeOthersTags(selectedTag)">{{ $t('tagsView.closeOthers') }}</li>
      </template>
      <li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane'
import { generateTitle } from '@/utils/i18n'

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    current() {
      return this.$route.name
    }
  },
  watch: {
    $route() {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.addViewTags()
  },
  methods: {
    generateTitle, // generateTitle by vue-i18n
    isActive(route) {
      return route.path === this.$route.path
    },
    addViewTags() {
      const { name } = this.$route

      if (name) {
        this.$store.dispatch('addView', this.$route)
      }
      return false
    },
    moveToCurrentTag() {
      // const tags = this.$refs.tag
      // this.$nextTick(() => {
      //   const tag = this.visitedViews.find(page => page.name === this.current)
      //   for (const tag of tags) {
      //     if (tag.to.path === this.$route.path) {
      //       this.$refs.scrollPane.moveToTarget(tag.$el)

      //       // when query is different then update
      //       if (tag.to.fullPath !== this.$route.fullPath) {
      //         this.$store.dispatch('updateVisitedView', this.$route)
      //       }

      //       break
      //     }
      //   }
      // })
    },
    refreshSelectedTag(view) {
      this.$store.dispatch('delCachedView', view).then(() => {
        const { fullPath } = view
        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath
          })
        })
      })
    },
    closeSelectedTag(view) {
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          const latestView = visitedViews.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags() {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    handleContextmenu(event) {
      let target = event.target
      let flag = false
      if (target.className.indexOf('el-tabs__item') > -1) flag = true
      else if (target.parentNode.className.indexOf('el-tabs__item') > -1) {
        target = target.parentNode
        flag = true
      }
      if (flag) {
        event.preventDefault()
        event.stopPropagation()
        this.visible = true
        // this.selectedTag = tag
        // const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
        this.left = event.clientX + 15 // 15: margin right
        this.top = event.clientY
        const tagName = target.getAttribute('aria-controls').slice(5)
        this.selectedTag = this.visitedViews.find(page => page.name === tagName)
      }
    },
    closeMenu() {
      this.visible = false
    },
    handleClick(tab) {
      // 找到点击的页面在 tag 列表里是哪个
      const page = this.visitedViews.find(page => page.name === tab.name)
      if (page) {
        const { name } = page
        this.$router.push({ name })
      }
    },
    /**
     * @description 点击 tab 上的删除按钮触发这里 首页的删除按钮已经隐藏 因此这里不用判断是 index
     */
    handleTabsEdit(tagName, action) {
      if (action === 'remove') {
        this.closeSelectedTag(this.visitedViews.find(page => page.name === tagName))
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bd_color: #cfd7e5;
.tags-view-container {
  height: 41px;
  width: 100%;
  .el-tabs--card>.el-tabs__header {
    border-bottom-color: $bd_color;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 1px solid $bd_color;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    .el-tabs__item {
      background-color: rgba(0,0,0,.03);
      border-left-color: $bd_color;
      color: #606266;
      &.is-active {
        background-color: #fff;
        border-bottom-color: #fff;
        color: #2f74ff;
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
