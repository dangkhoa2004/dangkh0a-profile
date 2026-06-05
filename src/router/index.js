import { createRouter, createWebHistory } from 'vue-router';
import TrangChu from '../view/TrangChu.vue'; 

const routes = [
  // Thêm route này để đẩy từ / về /trang-chu
  { path: '/', redirect: '/trang-chu' },
  
  // Route chính của bạn
  { path: '/trang-chu', component: TrangChu }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;