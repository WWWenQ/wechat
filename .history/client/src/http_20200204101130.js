import axios from "axios"

axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        alert(error.response.data)
    }
)

export default axios;