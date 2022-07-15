import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: './env/', // 环境变量配置目录
  base: './', // 公共路径配置，以当前的目录作为公共基础路径
  server: {
    watch: {
      usePolling: true, // 当你在windows上使用docker运行时开启
    },
    // 接口配置代理
    proxy: {
      '/api': {
        target: 'https://v.api.aa1.cn/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
