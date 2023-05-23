<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.layout ({
	id: "layout",
	attribute: [],
	setup: function (prop) {
		return vue.data ()
		},
	})
</script>

<template id="layout:slot" type="layout">
	<div layout="slot">
		<slot slot/>
	</div>
</template>
