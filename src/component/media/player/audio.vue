<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.component ({
	id: "media-player:audio",
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

<template id="media-player:audio" type="component">
	<audio id="audio"></audio>
</template>
