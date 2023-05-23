<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "media-query:progress",
	attribute: [],
	setup: function () {
		var data = vue.reference ("off")
		var progress = vue.language ("loading") + "..."
		if (null) progress = the.app.name
		vue.watch (vue.on.progress ("reference"), {deep: true}, function (value) {
			if (vue.on.progress ()) data.value = "on"
			else data.value = "off"
			})
		return vue.data ({progress, data})
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="media-query:progress" type="component">
	<div id="media-query:progress" class="flex align-item justify-item view-port" style="background-color: white" v-bind:aria-data="data">
		<slot v-if="slot ()"/>
		<i v-else>{{ progress }}</i>
	</div>
</template>

<style type="text/css">
[id="media-query:progress"] { position: absolute; }
[id="media-query:progress"][aria-data="off"] { display: none; }
</style>
