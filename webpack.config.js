var path = require('path');

module.exports = {
	entry  : {
		app    : './app/assets/scripts/app.js',
		Vendor : './app/assets/scripts/Vendor.js'
	},
	output : {
		path     : path.resolve(__dirname, './app/parsed/scripts'),
		filename : '[name].js'
	},
	module : {
		rules : [
			{
				test    : /\.js$/,
				exclude : /(node_modules|bower_components)/,
				use     : {
					loader  : 'babel-loader',
					options : {
						presets : ['@babel/preset-env']
					}
				}
			}
		]
	}
};

// ./ refers to current path which is the travel-site folder
