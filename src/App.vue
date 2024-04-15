<template>
  <SideMenu />
  <div class="content">
    <span style="color: red; position: absolute; top: 0px; left: 15px">
      {{ $route.fullPath }}
    </span>
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
