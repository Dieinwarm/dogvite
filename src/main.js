import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import * as ElIconModules from "@element-plus/icons-vue";
//引入 ElMessage 样式，自动加载不会加载样式，坑啊
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';
//引入自定义样式
import "@/assets/base.css";

const app = createApp(App);

//全局注册 element-Plus 图标组件
Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key]);
});
app.use(router);
app.mount("#app");
