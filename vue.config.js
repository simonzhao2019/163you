module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 75, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        // 匹配所有以 '/api'开头的请求路径
        target: "http://localhost:4000", // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: {
          // 重写路径: 去掉路径中开头的'/api'
          "^/api": ""
        }
      }
    }
  }
};