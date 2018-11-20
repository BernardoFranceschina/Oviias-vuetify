<template>
	<v-app dark>
		
		<main-toolbar :user="user"></main-toolbar>

	<br><br>
		<v-layout row class="ma-5">
			<v-flex xs4>
				<v-img max-width="350" max-height="350" :src="`public/${prod.imagem}`"></v-img>
			</v-flex>
			<v-layout column>
				<h3 class="display-1">{{ prod.nome }}</h3>
				<h6 class="subheading">{{ prod.preco }}</h6>
				<br>
				<h4 class="title"> {{ prod.descricao }} </h4>
				<v-spacer></v-spacer>
				<v-flex offset-xs8>
					<v-btn @click="add_carinho()">Adicionar ao carinho</v-btn>
				</v-flex>
			</v-layout>
		</v-layout>

		<v-snackbar :color="snackParam.color" v-model="snackParam.active" :timeout="snackParam.timeout">
			{{ snackParam.text }}
			<router-link to="/login">
				<v-btn flat>Logar</v-btn>
			</router-link>
			<v-btn flat @click.native="snackParam.active = false">Fechar</v-btn>
		</v-snackbar>
	
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
				drawer: false,
				isLogged: false,
				user: {
					"displayName": "anom",
				},
				DB: [],
				prod: {},

				user: "",

				snackParam: {
					timeout: 3000,
					color: "primary",
					text: "",
					active: false
				}
			}
		},
		methods:{
			logout() {
				firebase.auth().signOut()
			},

			showSnack(color="primary", time="3000", text="") {
				const snak = this.snackParam;
				snak.timeout = time;
				snak.color = color;
				snak.text = text;
				snak.active = true;
			},

			add_carinho() {
				if (!this.isLogged) {
					this.showSnack("error", 3000, "Você precisa estar logado para fazer isso");
				}
			},
		},
	
		created() {
			firebase.auth().onAuthStateChanged(user => {
				this.user = user;
				if (this.user) this.isLogged = true;
				//redirecionar pra pagina de login
			})
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
