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

//获取日记
export const diaryList = (data) => {
    return axios({
        url: "/admin/getDiarys",
        method: "get",
        data,
        config: {
            timeout: 10000
        }
    })
}

//修改语录审核状态
export const changeWordsState = (data) => {
    return axios({
        url: "/admin/changeWordsState",
        method: "post",
        data: data,
        config: {
            timeout: 10000
        }
    })
}

//修改日记审核状态
export const changeDiaryState = (data) => {
    return axios({
        url: "/admin/changeDiaryState",
        method: "post",
        data: data,
        config: {
            timeout: 10000
        }
    })
}