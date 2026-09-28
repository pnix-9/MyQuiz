import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // 1. Import router functions
import App from './App.vue';
import home from './home1.vue';

// 2. Define your routes correctly
const routes = [
  {
    path: '/test-component',
    component: home,
  }
];

// 3. Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 4. Declare app and use router properly
const app = createApp(App);
app.use(router);
app.mount('#app');