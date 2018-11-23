<template>
	<v-app dark>
	
		<main-toolbar :user="user"></main-toolbar>
		<br><br><br>
		<v-container grid-list-xs>
			
			<v-layout>
				<v-flex xs12>

					<v-data-table
						:headers="table.headers"
						:items="cart"
						hide-actions
					>

					<template slot="items" slot-scope="props">

						<td>{{ getName(props.item.id) }}</td>
						<td>{{ props.item.quant }}</td>
						<td>{{ getAllValue(props.item.id, props.item.quant) }}</td>

					</template>

					<v-alert type="error" slot="no-data" :value="true">
						Nenhum produto no carrinnho
					</v-alert>
						
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

				cart: [],

				table: {
					headers: [
						{
							text: "Nome",
							value: "name"
						},

						{
							text: "Quntidade",
							value: "quant"
						},

						{
							text: "Valor",
							value: "value"
						},
					]
				}
			}
		},
		created() {
			firebase.auth().onAuthStateChanged(user => {
				this.user = user;
				if (this.user) this.isLogged = true;
				//redirecionar pra pagina de login
				
				this.$bindAsArray("prods", firebase.database().ref("prods"));
				this.$bindAsArray("cart", firebase.database().ref("cart").child(this.user.uid));

			})
		},

		methods: {
			getName(key) {
				for (const prod of this.prods) {
					if (prod[".key"] === key) {
						return prod.nome
					}
				}
			},

			getAllValue(key, quant) {
				for (const prod of this.prods) {
					if (prod[".key"] === key) {
						return prod.preco * quant;
					}
				}
			}
		}
	}
</script>
