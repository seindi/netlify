/**
 * package
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

import vue, {the, lib, library} from "vue.min.js"
import ini from "@/package.json"
import "@/plugin/fire-base"
let {define} = lib
let {zero, one} = lib.number

/**
 * error
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

const ERROR_CURRENT_SESSION_IS_ACTIVE_CODE = 4003
const ERROR_CURRENT_SESSION_IS_ACTIVE_MESSAGE = "Session is Active, Please clear your Session first then try again."

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

vue.on ("package", function () {
	the.account.setup ()
	the.store.setup ()
	})

/**
 * plugin : fire base
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

the.fire = function () {}
the.fire.base = function () {}
the.fire.store = vue.fire.base.db.use (vue.package.fire.base.db)
the.fire.store.collection.set (vue.package.fire.base.collection)
the.fire.base.account = vue.fire.base.account.channel ()

/**
 * account
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

the.account = function () {
	return this
	}

the.account.setup = function (data, option) {
	if (data) the.account.data (data, option)
	else {
		the.account.data ()
		var fetch = the.fire.store.select ("account").then (function (response) {
			vue.state (function (state) {
				state.account = []
				for (var i in response.data) {
					state.account.push (response.data [i])
					}
				if (the.account.on.line ()) {
					var fetch = the.fire.base.account.get ().then (function (response) {
						var meta = state.account.where ({"$:id": response ["$:id"]}) ["$:meta"]
						if (meta) the.account.data (response, {access: meta ["access"] || []})
						else the.account.data (response)
						})
					fetch.catch ()
					}
				})
			})
		fetch.catch ()
		}
	}

the.account.data = function (data, option) {
	if (data) {
		option = lib.option (option)
		if (option.password) data.password = option.password
		if (option.access) data.access = option.access
		vue.react (the.account.data.value, lib.storage.json ("account"))
		vue.react (the.account.data.value, data)
		lib.storage.json ("account", {... the.account.data.value})
		}
	else return vue.react (the.account.data.value, lib.storage.json ("account"))
	}

the.account.data.value = vue.reactive ()

the.account.get = function (key) {
	if (key) return the.account.data.value [key]
	else return the.account.data.value
	}

the.account.on = function (key, value) {
	return this
	}

the.account.on.line = function (line) {
	if (line === the.reference) return the.account.on.line.data
	else if (arguments.length) return the.account.on.line.data.value = line
	else if (the.account.on.line.data.value) return true
	else if (the.fire.base.account.session.exist ()) return the.account.on.line.data.value = true
	else return the.account.on.line.data.value = false
	}

the.account.on.line.data = vue.reference (false)

the.account.meta = function (x) {
	var meta = the.account.get ("$:meta")
	if (x === "format") {
		var data = {}
		for (var i in meta) {
			if (lib.is.array (meta [i]) || lib.is.object (meta [i])) data [i] = lib.json.format (meta [i])
			else data [i] = meta [i]
			}
		return data
		}
	return meta
	}

the.account.meta.push = function (value) {
	return the.fire.base.account.meta.push ({... the.account.meta ("format"), ... value})
	}

the.account.meta.delete = function (value) {
	if (lib.is.string (value)) delete the.account.data.value.meta [value]
	else for (var i in value) delete the.account.data.value.meta [value [i]]
	return the.fire.base.account.meta.push (the.account.get ("$:meta"))
	}

the.account.session = function (user, password, option, context, resolve = function () {}, reject = function () {}) {
	the.fire.base.account.session.set (user, password, option).catch (reject).then (function (session) {
		if (context) context.call ()
		the.fire.base.account.get ().catch (reject).then (function (data) {
			the.fire.store.get ("account").select (data ["$:id"]).catch (reject).then (function (response) {
				the.account.setup (data, {password: lib.hash.password (password), access: (response ["$:meta"].access || [])})
				resolve ({data, session})
				})
			})
		})
	}

the.account.register = function (user, password, option) {
	option = lib.option (option, {})
	return lib.to_promise (function (resolve, reject) {
		the.fire.base.account.email.create (user, password).catch (reject).then (function (data) {
			the.fire.store.insert ("account").set ({name: (option.name || data.name), "$:meta": {access: (option.access || [])}}, {id: data ["$:id"]}).catch (console.error).then (function () {
				if (option.login) the.account.login (user, password).then (resolve).catch ()
				else resolve (data)
				})
			})
		})
	}

the.account.login = function (user, password, context) {
	return lib.to_promise (function (resolve, reject) {
		if (the.account.on.line ()) reject ({code: ERROR_CURRENT_SESSION_IS_ACTIVE_CODE, message: ERROR_CURRENT_SESSION_IS_ACTIVE_MESSAGE})
		else the.account.session (user, password, {}, context, resolve, reject)
		})
	}

the.account.logout = function () {
	return the.fire.base.account.session.delete ("all")
	}

the.fire.base.account.session.on ("check", function () {
	return vue.session.get ("account:id")
	})

the.fire.base.account.session.on ("set", function (session) {
	vue.session.set ({"account:id": session.account})
	lib.storage.json ("account:session", session)
	the.account.on.line (true)
	})

the.fire.base.account.session.on ("delete", function (session) {
	vue.session.delete ("account:id")
	lib.storage.delete ("account:session")
	the.account.on.line (false)
	})

/**
 * store
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

the.store = function () {
	return this
	}

the.store.setup = function () {
	the.snapshot (function () {
		var fetch = the.fire.store.select ("store").then (function (response) {
			vue.state (function (state) {
				state.store = []
				for (var i in response.data) {
					state.store.push (response.data [i])
					}
				})
			})
		fetch.catch ()
		})
	}

the.store.insert = function (name, option) {
	option = lib.option (option, {latitude: zero.string (), longitude: zero.string ()})
	return the.fire.store.insert ("store").set ({name, address: option.address, phone: option.phone, latitude: option.latitude, longitude: option.longitude}).exec (console.log)
	}

/**
 * method
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

vue.method ("number_format", function number_format (... input) { return lib.number.format (... input) })
vue.method ("currency_format", function currency_format (input) { return lib.number.format (input, {separator: "."}) })

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
