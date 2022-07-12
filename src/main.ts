import { createApp } from 'vue'
import App from './views/App.vue'
import $http from '../api/index'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

// 将api挂载到全局对象，在组件中可使用this.$http来调用
// app.config.globalProperties.$http = $http

app.use(router)
app.use(createPinia())
app.mount('#app')
