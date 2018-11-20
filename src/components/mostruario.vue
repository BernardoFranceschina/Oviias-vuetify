<template>
	<v-app dark>
		<v-toolbar>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<router-link to="/carinho" class="white--text">
					<v-icon>mdi-cart</v-icon>
				</router-link>
			</v-btn>
			<v-btn icon>
				<router-link to="/login" class="white--text">
					<v-icon>mdi-logout</v-icon>
				</router-link>
			</v-btn>
		</v-toolbar>
		<v-container fluid grid-list-lg fill-height style="min-height: 434px">
			<v-fade-transition mode="out-in">
				<v-layout wrap>
					<v-flex xs4 v-for="(prod, i) in prods" :key="i">
						<v-card >
							<v-card-title class="title">
								{{ prod.nome }}
							</v-card-title>
							<router-link :to="`/mostruario/produto?key=${prod['.key']}`" class="white--text">
								<v-img :src="`public/${prod.imagem}`" height="125" class="grey darken-4"></v-img>
							</router-link>
							<v-card-title class="title">
								<span class="subheading">R$ {{ prod.preco }}</span>
								<v-spacer></v-spacer>
								<v-btn flat>
									<span class="subheading">Adicionar ao carinho</span>
								</v-btn>
							</v-card-title>
						</v-card>
					</v-flex>
				</v-layout>
			</v-fade-transition>
		</v-container>
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
				prods: [],

				isLogged: false,
				user: ""
			}
		},

		created() {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					this.isLogged = true;
					this.user = user;
				}
			});

			this.$bindAsArray("prods", firebase.database().ref("prods"));
		}
	}
</script>

