import axios from "../request"

//get
export const diarysGet = (data) => {
    return axios({
        url: "/diary",
        method: "get",
        data,
        config: {
            timeout: 10000
        }
    })
}
//日记投稿
export const addDiary = (data) => {
    return axios({
        url: "/addDiary",
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
