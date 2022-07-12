
<template>
  <HelloWorld :msg="store.counter" />
  <div><button @click="handleIncrement">+1</button></div>

  <div>doubleCount:{{ store.doubleCount }}</div>
  <router-link to="/About">Go to About</router-link>
</template>

<script  setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
// import { testStore } from '../store/modules/test'
import { testStore } from '../store/modules/test'

const store = testStore()

function handleIncrement() {



  // 三种修改方式均可
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
