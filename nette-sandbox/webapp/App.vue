<template>
  <h1>{{ title }}</h1>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return { title: 'Hello Vue guys!' }
  },
}
</script>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
