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
