<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.next ({
	id: "vue",
	setup: function () {
		vue.start ()
		return vue.export ()
		},
	watch: {
		$route () {
			vue.parse_url ()
			vue.route ()
			},
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template>
	<media-player:audio v-if="vue.setting ('media-player:audio')"/>
	<media-query:screen v-if="vue.setting ('media-query:screen')"/>
	<media-query:screen-splash v-if="vue.setting ('media-query:screen-splash')"/>
	<media-query:line v-if="vue.setting ('media-query:line')"/>
	<media-query:loading v-if="vue.setting ('media-query:loading')"/>
	<router-view v-if="vue.system.setup" id="application"/>
</template>
