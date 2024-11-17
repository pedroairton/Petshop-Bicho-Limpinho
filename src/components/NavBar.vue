<template>
    <nav>
        <div class="nav-buttons">
            <router-link to="/">
                HOME
            </router-link>
            <router-link to="/login" v-if="!userLogado">
                <!-- PERFIL/FAZER LOGIN -->
                FAZER LOGIN
            </router-link>
            <router-link to="/perfil" v-else>
                PERFIL
            </router-link>
            <img class="logo" src="../assets/images/logoPetshop.png" alt="">
            <router-link to="/agendamento">
                AGENDAMENTO
            </router-link>
            <router-link to="/quem-somos">
                QUEM SOMOS
            </router-link>
        </div>
    </nav>
</template>

<style>

</style>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            // (provisório) alternar true e false para mudar o estado de logado e deslogado
            userLogado: true
        }
    },
    // created() {
    //     // Verifique se o usuário está logado (pode ser através de um token, por exemplo)
    //     const token = localStorage.getItem('authToken'); // Exemplo usando localStorage
    //     this.isLoggedIn = !!token; // Define se o usuário está logado
    // }
}
</script>