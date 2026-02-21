<script setup></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
h1 {
  text-align: center;
}

nav {
  height: 37px;
}
</style>
