<template>
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username"></label>
			<input id="username" type="text" v-model="" />
		</div>
		<div>
			<label for="password"></label>
			<input id="password" type="text" />
		</div>
		<button type="submit">로그인</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		submitForm() {
			axios.post();
		},
	},
};
</script>

<style></style>
