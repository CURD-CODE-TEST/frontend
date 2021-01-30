module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",   // 要请求的后台地址
                changeOrigin: true,    // 是否跨域
                logLevel: "debug",
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}