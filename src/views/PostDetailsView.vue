<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)
</script>

<template>
  <div class="post-details">
    Hey
    <br />
    This is your params
    <b>
      {{ route.params.id }}
    </b>
    <!-- TODO: next we wanna aceess the component properties and send them as props  -->
  </div>
</template>

<style scoped>
.post-details {
  min-height: calc(100vh - 37px);
  background-color: lawngreen;
}
</style>
