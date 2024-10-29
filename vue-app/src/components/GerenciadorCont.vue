<template>
    <section class="page-gerenciador">
        <div class="titulo-gerenciador">
            <img src="../assets/images/logoPetshop.png" alt="">
            <span>GERENCIADOR DE CONTEÚDO</span>
        </div>
        <div class="inputs-login">
            <div class="input">
                <label for="login">LOGIN</label>
                <input type="text" id="login">
            </div>
            <div class="input">
                <label for="senha">SENHA</label>
                <input type="text" id="senha">
            </div>
            <button class="btn-login">LOGIN</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'GerenciadorCont',
    }
</script>