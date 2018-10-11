module.exports = {
	devServer: {
		"proxy": {
		    "/api": {
		    	target: "http://www.weather.com.cn",
		    	changeOrigin: true,
		    	pathRewrite: {
		    		"^/api": ""
		    	}
		    }
		}
	}
}