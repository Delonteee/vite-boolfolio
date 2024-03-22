import {createRouter , createWebHistory} from 'vue-router'; //Creiamo router e webhistory

import IndexPage from './pages/IndexPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexPage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsPage,
        },
        {
            path: '/projects/:slug', 
            name: 'projects.show',
            component: SingleProjectPage,
        },
        {
            path: '/contacts', 
            name: 'contacts.index',
            component: ContactPage,
        },
    ]
});

export {router};