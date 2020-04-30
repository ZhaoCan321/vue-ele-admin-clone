<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
  </div>
</template>

<script>
import SwitchRole from './components/SwitchRole';

export default {
  name: "PagePermission",
  components: { SwitchRole },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: "/permission/index?" + +new Date()})
    }
  }
}
</script>