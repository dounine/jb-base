import axios from '../plugins/axios'
const request = axios.request
export default {
    async userInfo(token: string) {
        return request<API.UserInfoData>({
            url: `/user/info`,
            headers: {
                token
            }
        })
    }
}