<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "media-query:line",
	attribute: [],
	setup: function () {
		var data = vue.reference ("on")
		vue.watch (vue.on.line ("reference"), function (on) {
			if (on) data.value = "on"
			else data.value = "off"
			})
		return vue.data ({data})
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		on () { return this.data === "on" },
		},
	})
</script>

<template id="media-query:line" type="component">
	<div v-if="on ()" id="media-query:line" v-bind:aria-data="data">
		<div v-if="slot ()" id="media-query:line/section">
			<slot slot/>
		</div>
		<div id="media-query:line/section" v-else>
			on:line
		</div>
	</div>
	<div id="media-query:line" v-bind:aria-data="data" v-else>
		<div id="media-query:line/section">
			<div v-if="slot ()" id="media-query:line/section">
				<slot slot/>
			</div>
			<div id="media-query:line/section" v-else>
				off:line
			</div>
		</div>
	</div>
</template>

<style type="text/css">
[id="media-query:line"][aria-data="on"] { display: none; }
</style>
