<template>
    <section class="page-quem-somos">
        <!-- <div class="parallax-window" data-z-index="1" data-parallax="scroll" data-image-src="../assets/images/banner-quemsomos.png">
            <span class="titulo-quem-somos">QUEM SOMOS</span>
        </div> -->
        <div class="banner">
            <img src="../assets/images/banner-quemsomos.png" alt="" class="img-parallax">
            <span class="titulo-quem-somos">QUEM SOMOS</span>
        </div>
        <div class="conteudo-quem-somos">
            <div class="petshop">
                <span class="titulo-petshop">Petshop Bicho Limpinho</span>
                <p class="desc-petshop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum laudantium
                    id, tempore voluptatibus adipisci, numquam perferendis excepturi expedita officia fugit sequi ea
                    veniam modi possimus assumenda nostrum sed distinctio! Et asperiores repellendus expedita odio
                    eveniet sequi iure totam quis est, consectetur voluptatibus harum quam fugit culpa rerum magni quos
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum laudantium id, tempore
                    voluptatibus adipisci, numquam perferendis excepturi expedita officia fugit sequi ea veniam modi
                    possimus assumenda nostrum sed distinctio! Et asperiores repellendus expedita odio eveniet sequi
                    iure totam quis est, consectetur voluptatibus harum quam fugit culpa rerum magni quos
                </p>
                <div class="imgs-petshop">
                    <img src="../assets/images/img-petshop.png" alt="" class="img-petshop">
                    <img src="../assets/images/img-petshop.png" alt="" class="img-petshop">
                    <img src="../assets/images/img-petshop.png" alt="" class="img-petshop">
                </div>

            </div>
            <div class="atendimento">
                <span class="titulo-atendimento">Atendimento</span>
                <p class="desc-atendimento">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum
                    laudantium id, tempore voluptatibus adipisci, numquam perferendis excepturi expedita officia fugit
                    sequi ea veniam modi possimus assumenda nostrum sed distinctio! Et asperiores repellendus expedita
                    odio eveniet sequi iure totam quis est, consectetur voluptatibus harum quam fugit culpa rerum magni
                    quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum laudantium id, tempore
                    voluptatibus adipisci, numquam perferendis excepturi expedita officia fugit sequi ea veniam modi
                    possimus assumenda nostrum sed distinctio! Et asperiores repellendus expedita odio eveniet sequi
                    iure totam quis est, consectetur voluptatibus harum quam fugit culpa rerum magni quos
                </p>
                <div class="imgs-atendimento">
                    <img src="../assets/images/img-atendimento.png" alt="" class="img-atendimento">
                    <img src="../assets/images/img-atendimento.png" alt="" class="img-atendimento">
                    <img src="../assets/images/img-atendimento.png" alt="" class="img-atendimento">
                </div>
            </div>
            <div class="equipe">
                <span class="titulo-equipe">Equipe</span>
                <p class="desc-equipe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum
                    laudantium id, tempore voluptatibus adipisci, numquam perferendis excepturi expedita officia fugit
                    sequi ea veniam modi possimus assumenda nostrum sed distinctio! Et asperiores repellendus expedita
                    odio eveniet sequi iure totam quis est, consectetur voluptatibus harum quam fugit culpa rerum magni
                    quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum laudantium id, tempore
                    voluptatibus adipisci, numquam perferendis excepturi expedita officia fugit sequi ea veniam modi
                    possimus assumenda nostrum sed distinctio! Et asperiores repellendus expedita odio eveniet sequi
                    iure totam quis est, consectetur voluptatibus harum quam fugit culpa rerum magni quos
                </p>
                <div class="imgs-equipe">
                    <img src="../assets/images/img-equipe.png" alt="" class="img-equipe">
                    <img src="../assets/images/img-equipe.png" alt="" class="img-equipe">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SimpleParallax from "simple-parallax-js/vanilla";

export default {
    name: 'QuemSomosPage',
    mounted() {
        console.log(SimpleParallax)
        var images = document.querySelectorAll('.img-parallax');
        new SimpleParallax(images, {
            delay: 1,
            transition: 'cubic-bezier(0,0,0,1)',
            scale: 1.2,
        });
    }
}

</script>