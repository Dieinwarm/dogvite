const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
        extensions: [".ts", ".js", ".vue"],
        // 配置路径别名
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@view": path.resolve(__dirname, "./src/components/view"),
            "@api": path.resolve(__dirname, "./src/request/apis"),
            "@adminApi": path.resolve(__dirname, "./src/request/adminApis"),
        },
    },
    //分包打包，防止单体文件太大
    build: {
        sourcemap: false,
        minify: "terser",
        chunkSizeWarningLimit: 1500,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
                chunkFileNames: (chunkInfo) => {
                    const facadeModuleId = chunkInfo.facadeModuleId
                        ? chunkInfo.facadeModuleId.split("/")
                        : [];
                    const fileName =
                        facadeModuleId[facadeModuleId.length - 2] || "[name]";
                    return `js/${fileName}/[name].[hash].js`;
                },
            },
        },
    },
});
