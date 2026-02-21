<script setup></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
    |
    <!-- ! Do not use the params here, even for testing it does not make any sense -->
    <!-- <RouterLink :to="{ name: 'PostDetails' }">Post Details</RouterLink> -->
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
