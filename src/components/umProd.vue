<template>
	<v-app dark>
		
		<main-toolbar :user="user"></main-toolbar>
	
		<v-layout row class="ma-5">
			<v-flex xs4>
				<v-img max-width="350" max-height="350" src="public/produto1.jpg"></v-img>
			</v-flex>
			<v-layout column>
				<h3 class="display-1">{{ prod.nome }}</h3>
				<h6 class="subheading">{{ prod.preco }}</h6>
				<br>
				<h4 class="title"> {{ prod.descricao }} </h4>
				<v-spacer></v-spacer>
				<v-flex offset-xs8>
					<v-btn>Adicionar ao carinho</v-btn>
				</v-flex>
			</v-layout>
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
				DB: [],
				prod: {},

				user: "",
			}
		},

		created() {
			const key = this.$route.query.key;

			firebase.auth().onAuthStateChanged(user => {
				this.user = user;
				this.isLogged = !!user;
			})
			
			this.$bindAsArray("DB", firebase.database().ref("prods"), null, () => {
				for (let i in this.DB) {
					if (this.DB[i]['.key'] === key) {
						this.prod = this.DB[i];
						return
					}
				}
			});
		}

	
	}
</script>
