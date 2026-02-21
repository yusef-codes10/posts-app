<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="${name: 'About'}">About</router-link>
  </nav>
  <RouterView />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
