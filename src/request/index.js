// http/index.js
import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";
//创建axios的一个实例
var instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, //接口统一域名
    timeout: 6000, //设置超时
    headers: {
        "Content-Type": "application/json;charset=UTF-8;",
    },
});
let loading;
//正在请求的数量
let requestCount = 0;
//显示loading
const showLoading = () => {
    if (requestCount === 0 && !loading) {
        loading = ElLoading.service({
            background: 'rgba(255,255,255,0)',
            lock: true
        });
    }
    requestCount++;
};
//隐藏loading
const hideLoading = () => {
    requestCount--;
    if (requestCount == 0) {
        loading.close();
    }
};

//请求拦截器
instance.interceptors.request.use(
    (config) => {
        showLoading();
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        const token = window.localStorage.getItem("token");
        token && (config.headers.Authorization = token);
        //若请求方式为post，则将data参数转为JSON字符串
        if (config.method === "POST") {
            config.data = JSON.stringify(config.data);
        }
        return config;
    },
    (error) =>
        // 对请求错误做些什么
        Promise.reject(error)
);

//响应拦截器
instance.interceptors.response.use(
    (response) => {
        hideLoading();
        //响应成功
        return response.data;
    },
    (error) => {
        console.log(error);
        //响应错误
        console.log("拦截器报错");
        if (error.response && error.response.status) {
            const status = error.response.status;
            let message = "";
            switch (status) {
                case 400:
                    message = "请求错误";
                    break;
                case 401:
                    message = "请求错误";
                    break;
                case 404:
                    message = "请求地址出错";
                    break;
                case 408:
                    message = "请求超时";
                    break;
                case 500:
                    message = "服务器内部错误!";
                    break;
                case 501:
                    message = "服务未实现!";
                    break;
                case 502:
                    message = "网关错误!";
                    break;
                case 503:
                    message = "服务不可用!";
                    break;
                case 504:
                    message = "网关超时!";
                    break;
                case 505:
                    message = "HTTP版本不受支持";
                    break;
                default:
                    message = "请求失败";
            }
            ElMessage.error(message);
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default instance;
