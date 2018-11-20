<template>
	<v-app dark>

		<main-toolbar :user="user"></main-toolbar>
        <br><br>
		<v-container grid-list-xs>
            <v-flex xs4>
                
			<v-form ref="input_form" v-model="form">
				<v-text-field label="Nome" :rules="[v => !!v || 'Digite essa porra!']" v-model="input_name"></v-text-field>
				<v-text-field label="Descrição" :rules="[v => !!v || 'Digite essa porra!']" v-model="input_desc"></v-text-field>
				<v-text-field label="preço" type="Number" :rules="[v => !!v || 'Digite essa porra!']" v-model="input_price"></v-text-field>
				<v-text-field label="Imagem" :rules="[v => !!v || 'Digite essa porra!']" v-model="input_img"></v-text-field>
			</v-form>
	
			<v-btn color="success" @click="addProd()">Adicionar</v-btn>
            </v-flex>
		</v-container>
	</v-app>
</template>

<script>
	import mainToolbar from "./mainToolbar.vue"
	export default {
		components: {
			mainToolbar,
		},
		name: "addProd",
	
		data() {
			return {
				drawer: false,
				isLogged: false,
				user: {
					"displayName": "anom",
				},
				input_name: "",
				input_desc: "",
				input_price: "",
				input_img: "",
	
				form: true
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
            signOut() {
				firebase.auth().signOut();
			},
			addProd() {
				if (this.$refs.input_form.validate()) {
					const data = {
						"nome": this.input_name,
						"descricao": this.input_desc,
						"preco": this.input_price,
						"imagem": this.input_img
					}
	
					firebase.database().ref("prods").push(data);
	
					this.input_name = "";
					this.input_desc = "";
					this.input_price = "";
					this.input_img = "";
	
					this.$refs.input_form.reset();
	
				}
			}
		}
	
	}
</script>

