<template>
	<v-app dark>

		<main-toolbar :user="user"></main-toolbar>
		
		<v-layout>
			<v-flex xs12>
				<v-parallax height="661" src="public/img2.jpg">
					<v-layout align-center column justify-center>
						<h2 class="display-3 --text text-xs-center mt-5">Bem-Vinda</h2>
						<h2 class="display-2 --text text-xs-center">a Oviia's Departament Store</h2>
						<v-btn>
							<router-link to="/mostruario" class="white--text">Veja nosso mostruário</router-link>
						</v-btn>
					</v-layout>
				</v-parallax>
			</v-flex>
		</v-layout>
	
		<v-footer class="pa-3">
			<v-spacer></v-spacer>
			<div>&copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
	
	</v-app>
</template>

<script>

	import mainToolbar from "./mainToolbar.vue"
	export default {

		components: {
			mainToolbar
		},

		data() {
			return {
				user: "",
				isLogged: false,
			}
		},
		created() {
			firebase.auth().onAuthStateChanged(user => {
				this.user = user;
				this.isLogged = !!user;
			})
		},

		methods: {
			signOut() {
				firebase.auth().signOut();
			}
		}


	}
</script>

