import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

import router from './router';
import App from './App.vue';

const app = createApp(App);
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
  app.component(key, component);
});

app.use(router);
app.use(ElementPlus);

app.mount('#app');
