require ("core.min.js")
var lib = require ("core.min.js/src")
const {define} = lib
const {zero, one} = lib
const {file, directory} = require (lib.url ["package-lock"])
let asset_dir = require ("./vue.config.js").assetsDir
let packages = require (lib.url ["package.json"])
let vue = {
	"index.html": lib.path.join (directory, "dist", "index.html"),
	"package.json": lib.path.join (directory, "dist", "package.json"),
	}
let v_prefix = ""
var asset = {meta: [], link: [], script: []}, meta, link, script, $_asset = ("/").concat (packages.build.asset)
var index = {html: lib.file.get.content (vue ["index.html"])}
var header = lib.dom.component (index.html, "head") [zero].content
meta = lib.dom.element (header, "meta", lib.un.define (), "single")
link = lib.dom.element (header, "link", lib.un.define (), "single")
script = lib.dom.element (header, "script", lib.un.define (), "single")

for (var i in meta) {
	if (meta [i].source.exist ("slot")) asset.meta.push (meta [i].attribute)
	}

for (var i in link) {
	if (link [i].attribute.rel === "stylesheet") {
		if (link [i].source.exist ("crossorigin")) if (("crossorigin" in link [i].attribute) === false) link [i].attribute.crossorigin = "crossorigin"
		asset.link.push (link [i].attribute)
		}
	}

for (var i in script) {
	if (script [i].source.exist ("crossorigin")) if (("crossorigin" in script [i].attribute) === false) script [i].attribute.crossorigin = "crossorigin"
	asset.script.push (script [i].attribute)
	}

if (index.html) {
	var j_son = require (vue ["package.json"])
	var link = {}
	vue.package = {name: packages.name, version: packages.version}
	vue.package.asset = asset
	if (packages.build.express) lib.object.assign (vue.package, j_son)
	lib.file.write (vue ["package.json"], lib.json.format (vue.package, ... lib.json.pretty))
	if (null) lib.file.delete (vue ["index.html"])
	if (process.argv [2]) {
		if (process.argv [3]) {
			var from = lib.path.join (__dirname, "dist")
			var to = lib.path.join (__dirname, "..", "..", "express", "node_packages", process.argv [2], "web", "site", process.argv [3])
			var destination = lib.path.join (__dirname, "..", "..", "..", "..", "HT.doc", "web", "server", "ng", "html", process.argv [2])
			lib.dir.copy (from, to)
			lib.dir.copy (from, destination)
			}
		}
	}
