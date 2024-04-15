<template>
  <SideMenu />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
export default {
  name: "App",
  components: {
    SideMenu,
  },
};
</script>
<style scoped lang="scss">
.content {
  margin-left: 300px;
  padding: 2rem;
}
</style>
