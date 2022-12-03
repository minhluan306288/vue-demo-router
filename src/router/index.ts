import { createRouter, createWebHistory} from "vue-router";
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
const routes: any = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
    

export default router;