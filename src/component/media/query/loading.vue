<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "media-query:loading",
	attribute: [],
	setup: function () {
		var data = vue.reference ("off")
		vue.watch (vue.on.loading ("reference"), {deep: true}, function (value) {
			if (vue.on.loading ()) data.value = "on"
			else data.value = "off"
			})
		return vue.data ({data})
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="media-query:loading" type="component">
	<div v-if="slot ()" id="media-query:loading" v-bind:aria-data="data">
		<slot slot/>
	</div>
	<div id="media-query:loading" v-bind:aria-data="data" v-else>
		{{ vue.on.loading () }}
	</div>
</template>

<style type="text/css">
[id="media-query:loading"] { position: absolute; }
[id="media-query:loading"][aria-data="off"] { display: none; }
</style>
