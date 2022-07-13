
<template>
  <div><button @click="handleIncrement">点击体验pinia状态管理:{{ store.counter }}</button></div>
  <div>pinia-getter计算双倍值:{{ store.doubleCount }}</div>

  <div class="less"><button>less样式设置示例</button></div>
</template>

<script  setup lang="ts">
import { demoStore } from '../../store/demo'
const store = demoStore()


function handleIncrement() {
  // 三种方式修改状态均可
  // store.counter ++ 

  // store.$patch((state)=>{
  //   state.counter = state.counter + 2
  // })

  // store.$patch({
  //   counter: store.counter + 3,
  // })

  // action
  store.increment()
}

</script>

<style lang="less" scoped>

  div{
    margin: 40px auto
  }

  .less {
    button {
      color: #42b983;
    }
  }
</style>

