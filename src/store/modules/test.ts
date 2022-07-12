import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const testStore = defineStore('test', {
  // other options...
  state: () => {
    return {
      counter: 1,
    }
  },
  getters: {
    doubleCount(state) {
      return state.counter * 2
    },
  },
  // 业务操作+异步操作
  actions: {
    increment() {
      this.counter++
    },
  },
})
