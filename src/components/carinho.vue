<template>
	<v-app dark>
	
		<main-toolbar :user="user"></main-toolbar>
		<br><br><br>
		<v-container grid-list-xs>
			
			<v-layout>
				<v-flex xs12>
					<v-toolbar color="grey darken-3">
						<v-toolbar-title>Carinho</v-toolbar-title>
					</v-toolbar>
					<v-data-table :items="prods" class="elevation-1" hide-actions hide-headers>
						<template slot="items" slot-scope="prods">
							<td>{{ prods.item.nome }}</td>
							<td class="text-xs-center">R$ {{ prods.item.preco }}</td>
							<td class="text-xs-right">{{ prods.item.preco }}</td>
						</template>
					</v-data-table>
				</v-flex>
			</v-layout>
	
		</v-container>
	
		<v-footer class="pa-3">
			<v-spacer></v-spacer>
			<div>&copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
	</v-app>
</template>

<script>
	import mainToolbar from "./mainToolbar.vue";
	export default {
		components: {
			mainToolbar,
		},
		data() {
			return {
				prods: [],
				drawer: false,
				isLogged: false,
				user: {
					"displayName": "anom",
				},
			}
		},
		created() {
			firebase.auth().onAuthStateChanged(user => {
				this.user = user;
				if (this.user) this.isLogged = true;
				//redirecionar pra pagina de login

				
			this.$bindAsArray("prods", firebase.database().ref("prods"));
			})
		},
	}
</script>
