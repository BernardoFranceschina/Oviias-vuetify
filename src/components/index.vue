<template>
	<v-app dark>
	
		<v-navigation-drawer app v-model="drawer">
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-avatar>
							<!-- <v-img v-if="isLogged" dark :src="user.photoURL"></v-img>
							<v-icon v-else >mdi-spin mdi-account-circle</v-icon> -->
						</v-avatar>
						<v-list-tile-title class="title">
							<span>⠀{{user ? user.displayName:"anom"}}</span>
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
			<v-toolbar-items>
				<v-btn icon v-if="!isLogged">
					<router-link to="/login" class="white--text">
						<v-icon>mdi-login</v-icon>	
					</router-link>
				</v-btn>
				<v-btn icon v-else>
					<router-link to="/login" class="white--text">
						<v-icon @click="logout()">mdi-logout</v-icon>
					</router-link>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	
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
	export default {
		data() {
			return {
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
			})
		},
		methods: {
			logout() {
				firebase.auth().signOut()
			}
		}
	
	
	}
</script>

