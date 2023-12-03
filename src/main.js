import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import * as echarts from 'echarts';

const app = createApp(App)
//设置全局
app.config.globalProperties.$axios = axios
app.config.globalProperties.$echarts = echarts

app.use(store).use(ElementPlus).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//解决轮播图，表格浏览器修改窗口大小报错问题
//ResizeObserver loop limit exceeded
window.ResizeObserver = class _NewResizeObserver extends ResizeObserver {
    constructor(callback) {
        super(() => window.requestAnimationFrame(() => callback.apply(this, arguments)));
    }
}