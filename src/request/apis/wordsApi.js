import axios from "../request"

//获取语录
export const wordsGet = (data) => {
    return axios({
        url: "/words",
        method: "get",
        data,
        config: {
            timeout: 10000
        }
    })
}
//舔一舔提交
export const wordsLick = (data) => {
    return axios({
        url: "/wordslick",
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
//语录投稿
export const addWords = (data) => {
    return axios({
        url: "/addWords",
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
