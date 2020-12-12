import axios from "axios"

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || "",
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
// }
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'

const _axios = axios //.create(config)

_axios.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

_axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default {
    install: function (app: any, options: any) {
        app.config.globalProperties.$axios = _axios
        app.config.globalProperties.$translate = (key: any) => {
            return key
        }
    }
}