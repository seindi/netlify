var vue = require ("vue.min.js/package.c")
var watch = require ("watch")

watch.watchTree ("src", function (file, current, previous) {
	if (current) {
		if (file.includes ("index.js") === false) {
			vue.begin (__dirname)
			vue.end ()
			}
		}
	})
