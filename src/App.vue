

<template>
  <section>
    单页面公共部分
  </section>
  <router-view></router-view>
</template>

<script  setup lang="ts">

</script>

<style>
section:nth-child(odd) {
  background: lightpink;
}

section:nth-child(even) {
  background: lightcyan;
}
</style>
