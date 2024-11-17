<template>
    <section class="page-perfil">
        <div class="cabecalho-perfil">
            <img src="../assets/images/luisamell.webp" alt="" class="img-perfil">
            <div class="infos-perfil">
                <h1 class="nome">Luisa Mell CEO do IBAMA</h1>
                <span class="email">luisamell@ibama.com</span>
                <span class="telefone">(81) 4002-8922</span>
                <h1 class="total-pets">Pets Registrados: 2</h1>
            </div>
        </div>
        <h1 class="titulo-pets">Seus Pets:</h1>
        <!-- <div class="pet">
            <img src="../assets/images/pet1.png" alt="" class="img-pet">
            <img src="../assets/images/gatoIcon.png" alt="" class="icon-pet">
            <div class="infos-pet">
                <h1 class="nome-pet">Nome do pet</h1>
                <span class="raca">Raça</span>
                <span class="idade">Idade</span>
                <span class="peso">Peso</span>
                <span class="sexo">Sexo</span>
                <router-link to="/perfil/perfil-pet">
                    <button class="btn-detalhes">Detalhes do pet</button>
                </router-link>
            </div>
        </div> -->
        <div class="pet" v-for="(pet, index) in pets" :key="index">
            <img :src="petImagem(pet.nome)" alt="" class="img-pet">
            <img :src="petImagemIcon(pet.tipo)" alt="" class="icon-pet">
            <div class="infos-pet">
                <h1 class="nome-pet">{{pet.nome}}</h1>
                <span class="raca">Raça: {{pet.raca}}</span>
                <span class="idade">Idade: {{pet.idade}}</span>
                <span class="peso">Peso: {{pet.peso}}</span>
                <span class="sexo">Sexo: {{pet.sexo}}</span>
                <router-link :to="{name: 'PetPerfil', params: {id: pet.id}}">
                    <button class="btn-detalhes">Detalhes do pet</button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PerfilPage",
        data() {
            return {
                pets: [
                    {id: 1, nome: 'Rengar', raca: 'Draktharr', idade: '2 anos', peso: '4 kg', sexo: 'Macho', tipo: 'Gato'},
                    {id: 2, nome: 'Nasus', raca: 'Sterak', idade: '6 anos', peso: '31 kg', sexo: 'Macho', tipo: 'Cachorro'},
                ]
            }
        },
        methods: {
            petImagemIcon(tipo) {
                if (tipo === 'Cachorro') {
                    return require("../assets/images/cachorroIcon.png")
                } else if (tipo === 'Gato') {
                    return require("../assets/images/gatoIcon.png")
                } else {
                    console.log('default')
                }
            },
            petImagem(nome) {
                if (nome === 'Nasus') {
                    return require("../assets/images/pet2.png")
                } else if (nome === 'Rengar') {
                    return require("../assets/images/pet1.png")
                } else {
                    console.log('default')
                }
            }
        }
    }
</script>