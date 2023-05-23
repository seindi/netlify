<script>
import vue, {the, lib, library} from "vue.min.js"
export default vue.router ({
	id: "/",
	setup: function () {
		return vue.export ()
		},
	method: {
		click () {
			vue.on.loading.delete ("test")
			},
		do_login () {
			var user = "seindi@iperfume.id"
			var password = "password"
			var promise = the.account.login (user, password).then (console.log)
			promise.catch (function (error) {
				console.error (error.code, error.message)
				})
			},
		do_logout () {
			the.account.logout ().exec (console.log)
			},
		do_register () {
			//*
			the.account.register ("test002@iperfume.id", "password").catch ().then (function (response) {
				console.log ("register", response)
				})
			//*/
			},
		},
	})
</script>

<template id="/" url="/" type="router">
	<layout:test v-on:click="click ()">
		<button:material accent="gray">Google</button:material><br break>
		lorem ipsum dolor sit amet <string font="korea:noto-serif">안녕하세요</string><br>
		<br>
		<button:material v-on:click="do_login ()">Login</button:material>
		&nbsp;
		<button:material v-on:click="do_logout ()">Logout</button:material>
		&nbsp;
		<button:material v-on:click="do_register ()">Register</button:material>
		<br><br>
		online<br>
		{{ the.account.on.line () }}
		<br><br>
		account:get<br>
		{{ the.account.get () }}
		<br><br>
		account<br>
		{{ vue.state ("account") }}
		<br><br>
		store<br>
		{{ vue.state ("store") }}
	</layout:test>
</template>
