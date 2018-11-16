<template>
	<v-app dark>
		
		<index></index>
		<login></login>
		<mostruario></mostruario>
		
	</v-app>
</template>

<script>
	import login from "./components/login.vue"
	import Index from "./components/index.vue"
	import mostruario from "./components/mostruario.vue"
	export default {
		components: {
			login,
			Index,
			mostruario
		},
		data() {
			return {
				
			}
		},
	}
</script>
