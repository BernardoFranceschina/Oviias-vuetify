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
	export default {
		data() {
			return {
				DB: [],
				prod: {}
			}
		},

		created() {
			const key = this.$route.query.key;
			
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
