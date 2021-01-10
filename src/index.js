import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './pages/app';
import home from './pages/home';
import resume from './pages/resume';
import portfolio from './pages/portfolio';
import project from './pages/project';
import page_not_found from './pages/page_not_found';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'home', component: home },
	{ path: '/portfolio', name: 'portfolio', component: portfolio },
	{ path: '/portfolio/:slug', name: 'project', component: project },
	{ path: '/resume', name: 'resume', component: resume },
	{ path: '*', component: page_not_found }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	el: '#app',
	components: { app },
	template: '<app/>',
	router
}).$mount('#app');
