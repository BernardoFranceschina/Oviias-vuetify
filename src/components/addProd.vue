<template>

    <v-app>

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
		</v-toolbar>
        <v-container grid-list-xs>

            <v-form ref="input_form" v-model="form">  
                <v-text-field
                    label="Nome"
                    :rules="[v => !!v || 'Digite essa porra!']"
                    v-model="input_name"
                ></v-text-field>

                <v-text-field
                    label="Descrição"
                    :rules="[v => !!v || 'Digite essa porra!']"
                    v-model="input_desc"
                ></v-text-field>

                <v-text-field
                    label="preço"
                    type="Number"
                    :rules="[v => !!v || 'Digite essa porra!']"
                    v-model="input_price"
                ></v-text-field>

                <v-text-field
                    label="Imagem"
                    :rules="[v => !!v || 'Digite essa porra!']"
                    v-model="input_img"
                ></v-text-field>      
            </v-form>

            <v-btn color="success" @click="addProd()">Adicionar</v-btn>
        </v-container>
    </v-app>
    
</template>

<script>
export default {
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

