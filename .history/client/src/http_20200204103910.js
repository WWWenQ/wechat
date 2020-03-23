import axios from "axios"

// 响应
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