<template>
  <div class="container">
    <nav class="side-menu">
      <router-link
        class="side-menu__link"
        v-for="item in menuList"
        :key="item.name"
        :to="item.path"
      >
        <v-icon> {{ item.meta.icon }} </v-icon>
        {{ item.meta.menuTitle }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  computed: {
    menuList() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  display: flex;
  height: 100%;
  width: auto;
  padding: 20px;

  .side-menu {
    display: flex;
    flex-direction: column;
    height: inherit;
    background-color: #3759c2;
    width: 260px;
    border-radius: 1rem;
    padding-top: 1rem;

    &__link {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      padding: 1rem;
      color: #fff;
      font-size: 1.2rem;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        background-color: #ffffff5b;
      }
    }
  }
}
</style>
