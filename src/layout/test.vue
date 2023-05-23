<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.layout ({
	id: "layout:test",
	attribute: [],
	setup: function (prop) {
		return vue.data ()
		},
	})
</script>

<template id="layout:test" type="layout">
	<div layout="test">
		<slot slot/>
	</div>
</template>
