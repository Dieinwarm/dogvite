import axios from '../request';

//获取登录状态
export const validLogin = (data) => {
    return axios({
        url: "/login",
        method: "post",
        data,
        config: {
            timeout: 10000
        }
    })
}

//登录
export const Login = (data) => {
    return axios({
        url: "/login",
        method: "post",
        data: data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}

//获取语录
export const wordsList = (data) => {
    return axios({
        url: "/admin/getWords",
        method: "get",
        data,
        config: {
            timeout: 10000
        }
    })
}