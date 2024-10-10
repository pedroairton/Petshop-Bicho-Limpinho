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
        <div class="pet">
            <img src="../assets/images/pet1.png" alt="" class="img-pet">
            <img src="../assets/images/gatoIcon.png" alt="" class="icon-pet">
            <div class="infos-pet">
                <h1 class="nome-pet">Nome do pet</h1>
                <span class="raca">Raça</span>
                <span class="idade">Idade</span>
                <span class="peso">Peso</span>
                <span class="sexo">Sexo</span>
            </div>
        </div>
        <div class="pet">
            <img src="../assets/images/pet2.png" alt="" class="img-pet">
            <img src="../assets/images/cachorroIcon.png" alt="" class="icon-pet">
            <div class="infos-pet">
                <h1 class="nome-pet">Nome do pet</h1>
                <span class="raca">Raça</span>
                <span class="idade">Idade</span>
                <span class="peso">Peso</span>
                <span class="sexo">Sexo</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PerfilPage",
    }
</script>