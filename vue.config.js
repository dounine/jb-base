const port = 8081
module.exports = {
    devServer: {
        hot: true,
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            "/api": {
                target: `http://localhost:${port}`,
                changeOrigin: true,
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