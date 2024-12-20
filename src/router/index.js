import { createRouter, createWebHistory  } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import NavBar from "@/components/NavBar.vue";
import LoginPage from "@/components/LoginPage.vue";
import QuemSomosPage from "@/components/QuemSomosPage.vue";
import CadastroPage from "@/components/CadastroPage.vue";
import PerfilPage from "@/components/PerfilPage.vue";
import PetPerfil from "@/components/PetPerfil.vue";
import AgendamentoPage from "@/components/AgendamentoPage.vue";
import GerenciadorCont from "@/components/GerenciadorCont.vue";
import GerenciadorHome from "@/components/GerenciadorHome.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/navbar',
        name: 'NavBar',
        component: NavBar,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: CadastroPage,
    },
    {
        path: '/quem-somos',
        name: 'QuemSomos',
        component: QuemSomosPage,
    },
    {
        path: '/perfil',
        name: 'PerfilPage',
        component: PerfilPage,
    },
    {
        path: '/perfil/perfil-pet/:id',
        name: 'PetPerfil',
        component: PetPerfil,
        props: true
    },
    {
        path: '/agendamento',
        name: 'AgendamentoPage',
        component: AgendamentoPage,
    },
    {
        path: '/gc',
        name: 'GerenciadorCont',
        component: GerenciadorCont,
    },
    {
        path: '/gc/menu',
        name: 'GerenciadorHome',
        component: GerenciadorHome,
        // children: [
        //     {
        //         path: ''
        //     }
        // ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router