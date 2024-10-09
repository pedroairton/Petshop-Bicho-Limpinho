<template>
    <!-- <nav>
        <div class="nav-buttons">

            <router-link to="/">
                <img class="logo" src="../assets/images/logoPetshop.png" alt="">
            </router-link>

        </div>
    </nav> -->
    <section class="page-login">
        <form class="login-container">
            <!-- <img src="../assets/images/logoPetshop.png" alt="" class="logo"> -->
            <h1 class="titulo">Fazer Login</h1>
            <input type="text" class="input" placeholder="E-MAIL" v-model="email">
            <input type="text" class="input" placeholder="SENHA" v-model="senha">
            <button class="btn-login">LOGIN</button>
            <router-link to="/cadastro" class="cadastro-login">
                Cadastrar-se
            </router-link>
            <a href="" class="redefinir-senha">Esqueceu sua senha ?</a>
        </form>
    </section>
</template>


<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                email: '',
                senha: '',
            }
        },
        methods: {
            async loginUser() {
                try {              
                    const response = await fetch('url', {
                
                        method: 'POST',
                    
                        headers: {
                    
                           'Content-Type': 'application/json'
                    
                        },
                    
                        body: JSON.stringify(data)({
                           email: this.email,
                           senha: this.senha
                        })
                    
                    });
                    
                    const data = await response.json();
                    
                    console.log(data);
                } 
                catch (error) {
                    console.error('Erro:', error)
                    this.message = 'Erro ao fazer login'
                }
            }
        }
    }
</script>