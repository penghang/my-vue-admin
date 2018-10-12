
<template>
  <a v-if="isExternalLink(to)" ref="noopener" :href="to" target="_blank">
    <slot/>
  </a>
  <router-link v-else :to="to">
    <slot/>
  </router-link>
</template>

<script>
import { validateURL } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isExternalLink(routePath) {
      return validateURL(routePath)
    }
  }
}
</script>
