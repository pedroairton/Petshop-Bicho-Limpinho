<template>
    <section class="page-agendamento">
        <div class="banner">
            <img src="../assets/images/banner-agendamento.png" alt="" class="img-parallax">
            <span class="titulo-banner">AGENDAMENTO</span>
        </div>
        <div class="conteudo-agendamento">
            <form action="" class="form-agendamento" @submit.prevent="enviaForm">
                <h2 class="titulo-form">Formulário de Agendamento</h2>
                <div class="input">
                    <label for="petSelect">Selecione o pet a ser agendado</label>
                    <select name="pet" id="petSelect">
                        <option value="0" selected disabled>Selecione o pet</option>
                        <option value="1">Pet1</option>
                        <option value="2">Pet2</option>
                    </select>
                </div>
                <div class="input">
                    <label for="servSelect">Selecione o serviço</label>
                    <select name="serv" id="servSelect">
                        <option value="0" selected disabled>Selecione o serviço</option>
                        <option value="1">Banho</option>
                        <option value="2">Tosa</option>
                    </select>
                </div>
                <div class="input">
                    <label for="calend">Selecione um horário disponível</label>
                    <div id="calend">
                        <input id="date" type="date" />

                    </div>
                </div>
                <hr>
                <div class="input">
                    <label for="infos">Informações adicionais (Opcional)</label>
                    <textarea name="infos" id="infos" rows="10" cols="30"></textarea>
                </div>
                <div class="input">
                    <label for="telefone">Telefone</label>
                    <input type="text" id="telefone">
                </div>
                <button class="btn-enviar" type="submit">Agendar</button>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AgendamentoPage',
        methods: {
            enviaForm(){
                console.log('enviado')
            },
        }
    }
</script>