import vue, {the, lib, library} from "vue.min.js"
import ini from "@/package.json"
let {define} = lib
let {zero, one} = lib

if (lib.deprecate) lib.array.fetch_of (lib.fire.base.fetch.data)

if (vue.ini ("fire:base").driver === "google") {
	var driver = vue.ini ("fire:base").engine [vue.ini ("fire:base").driver]
	vue.fire = new lib.fire
	vue.fire.base.setup = function (config) {
		vue.fire.base.start (config)
		vue.fire.base.auth.start ()
		vue.fire.base.auth.state (function (auth) {
			if (auth) {}
			else {}
			})
		vue.fire.store.start ()
		}
	vue.fire.base.connection = vue.reference ()
	vue.fire.base.connect = function (connection) {
		if (connection === "reference") return vue.fire.base.connection
		else if (arguments.length) return vue.fire.base.connection.value = connection
		else return vue.fire.base.connection.value
		}
	vue.on ("package", function () {
		vue.then (() => {
			if (vue.package.fire.base.project) vue.fire.base.setup (vue.package.fire.base)
			})
		})
	vue.catch (() => {
		if ((vue.package.fire = {base: driver}).base) if (vue.package.fire.base.project) vue.fire.base.setup (vue.package.fire.base)
		var timeout = lib.time.sleep (function () { vue.fire.base.connect (null) }, 3)
		vue.fire.store.select ("__").then (function () { if (vue.fire.base.connect (true)) lib.time.sleep.clear (timeout) }).catch (function () { vue.fire.base.connect (null) })
		})
	}
else {
	var driver = vue.ini ("fire:base").engine [vue.ini ("fire:base").driver]
	vue.package.fire = {base: driver}
	vue.fire = function () {}
	vue.fire.base = new lib.open_io ()
	vue.fire.base.api.url (vue.package.fire.base.url)
	vue.fire.base.api.project (vue.package.fire.base.project)
	vue.fire.store = vue.fire.base.db.use (vue.package.fire.base.db)
	}
