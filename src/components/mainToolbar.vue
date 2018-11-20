<template>
    <v-toolbar>
    
        <v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
        <v-spacer></v-spacer>
    
        <span v-if="isLogged">{{ (user.displayName) ? user.displayName:user.email }}</span>
        <span v-else>Não Logado</span>
    
        <v-btn icon v-if="isLogged">
            <router-link to="/carinho" class="white--text">
                <v-icon>mdi-cart</v-icon>
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
</template>

<script>
    export default {
        name: "mainToolbar",
        props: ["user"],
    
        data() {
            return {
                isLogged: false
            }
        },

        methods: {
            signOut() {
				firebase.auth().signOut();
			}
        },
    
        watch: {
            user() {
                this.isLogged = !!this.user;
            }
        }
    }
</script>
