
<template>

  <section class="page-index">
    <!-- SWIPER CARROSSEL -->
    <!-- <swiper-container class="mySwiper" init="false" style="max-width: 100%;">
      <swiper-slide>
        <div class="banner">
          <img src="../assets/images/banner.png" alt="" class="img-banner" />
          <span class="desc-banner">Banho</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="../assets/images/banner.png" alt="" class="img-banner" />
          <span class="desc-banner">Tosa</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="../assets/images/banner.png" alt="" class="img-banner" />
          <span class="desc-banner">Vacinas</span>
        </div>
      </swiper-slide>
    </swiper-container> -->
    <swiper
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="banner">
          <img src="../assets/images/banner.png" alt="" class="img-banner" />
          <span class="desc-banner">Banho</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="../assets/images/banner2.avif" alt="" class="img-banner" />
          <span class="desc-banner">Vacinas</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner">
          <img src="../assets/images/banner.png" alt="" class="img-banner" />
          <span class="desc-banner">Tosa</span>
        </div>
      </swiper-slide>
      ...
    </swiper>

    <div class="agendamento">
      <div class="agendamento-info">
        <span class="titulo-agendamento">Faça já o agendamento para seu bichinho!</span>
        <p class="texto-agendamento">
          Lorem ipsum dolor sit amet. Est quibusdam dolorem vel sequi esse sit
          suscipit nulla in doloribus reprehenderit. Lorem ipsum dolor sit amet.
          Est quibusdam dolorem vel sequi esse sit suscipit nulla in doloribus
          reprehenderit.
        </p>
        <a href="">
          <button class="btn-agendamento">AGENDAR</button>
        </a>
      </div>
      <img src="../assets/images/agendamento.png" alt="" class="img-agendamento" />
    </div>

    <div class="servicos">
      <span class="titulo-servicos">Serviços</span>
      <span class="desc-servicos">Esses são os nossos serviços oferecidos:</span>
      <div class="grid-servicos">
        <div class="servico">
          <img src="../assets/images/servico.png" alt="" class="img-servico">
        </div>
        <div class="servico">
          <img src="../assets/images/servico.png" alt="" class="img-servico">
        </div>
        <div class="servico">
          <img src="../assets/images/servico.png" alt="" class="img-servico">
        </div>
        <div class="servico">
          <img src="../assets/images/servico.png" alt="" class="img-servico">
        </div>
        <div class="servico">
          <img src="../assets/images/servico.png" alt="" class="img-servico">
        </div>
        <div class="servico">
          <img src="../assets/images/servico.png" alt="" class="img-servico">
        </div>
      </div>
    </div>

    <div class="quem-somos">
      <div class="info-quem-somos">
        <span class="titulo-quem-somos">Quem somos</span>
        <p class="desc-quem-somos">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat voluptates error expedita obcaecati pariatur
          aliquid. Error minima tempore voluptates, autem magnam qui obcaecati rem quia impedit ab iste reiciendis vero
          nihil earum iure necessitatibus.
          <br><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat voluptates error expedita obcaecati pariatur
          aliquid. Error minima tempore voluptates, autem magnam qui obcaecati rem quia impedit ab iste reiciendis vero
          nihil earum iure necessitatibus.
        </p>
        <a href="">
          <button class="btn-quem-somos">SAIBA MAIS</button>
        </a>
      </div>
      <img src="../assets/images/quemsomos.png" alt="" class="img-quem-somos">
    </div>

  </section>
</template>


<script>

// Import Swiper Vue.js components
 import { Swiper, SwiperSlide, } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay],
      };
      
    },
  data() {
    return {
      inputNome: "",
      contador: 0,
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.inputNome);
    },
    increment(event) {
      event.preventDefault();
      this.contador++;
    },
  },
};
</script>