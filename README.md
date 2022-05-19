# 🐶 舔狗的艺术

### 重构版说明
采用 element-Plus 2.x 版本，打包工具从 vue-cli 更换为 vite ，优化项目结构，去掉冗余代码  
重新整合 axios 实现请求前后拦截器，有利于后面开发后台管理的验证  
采用 element-Plus 的按需自动加载，不再手动引包  
更换成 ve3 的 <script setup> 语法糖用法，不用去写 setup() 函数和 return 一堆属性了

### 注意
使用 element-Plus 的按需自动加载，首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件
```
npm install -D unplugin-vue-components unplugin-auto-import
```

### 后端配合

你可以参考我用 tp6 写的后端自己录一个后端，也可以直接使用我的 tp6 后端项目  
前端打包后放置在 tp6 项目的 public 目录里即可  
后端项目地址：https://github.com/Dieinwarm/dogart

### 🙏最后

代码很垃圾，请多包涵，前端和 PHP 后端都是自学，如有使用不当的地方，欢迎指正