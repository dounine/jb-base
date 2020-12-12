const port = 8081
module.exports = {
    devServer: {
        hot: true,
        port,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:3003",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
        before: require('./mock/mock.js')
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}