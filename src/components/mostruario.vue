<template>
	<v-app dark>
		<v-navigation-drawer app v-model="drawer">
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-avatar>
							<v-icon v-if="!isLogged">mdi-spin mdi-account-circle</v-icon>
							<v-img v-else dark :src="user.photoURL"></v-img>
						</v-avatar>
						<v-list-tile-title class="title">
							<span>⠀{{user ? user.display :"anom"}}</span>
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>
			<v-divider></v-divider>
	
			<v-list two-line subheader>
				<v-subheader>Nossa loja:</v-subheader>
				<v-list-tile avatar>
					<router-link class="white--text" to="/mostruario">
						<v-list-tile-content>
							<v-list-tile-title>Mostruário</v-list-tile-title>
							<v-list-tile-sub-title>Confira nosso catálogo de produtos</v-list-tile-sub-title>
						</v-list-tile-content>
					</router-link>
				</v-list-tile>
				<v-list-tile avatar>
					<router-link class="white--text" to="/carinho">
						<v-list-tile-content>
							<v-list-tile-title>Carinho</v-list-tile-title>
							<v-list-tile-sub-title>Veja como está suas compras</v-list-tile-sub-title>
						</v-list-tile-content>
					</router-link>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	
		<v-toolbar app>
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<router-link to="/carinho" class="white--text">
					<v-icon>mdi-cart</v-icon>
				</router-link>
			</v-btn>
			<v-btn icon v-if="!isLogged">
				<router-link to="/login" class="white--text">
					<v-icon>mdi-login</v-icon>	
				</router-link>
			</v-btn>
			<v-btn icon v-else>
				<router-link class="white--text" to="/login">
					<v-icon @click="logout()">mdi-logout</v-icon>
				</router-link>
			</v-btn>
		</v-toolbar>
		<br><br>
		<v-container fluid grid-list-lg fill-height style="min-height: 434px">
			<v-fade-transition mode="out-in">
				<v-layout wrap>
					<v-flex xs4 v-for="(prod, i) in prods" :key="i">
						<v-card>
							<v-card-title class="title">
								{{ prod.nome }}
							</v-card-title>
							<router-link :to="`/mostruario/produto?key=${prod['.key']}`" class="white--text">
								<v-img src="https://picsum.photos/350/165?random" height="125" class="grey darken-4"></v-img>
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
				user: {
					"displayName": "anom",
				},
				drawer: false,
				isLogged: false,
			}
		},
		methods:{
			logout() {
				firebase.auth().signOut()
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

