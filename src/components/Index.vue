<template>
	<v-app dark>
		<v-toolbar>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn icon>
					<router-link to="/login" class="white--text">
						<v-icon>mdi-login</v-icon>
					</router-link>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	
		<v-parallax height="597" src="public/img2.jpg">
			<v-layout align-center column justify-center>
				<h2 class="display-3 --text text-xs-center mt-5">Bem-Vindo</h2>
				<h2 class="display-2 --text text-xs-center">a Oviia's Departament Store</h2>
				<v-btn>
					<router-link to="/mostruario" class="white--text">Veja nosso mostruário</router-link>
				</v-btn>
			</v-layout>
		</v-parallax>

		<v-footer class="pa-3">
			<v-spacer></v-spacer>
			<div>&copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
	
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		}
	}
</script>

