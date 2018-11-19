<template>

    <v-app>
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
            input_name: "",
            input_desc: "",
            input_price: "",
            input_img: "",

            form: true
        }
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

