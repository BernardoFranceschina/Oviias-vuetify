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
			<v-btn icon v-if="!isLogged">
				<router-link to="/login" class="white--text">
					<v-icon>mdi-login</v-icon>	
				</router-link>
			</v-btn>
			<v-btn icon v-else>
				<router-link class="white--text"  to="/login">
					<v-icon @click="logout()">mdi-logout</v-icon>
				</router-link>
			</v-btn>
		</v-toolbar>
		<br><br><br>
		<v-container grid-list-xs>
			<span class="display-1">Pagamento</span>
			<p></p>
			<v-divider></v-divider>
			<v-flex xs4>
				<v-form ref="form" v-model="valid">
					<v-text-field :rules="ruleEnd" label="Endereço" v-model="usuario.endereco"></v-text-field>
					<v-text-field :rules="ruleNome" label="Nome do titular do cartão" v-model="usuario.nomeCartao"></v-text-field>
					<v-text-field :rules="ruleNmr" type="number" label="Número do cartão" :counter="16" v-model="usuario.nmrCartao"></v-text-field>
					<v-text-field :rules="ruleSenha" type="number" label="Senha do cartão" :counter="4"></v-text-field>
					<v-btn @click="confirmar() ,snackbar=true">Confirmar compra</v-btn>
				</v-form>
			</v-flex>
		</v-container>
		<v-snackbar v-model="snackbar" :color="color" :timeout="timeout">
			{{ text }}
			<v-btn dark flat @click="snackbar = false">
       			Fechar
      		</v-btn>
    	</v-snackbar>
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
				usuario: {
					endereco: '',
					nomeCartao: '',
					nmrCartao: '',
				},
				ruleEnd:[
					v => !!v || 'Digite o endereço de entrega'
					],
				ruleNome:[
					v => !!v || 'Digite o nome do titular do cartão'
					],
				ruleNmr:[
					v => !!v || 'Digite o número do cartão'
					],
				ruleSenha:[
					v => !!v || 'Digite a senha de segunça'
					],
				timeout: 2000,
				color: '',
				valid: false,
				drawer: false,
				isLogged: false,
				snackbar: false,
				text: '',
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
			})
		},
		methods: {
			confirmar(){
				if(this.valid){
					this.text = 'Compra efetuada com sucesso!';
					this.color = 'success';
				} else {
					this.text = 'Complete todos os campos antes de confirmar a compra';
					this.color = 'error';
				}
			
			},
			logout() {
				firebase.auth().signOut()
			}
		}
	}
</script>
