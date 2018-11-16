<template>	
    <v-app dark>
		<v-toolbar>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
		</v-toolbar>
		<v-img src="public/img1.jpg" height="633">
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
							<v-btn flat>
								<v-icon>mdi-google</v-icon>⠀Google
							</v-btn>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" flat>Cadastrar</v-btn>
							<v-btn color="blue darken-1" flat>Entrar</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-img>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				usuarios: {
					email: '',
					senha: '',
				}
			}
		},
	}
</script>
