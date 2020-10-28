import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/App';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/portfolio', name: 'portfolio', component: Portfolio },
	{ path: '/portfolio/:name', name: 'project', component: Project },
	{ path: '/articles', name: 'articles', component: Articles }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	document.title = 'GitHub Check System Kevin Justal 2';
	next();
});

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
	router
}).$mount('#app');
