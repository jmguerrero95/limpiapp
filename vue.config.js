const fs = require('fs')
//Vue.config.silent = true
module.exports = {
    devServer: {
    	https: {
          key: fs.readFileSync('./limpi_app_key.pem'),
          cert: fs.readFileSync('./limpi_app.crt'),
        },
        port: 80,
        public: 'https://limpi.app',
        disableHostCheck: true,
        //port: 80,
        //public: '3.15.13.45'
    },
    publicPath: "/"
}