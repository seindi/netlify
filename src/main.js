import "core.min.js"
import vue, {the, lib, library} from "vue.min.js"
import plugin from "vue.min.js/plugin"
import src from "vue.min.js/src"
import router from "@/store/service/router"
import index from "@/store/service/v.js"
import v from "@/package"
import app from "@/package.vue"
import "@/asset/font.css"
import "@/asset/style.css"
import "@/package.css"
vue.proto.type = vue
var application = vue.application (app)
var use = [router, plugin, vue.store.data (), vue.store.data ("pinia")]
for (var i in src) vue.properties (application, i, src [i])
for (var i in use) application.use (use [i])
for (var i in index) if (vue.partial.push (i)) application.component (i, index [i])
application.mount (("#").concat ("app"))
if (vue.process.mode === "production") lib.console ("live")
else lib.console ("development")
