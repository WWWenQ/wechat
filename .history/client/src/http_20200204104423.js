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
        const { status } = err.response;
        if (status == 401) {
            alert("token过期，请重新登录！")
            localStorage.removeItem('wxpyqToken')
        }
        alert(error.response.data)
        return Promise.reject(error)
    }
)

export default axios;