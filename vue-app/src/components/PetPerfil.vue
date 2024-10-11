<template>
    <section class="page-perfil-pet">
        <div class="pet">
            <div class="imagem-pet">
                <img src="../assets/images/pet2.png" alt="" class="img-pet">
                <span class="tipo-pet">Cachorro</span>
            </div>
            <img src="../assets/images/cachorroIcon.png" alt="" class="icon-pet">
            <div class="infos-pet">
                <h1 class="nome-pet">Nome do pet</h1>
                <span class="raca">Raça</span>
                <span class="idade">Idade</span>
                <span class="peso">Peso</span>
                <span class="sexo">Sexo</span>
            </div>
        </div>
        <div class="tabelas">
            <div class="tabela">
                <span class="titulo-tabela">Atendimentos Agendados</span>
                <table>
                    <tr>
                        <th>Banho</th>
                        <th>19h00</th>
                        <th>19/08/2024</th>
                    </tr>
                    <tr>
                        <th>Tosagem</th>
                        <th>13h30</th>
                        <th>18/08/2024</th>
                    </tr>
                    <tr>
                        <th>Vacinação</th>
                        <th>14h00</th>
                        <th>10/08/2024</th>
                    </tr>
                </table>
            </div>
            <div class="tabela">
                <span class="titulo-tabela">Histórico de Atendimento</span>
                <table>
                    <tr>
                        <th>Consulta</th>
                        <th>12h30</th>
                        <th>10/10/2024</th>
                    </tr>
                    <tr>
                        <th>Tosagem</th>
                        <th>13h30</th>
                        <th>20/10/2024</th>
                    </tr>
                    <tr>
                        <th>Vacinação</th>
                        <th>16h00</th>
                        <th>16/10/2024</th>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PetPerfil",
    }
</script>