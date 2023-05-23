<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "redirect",
	attribute: ["url", "delay"],
	setup: function (prop) {
		lib.time.sleep (function () { vue.url.go (prop.url) }, (prop.delay || lib.number.one))
		return vue.data ()
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="redirect" type="component">
	<div v-if="slot ()">
		<slot slot/>
	</div>
</template>
