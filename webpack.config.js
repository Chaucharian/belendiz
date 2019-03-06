const developmentConfig = require('./webpack.dev');
const productionConfig = require('./webpack.prod');
let config = null;

module.exports = (env, argv) => {

	if (argv.mode === 'development') {
		config = developmentConfig;
	}
  
	if (argv.mode === 'production') {
		config = productionConfig;
	}
  
	return config;
};