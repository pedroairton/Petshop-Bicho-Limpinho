<template>
    <!-- <nav>
        <div class="nav-buttons">

            <router-link to="/">
                <img class="logo" src="../assets/images/logoPetshop.png" alt="">
            </router-link>

        </div>
    </nav> -->
    <section class="page-login">
        <form @submit.prevent="registrarUser" class="login-container">
            <!-- <img src="../assets/images/logoPetshop.png" alt="" class="logo"> -->
            <h1 class="titulo">Cadastrar-se</h1>
            <input type="text" class="input" placeholder="E-MAIL" v-model="nome" required>
            <input type="text" class="input" placeholder="TELEFONE" v-model="telefone" required>
            <input type="password" class="input" placeholder="SENHA" v-model="senha" required>
            <input type="password" class="input" placeholder="CONFIRMAR SENHA" v-model="confirma_senha" required />
            <button type="submit" class="btn-login">CADASTRAR-SE</button>
            <router-link to="/login" class="cadastro-login">
                Já possui conta ? Faça seu login
            </router-link>
            <a href="" class="redefinir-senha">Esqueceu sua senha ?</a>
        </form>
    </section>
</template>


<script>
    export default {
        name: 'CadastroPage',
        data() {
            return {
                nome: '',
                email: '',
                telefone: '',
                senha: '',
                confirma_senha: '',
            }
        },
        methods: {
            async registrarUser() {
                try {
                    const response = await fetch('/', {
                        method: 'POST',
                        headers: {
                            'Contend-Type' : 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.nome,
                            email: this.email,
                            telefone: this.telefone,
                            senha: this.senha,
                            confirma_senha: this.confirma_senha,
                        })
                    })

                    const data = await response.json()
                    this.message = data.message
                } catch (error) {
                    console.error('Erro:', error)
                    this.message = 'Erro ao cadastrar usuário'
                }
            }
        }
    }
</script>