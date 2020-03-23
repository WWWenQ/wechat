import axios from "axios"
// 请求拦截
axios.interceptors.request.use(config => {
    if (localStorage.wxpyqToken) {
        config.headers.Authorization = localStorage.wxpyqToken
    }
    return config
},
    error => {
    return Promise.reject(error)
}
)







// 响应拦截
axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        alert(error.response.data)
        return Promise.reject(error)
    }
)

export default axios;