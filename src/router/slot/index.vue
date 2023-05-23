<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.router ({
	id: "*",
	setup: function () {
		return vue.export ()
		},
	method: {
		layout () {
			if (vue.app.router) return vue.app.router.layout
			},
		},
	})
</script>

<template id="*" url="*">
	<div v-if="null">
		<vue v-if="layout ()" v-bind:layout="vue.app.router.layout.name">
			slot
		</vue>
	</div>
</template>
