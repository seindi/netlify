<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "component",
	attribute: [],
	setup: function (prop) {
		return vue.data ()
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="component:slot" type="component">
	<div component="slot">
		<slot slot/>
	</div>
</template>
