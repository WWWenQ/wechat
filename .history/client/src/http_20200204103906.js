import axios from "axios"


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