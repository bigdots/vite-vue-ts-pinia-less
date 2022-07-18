
<script setup lang="ts">
import $http from '@/api/demo'


const enVariable = import.meta.env  // 引用环境变量
function handleApiRequest() {
  $http.queryword()
}
</script>

<template>

  <h1>首页</h1>
  <section>
    <h3>环境变量：</h3>
    <p>{{ enVariable.VITE_SOME_KEY }}</p>
  </section>
  <section>
    <h3>路由跳转演示：</h3>
    <router-link to="/demo">点击跳转</router-link>
  </section>
</template>

<style>
</style>