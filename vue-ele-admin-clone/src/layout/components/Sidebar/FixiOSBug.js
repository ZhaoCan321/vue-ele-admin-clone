export default {
  computed: {
    device() {
      // return this.$store.state.app.device
      return false
    }
  },
  mounted() {
    this.fixbugInIOS()
  },
  methods: {
    fixbugInIOS() {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = e => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  }
}
