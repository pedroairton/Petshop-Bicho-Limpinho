<template>

  <NavBar />

  <!-- <HomePage /> -->

  <router-view />

  <footer :class="footerClass">
    <div class="footer-infos">
      <img src="./assets/images/logoFooter.png" alt="" class="logo-footer">
      <div class="infos">
        <span>CNPJ: 00.000.000/0000-00</span>
        <span>Rua Qualquer Coisa 123</span>
        <span>(81) 4002-8922</span>
        <span>bicholimpinho@petshop.com</span>
      </div>
    </div>
    <div class="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.7404501110977!2d-34.95408792499253!3d-8.02567599200093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1b389a9959bf%3A0x3efcd87c0c39a82f!2sPet%20Shop%20Bicho%20Limpinho!5e0!3m2!1spt-BR!2sbr!4v1726651695517!5m2!1spt-BR!2sbr"
        width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
// import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar,

  },
  computed: {
    mostrarNavbar(){
      // ESCONDER NAVBAR NA ROTA INSERIDA
      return this.$route.name !== 'Login'
    },
    footerClass() {
      // Adiciona a classe 'footer-login' apenas na rota 'Login'
      return this.$route.name === 'Login' ? 'footer-login' : '';
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
@keyframes open {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
section{
  margin: 0 auto;
  width: 1600px;
  margin-top: 140px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  animation: open .3s ease;
}
button{
  font-family: "Grandstander", cursive;
}
#app {
  font-family: "Grandstander", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #AADEF3;
}
img{
  width: fit-content;
}
</style>

<style lang="scss">
  @import './scss/app.scss';
</style>
