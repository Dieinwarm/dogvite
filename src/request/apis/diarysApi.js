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
//post
export const mokePost = (data) => {
    return axios({
        url: "/api/xxxx",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
