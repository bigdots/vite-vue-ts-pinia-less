<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: number }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

</template>

<style lang="less" scoped>
h1 {
  color: #42b983;
}


</style>
