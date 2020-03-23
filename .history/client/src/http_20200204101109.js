import axios from "axios"

axios.interceptors.response.use(
    response => {
        return response
    }
)

export default axios;