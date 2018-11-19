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
		<v-container fluid grid-list-lg fill-height style="min-height: 434px">
			<v-fade-transition mode="out-in">
				<v-layout wrap>
					<v-flex xs4>
						<v-card>
							<v-card-title class="title">
								{{ prod.nomeProd }}
							</v-card-title>
							<router-link to="/mostruario/produto" class="white--text">
								<v-img src="https://picsum.photos/350/165?random" height="125" class="grey darken-4"></v-img>
							</router-link>
							<v-card-title class="title">
								<span class="subheading">R$ {{ prod.preco }}</span>
								<v-spacer></v-spacer>
								<v-btn flat>
									<span class="subheading">Adicionar ao carinho</span>
								</v-btn>
							</v-card-title>
						</v-card>
					</v-flex>
				</v-layout>
			</v-fade-transition>
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
				prod: {
					nomeProd: 'Nome do produto',
					preco: 'Preço',
					desc: 'Descrição'
				}
			}
		},
	}
</script>

