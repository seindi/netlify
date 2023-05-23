<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.router ({
	id: "error:found",
	setup: function () {
		return vue.export ()
		},
	})
</script>

<template id="error:found">
	<div>
		{{ $$$.language ('error found') }}
	</div>
</template>
