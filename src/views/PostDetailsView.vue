<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)
</script>

<template>
  <div class="post-details">
    Hey
    <br />
    This is your params {{ route.params.id }}
  </div>
</template>

<style scoped>
.post-details {
  min-height: calc(100vh - 37px);
  background-color: lawngreen;
}
</style>
