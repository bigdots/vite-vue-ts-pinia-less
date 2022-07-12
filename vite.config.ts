import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// vuex  +  axios + vue-router  + ts

// ├── index.html
// ├── main.js
// ├── api
// │   └── ... # 抽取出API请求
// ├── components
// │   ├── App.vue
// │   └── ...
// └── store
//     ├── index.js          # 我们组装模块并导出 store 的地方
//     ├── actions.js        # 根级别的 action
//     ├── mutations.js      # 根级别的 mutation
//     └── modules
//         ├── cart.js       # 购物车模块
//         └── products.js
