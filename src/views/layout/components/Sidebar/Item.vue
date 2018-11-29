<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    iconType: {
      type: String,
      default: 'i'
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { iconType, icon, title } = context.props
    const vnodes = []

    if (icon) {
      if (iconType === 'i') {
        vnodes.push(<i class={icon}/>)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
