var packages = require ("./package.json");
module.exports = exports = {
	publicPath: packages.public.path,
	assetsDir: packages.build.asset,
	devServer: {
		allowedHosts: "all",
		},
	}
