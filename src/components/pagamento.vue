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
	
		<v-container grid-list-xs>
			<span class="display-1">Pagamento</span>
			<p></p>
			<v-divider></v-divider>
			<v-flex xs4>
				<v-form ref="form" v-model="valid" lazy-validation>
					<v-text-field label="Endereço" v-model="usuario.endereco"></v-text-field>
					<v-text-field label="Nome do titular do cartão" v-model="usuario.nomeCartao"></v-text-field>
					<v-text-field label="Número do cartão" v-model="usuario.nmrCartao"></v-text-field>
				</v-form>
			</v-flex>
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
				usuario: {
					endereco: '',
					nomeCartao: '',
					nmrCartao: '',

				}
			}
		},
		methods: {
			
		}
	}
</script>
