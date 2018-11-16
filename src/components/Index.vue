<template>
	<v-app dark>
		<v-toolbar>
			<v-toolbar-title>Oviia's Departament Store</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn icon>
					<v-icon>mdi-login</v-icon>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	
		<v-parallax height="633" src="public/img2.jpg" >
			<v-layout align-center column justify-center>
				<h2 class="display-3 --text text-xs-center mt-5">Bem-Vindo</h2>
				<h2 class="display-2 --text text-xs-center">a Oviia's Departament Store</h2>
				<v-btn>Veja nosso catálogo</v-btn>
			</v-layout>
		</v-parallax>
	
	</v-app>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>
