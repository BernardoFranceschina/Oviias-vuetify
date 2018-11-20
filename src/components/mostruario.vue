<template>
	<v-app dark>
		
		<main-toolbar :user="user"></main-toolbar>

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
								<v-img :src="`public/${prod.imagem}`" height="125" class="grey darken-4"></v-img>
							</router-link>
							<v-card-title class="title">
								<span class="subheading">R$ {{ prod.preco }}</span>
								<v-spacer></v-spacer>
								<v-btn flat>
									<span class="subheading" @click="add_carinho()">Adicionar ao carinho</span>
								</v-btn>
							</v-card-title>
						</v-card>
					</v-flex>
				</v-layout>
			</v-fade-transition>
		</v-container>

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
	import mainToolbar from "./mainToolbar.vue";

	export default {

		components: {
			mainToolbar,
		},

		data() {
			return {
				admin1: false,
				prods: [],
				user: {
					"displayName": "anom",
				},
				drawer: false,
				isLogged: false,
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
			signOut() {
				firebase.auth().signOut();
			}
		},
	
		created() {
			firebase.auth().onAuthStateChanged(user => {
				this.user = user;
				this.isLogged = !!user;
			});
	
			this.$bindAsArray("prods", firebase.database().ref("prods"));
		},

		methods: {

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

			signOut() {
				firebase.auth().signOut();
			}
		}
	}
</script>

