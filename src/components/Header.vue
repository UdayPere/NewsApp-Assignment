<template>
  <div class="mb-8">
    <nav class="header-fixed py-3">
      <div class="container flex justify-between items-center">
        <router-link to="/" class="logo font-semibold mb-0">
          News API
        </router-link>
        <div class="flex justify-between items-center">
          <span class="font-semibold">Top News</span>
          <span class="mx-4">Bookmarks</span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'Header-component',
  methods: {}
}
</script>
<style scoped lang="scss">
.header-fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  color: var(--whiteColor);
  background-color: var(--lightblueColor);
  font-size: 1rem;
  .logo {
    color: var(--whiteColor);
    transition: var(--whiteColor);
  }
}
</style>
