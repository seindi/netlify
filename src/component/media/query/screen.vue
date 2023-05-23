<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "media-query:screen",
	attribute: [],
	setup: function () {
		return vue.data ()
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="media-query:screen" type="component">
	<div v-if="slot ()" id="media-query:screen" class="padding z-index" template="pop">
		<slot slot/>
	</div>
	<div id="media-query:screen" class="padding z-index" template="pop" v-else>
		<section class="flex flex-grow align-item justify-item padding border-radius box-shadow">
			{{ vue.language ("media-query:screen") }}
		</section>
	</div>
</template>

<style type="text/css">
[id="media-query:screen"] { display: none; }
[id="media-query:screen"] > section { background-color: white; }
@media only screen and (max-width: 800px) {
	html, body { overflow: hidden; }
	[device="computer"] [id="media-query:screen"] { display: flex; }
	}
</style>
