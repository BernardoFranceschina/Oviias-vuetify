<template>
	<v-app>
	
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
					<v-text-field v-model="name" :rules="nameRules" label="Endereço" required></v-text-field>
					<v-text-field v-model="cartao" type="number" :rules="cardRules" maxlength="16" :counter="16" label="Número do cartão de credito" required></v-text-field>
					<v-text-field v-model="cartaoNome" type="text" :rules="[v => !!v || 'Informe o nome do titular do cartão']" label="Nome do titular" required></v-text-field>
					<v-text-field type="number" maxlength="4" :counter="4" :rules="[v => !!v || 'Informe a senha de segurança']" label="Senha de segurança" required></v-text-field>
					<v-checkbox v-model="checkbox" :rules="[v => !!v || 'Verifique as informações']" label="As informações foram preenchidas corretamente?" required></v-checkbox>
					<v-btn :disabled="!valid" @click="submit">
						Confirmar
					</v-btn>
					<v-btn @click="clear">Recomeçar</v-btn>
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
				valid: true,
				name: '',
				nameRules: [
					v => !!v || 'Informe o endereço',
				],
				cartao: '',
				cartaoNome: '',
				cardRules: [
					v => !!v || 'Informe o numero  do cartão',
				],
				select: null,
				items: [
					'Item 1',
					'Item 2',
					'Item 3',
					'Item 4'
				],
				checkbox: false
			}
		},
		methods: {
			submit() {
				if (this.$refs.form.validate()) {
					axios.post('/api/submit', {
						name: this.name,
						email: this.email,
						select: this.select,
						checkbox: this.checkbox
					})
				}
			},
			clear() {
				this.$refs.form.reset()
			}
		}
	}
</script>
