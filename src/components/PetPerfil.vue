<template>
    <section class="page-perfil-pet">
        <div class="pet" v-if="pet">
            <div class="imagem-pet">
                <img :src="petImagem(pet.nome)" alt="" class="img-pet">
                <span class="tipo-pet">{{pet.tipo}}</span>
            </div>
            <img :src="petImagemIcon(pet.tipo)" alt="" class="icon-pet">
            <div class="infos-pet">
                <h1 class="nome-pet">Nome: {{pet.nome}}</h1>
                <span class="raca">Raça: {{pet.raca}}</span>
                <span class="idade">Idade: {{pet.idade}}</span>
                <span class="peso">Peso: {{pet.peso}}</span>
                <span class="sexo">Sexo: {{pet.sexo}}</span>
            </div>
        </div>
        <div class="tabelas">
            <div class="tabela">
                <span class="titulo-tabela">Atendimentos Agendados</span>
                <table>
                    <tr>
                        <th>Banho</th>
                        <th>19h00</th>
                        <th>19/08/2024</th>
                    </tr>
                    <tr>
                        <th>Tosagem</th>
                        <th>13h30</th>
                        <th>18/08/2024</th>
                    </tr>
                    <tr>
                        <th>Vacinação</th>
                        <th>14h00</th>
                        <th>10/08/2024</th>
                    </tr>
                </table>
            </div>
            <div class="tabela">
                <span class="titulo-tabela">Histórico de Atendimento</span>
                <table>
                    <tr>
                        <th>Consulta</th>
                        <th>12h30</th>
                        <th>10/10/2024</th>
                    </tr>
                    <tr>
                        <th>Tosagem</th>
                        <th>13h30</th>
                        <th>20/10/2024</th>
                    </tr>
                    <tr>
                        <th>Vacinação</th>
                        <th>16h00</th>
                        <th>16/10/2024</th>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PetPerfil",
        props: ['id'],
        data() {
            return{
                pet: null //inicialmente vazio
            }
        },
        created() {
            // simulando busca por id do pet
            const pets = [
                {id: 1, nome: 'Rex', raca: 'Siamês', idade: '2 anos', peso: '4 kg', sexo: 'Macho', tipo: 'Gato'},
                {id: 2, nome: 'Ted', raca: 'Pitbull', idade: '6 anos', peso: '31 kg', sexo: 'Macho', tipo: 'Cachorro'},
            ]
            // encantrando por id
            this.pet = pets.find(p => p.id === parseInt(this.id))
            console.log(this.pet)
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
                if (nome === 'Ted') {
                    return require("../assets/images/pet2.png")
                } else if (nome === 'Rex') {
                    return require("../assets/images/pet1.png")
                } else {
                    console.log('default')
                }
            }
        }
    }
</script>