<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "media-query:screen-splash",
	attribute: [],
	setup: function () {
		var data = vue.reference ()
		vue.watch (vue.media.query.screen.splash.show.status, function (on) {
			if (on) data.value = "on"
			else data.value = null
			})
		return vue.data ({data})
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="media-query:screen-splash" type="component">
	<div v-if="slot ()" id="media-query:screen-splash" class="view-port absolute flex-row" style="background-color: white" v-bind:aria-data="data">
		<div class="view-port flex flex-row align-item justify-item">
			<slot slot/>
		</div>
		<footer:screen-splash/>
	</div>
	<div id="media-query:screen-splash" class="view-port absolute flex-row" style="background-color: white" v-bind:aria-data="data" v-else>
		<div class="view-port flex flex-row align-item justify-item">
			<div>
				<img:logo src="192.png" width="192"/>
			</div>
		</div>
		<footer:screen-splash/>
	</div>
</template>
