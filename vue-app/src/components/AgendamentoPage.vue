<template>
  <section class="page-agendamento">
    <div class="banner">
      <img
        src="../assets/images/banner-agendamento.png"
        alt=""
        class="img-parallax"
      />
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
        <div class="input input-calendario">
          <label for="calend">Selecione um horário disponível</label>
          <div id="calend">
            <!-- <input id="date" type="date" /> -->
            <FullCalendar
              :options="calendarOptions"
            />
          </div>
        </div>
        <hr />
        <div class="input">
          <label for="infos">Informações adicionais (Opcional)</label>
          <textarea name="infos" id="infos" rows="10" cols="30"></textarea>
        </div>
        <div class="input">
          <label for="telefone">Telefone</label>
          <input type="text" id="telefone" />
        </div>
        <button class="btn-enviar" type="submit">Agendar</button>
      </form>
    </div>
  </section>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptLocale from '@fullcalendar/core/locales/pt'

export default {
  name: "AgendamentoPage",
  components: {
    FullCalendar,
  },
  data() {
    return {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth, dayGridWeek, dayGridDay",
      },
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locale: ptLocale,
        dateClick: this.handleDateClick,
        
        events: [
          { title: "Evento 1", date: "2024-10-23" },
          { title: "Evento 2", date: "2024-10-24" },
        ],
      },
    };
  },
  methods: {
    enviaForm() {
      console.log("enviado");
    },
    handleDateClick: function (arg) {
      console.log("date click! " + arg.dateStr);
    },
  },
};
</script>