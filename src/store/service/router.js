import vue, {lib, library} from "vue.min.js"
var router = []
router.push ({path: "/", name: "/", component: () => import ("../../router/index.vue"), meta: {}})
router.push ({path: "/about", name: "page:about", component: () => import ("../../router/link/about.vue"), meta: {}})
router.push ({path: "/help", name: "page:help", component: () => import ("../../router/link/help.vue"), meta: {}})
router.push ({path: lib.router.try.catch, name: "*", component: () => import ("../../router/slot/index.vue"), meta: {}})
export default router = lib.router.create ({history: lib.router.history (vue.request.url), [("route").concat ("s")]: router})