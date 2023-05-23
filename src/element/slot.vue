<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.element ({
	id: "element",
	attribute: [],
	setup: function (prop) {
		return {vue}
		},
	method: {
		function () {},
		slot () { return vue.slot (this).default },
		},
	})
</script>

<template id="element:slot" type="element">
	<div element="slot">
		<slot slot/>
	</div>
</template>
