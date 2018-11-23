<template>
	<div>
		<v-navigation-drawer app v-model="drawer">
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-avatar>
							<v-icon large v-if="!isLogged || !user.photoURL">mdi-spin mdi-account-circle</v-icon>
							<v-img v-else dark :src="user.photoURL"></v-img>
						</v-avatar>
						<v-list-tile-title class="title">
							<span v-if="isLogged">&nbsp;{{ user.displayName || user.email }}</span>
							<span v-else>Não logado</span>
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>
			<v-divider></v-divider>
	
			<v-list two-line subheader v-if="isLogged">
				<v-subheader>Nossa loja:</v-subheader>
				<v-list-tile avatar>
					<router-link class="white--text" to="/">
						<v-list-tile-content>
							<v-list-tile-title>Página inicial</v-list-tile-title>
							<v-list-tile-sub-title></v-list-tile-sub-title>
						</v-list-tile-content>
					</router-link>
				</v-list-tile>
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
                <div v-if="administrador2">
                    <v-list-tile avatar>
                        <router-link class="white--text" to="/addProd">
                            <v-list-tile-content>
                                <v-list-tile-title>Adicionar produtos</v-list-tile-title>
                                <v-list-tile-sub-title>Apenas ADM's</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </router-link>
                    </v-list-tile>
                </div>
			</v-list>

			<v-list two-line subheader v-else>
				<v-subheader>Nossa Loja: </v-subheader>

				<v-list-tile avatar>
					<router-link class="white--text" to="/login">
						<v-list-tile-content>
							<v-list-tile-title>Logar</v-list-tile-title>
							<v-list-tile-sub-title>Faça login para ter acesso a tudo</v-list-tile-sub-title>
						</v-list-tile-content>
					</router-link>
				</v-list-tile>
				
			</v-list>
		</v-navigation-drawer>
	
		<v-toolbar app>
			<v-toolbar-side-icon v-if="!drawer" @click="drawer = true"></v-toolbar-side-icon>
			<v-btn icon v-else @click="drawer = false">
				<v-icon>mdi-menu-left</v-icon>
			</v-btn>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
			<v-spacer></v-spacer>
	
			<span v-if="!isLogged">Não Logado</span>
			
			<v-btn v-if="isLogged" icon>
				<router-link class="white--text" to="/carinho">
					<v-badge left>
						<span slot="badge">{{ cartLen }}</span> <!--slot can be any component-->
						<v-icon>mdi-cart</v-icon>
					</v-badge>
				</router-link>
			</v-btn>

			<v-btn icon v-if="!isLogged" title="Entrar">
				<router-link to="/login" class="white--text">
					<v-icon>mdi-login</v-icon>
				</router-link>
			</v-btn>
	
			<v-btn icon v-else @click="signOut()" title="Sair">
				<v-icon>mdi-logout</v-icon>
			</v-btn>
	
		</v-toolbar>
	</div>
</template>

<script>
	export default {
		name: "mainToolbar",
		props: ["user"],
		
		data() {
			return {
				administrador2: false,
				isLogged: false,
				drawer: false,

				cart: [],
				cartLen: 0
			}
		},
	
		methods: {
			signOut() {
                firebase.auth().signOut();
                this.administrador2 = false;
			},			
		},
        
		watch: {
			user() {

				this.isLogged = !!this.user;
                if (!this.user) return;
                if (!this.user.uid) { 
					return;
				} else if (this.user.uid === "3WCwuGgzE7fCVehpxaFCzfLauVj2" || this.user.uid === "Ag711hRc0lN4sfhxlSf90XCX1PC3") {
					this.administrador2 = true;
				}

				this.$bindAsArray("cart", firebase.database().ref("cart").child(this.user.uid));

			},
			
			cart() {
				this.cartLen = 0;
				for (const prod of this.cart) {
					this.cartLen += prod.quant
				}
			}
            
		}
	}
</script>
