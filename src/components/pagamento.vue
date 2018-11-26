<template>
	<v-app dark>
	
		<main-toolbar :user="user"></main-toolbar>
		<br><br><br>
		<v-container grid-list-xs>
			<span class="display-1">Pagamento</span>
			<p></p>
			<v-divider></v-divider>
			<v-flex xs4>
				<v-form ref="form" v-model="valid">
					<v-text-field :rules="ruleEnd" label="Endereço" v-model="usuario.endereco"></v-text-field>
					<v-text-field :rules="ruleNome" label="Nome do titular do cartão" v-model="usuario.nomeCartao"></v-text-field>
					<v-text-field :rules="ruleNmr" type="number" label="Número do cartão" v-model="usuario.nmrCartao"></v-text-field>
					<v-text-field :rules="ruleSenha" type="number" label="Senha do cartão"></v-text-field>
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
	import mainToolbar from "./mainToolbar.vue";
	export default {
		components: {
			mainToolbar,
		},
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
				user: "",
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
				if(this.isLogged){
					if(this.valid){
						this.text = 'Compra efetuada com sucesso!';
						this.color = 'success';
						this.$refs.form.reset();
						firebase.database().ref("cart").child(this.user.uid).remove();
					} else {
						this.text = 'Complete todos os campos antes de confirmar a compra';
						this.color = 'error';
					}
				} else {
					this.text = 'Entre na sua conta para poder confirmar a compra';
					this.color = 'error';
				}
				
				
			},
			signOut() {
				firebase.auth().signOut();
			}
		}
	}
</script>
