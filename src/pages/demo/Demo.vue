
<template>
  <section>
    <h3>点体验pinia状态管理:</h3>
    <button @click="handleIncrement">点击改变状态{{ store.counter }}</button>
    <p>pinia-getter计算双倍值:{{ store.doubleCount }}</p>
  </section>

  <section class="less">
    <p>
      less样式示例：
    </p>
    <button>less样式设置示例</button>
  </section>

  <section>
    <p>ajax请求示例：</p>
    <button @click="handleApiRequest">点我发起请求</button>

  </section>
</template>

<script  setup lang="ts">
import { demoStore } from '@/store/demo'
import $http from '@/api/demo'

const store = demoStore()
const handleApiRequest = async () => {
  const res = await $http.queryword()
  console.debug(res)
}


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
div {
  margin: 40px auto
}

.less {
  button {
    color: #42b983;
  }
}
</style>

