import axios from "axios"

axios.interceptors.response.use(
    response => {
        return response
    },
    err => {
        alert(err)
    }
)

export default axios;