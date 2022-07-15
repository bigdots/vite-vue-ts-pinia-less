
<script setup lang="ts">
import $http from '@/api/demo'


const enVariable = import.meta.env  // 引用环境变量
console.error(enVariable)
function handleApiRequest() {
  $http.musicRankingsDetails()
}
</script>

<template>
  <h1>首页</h1>
  <h2>{{ enVariable.VITE_SOME_KEY }}</h2>
  <router-link to="/demo">路由跳转示例</router-link>
  <div><button @click="handleApiRequest">点我体验发起请求</button></div>
</template>

<style>
</style>