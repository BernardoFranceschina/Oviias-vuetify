<template>
	<v-app dark>
		<v-toolbar>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
		</v-toolbar>
		<v-img src="public/img1.jpg" height="597">
			<v-layout justify-end>
				<v-flex mx-4 mt-4 xs12 sm12 md5>
					<v-card>
						<v-card-text>
							<v-card-title>
								<span class="headline">Entrar</span>
							</v-card-title>
							<v-container grid-list-md>
								<v-layout wrap>
									<v-flex xs12>
										<v-text-field v-model="usuarios.email" label="Email*" required></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-text-field type="password" v-model="usuarios.senha" label="Senha*" required></v-text-field>
									</v-flex>
								</v-layout>
								<br>
								<small>*Indica campos obrigatórios</small>
							</v-container>
						</v-card-text>
						<v-card-actions>
							<v-btn flat @click="googleLogin()">
								<v-icon>mdi-google</v-icon>⠀Google
							</v-btn>
							<v-spacer></v-spacer>
							<v-btn flat @click="signup()">Cadastrar</v-btn>
							<v-btn flat @click="login()">Entrar</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-img>
		<v-footer class="pa-3">
			<v-spacer></v-spacer>
			<div>&copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		name: "login",

		data() {
			return {
				admin1: false,
				usuarios: {
					email: '',
					senha: '',
				}
			}
		},

		created() {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					window.location.replace("/#/")
				}
			})
		},

		methods: {
			googleLogin() {

				let provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider).catch(e => {
                    alert(e.code);
                })
			},

			login() {
				firebase.auth().signInWithEmailAndPassword(this.usuarios.email, this.usuarios.senha).catch(e => {
                    alert(e.code);
                })
			},
			signOut() {
				firebase.auth().signOut();
			},

			signup() {
				firebase.auth().createUserWithEmailAndPassword(this.usuarios.email, this.usuarios.senha).catch(e => {
                    alert(e.code);
                })
			},

 		}
	}
</script>

