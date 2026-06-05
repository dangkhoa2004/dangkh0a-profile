<template>
  <div class="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-lg shadow-slate-200/40">
    <h2 class="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
      <i class="fa-solid fa-rocket text-blue-600"></i> Tất cả Dự án ({{ projects.length }})
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProjectCard v-for="proj in projects" :key="proj.name" v-bind="proj" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
  { name: 'Road-to-Fullstack', desc: 'Lộ trình kiến thức và các module Fullstack.', tech: 'Vue', icon: 'fa-solid fa-road', bg: 'bg-emerald-100 text-emerald-600', image: 'Road-to-Fullstack.jpg', role: 'Fullstack Developer', details: 'Xây dựng hệ thống module hóa kiến thức, tối ưu UI/UX.' },
  { name: 'neo_dashboard', desc: 'Giao diện quản trị hiện đại.', tech: 'Vue', icon: 'fa-solid fa-gauge', bg: 'bg-purple-100 text-purple-600', image: 'neo_dashboard.jpg', role: 'Frontend Developer', details: 'Admin Dashboard tối ưu hóa khả năng hiển thị dữ liệu.' },
  { name: 'batdongsantoancau', desc: 'Nền tảng đăng tin bất động sản.', tech: 'PHP', icon: 'fa-solid fa-house', bg: 'bg-rose-100 text-rose-600', image: 'batdongsantoancau.jpg', role: 'Developer', details: 'Hệ thống quản lý đăng tin bất động sản, tối ưu SEO.' },
  { name: 'phamduong_project_2', desc: 'Dự án cá nhân 2.', tech: 'JS', icon: 'fa-solid fa-code', bg: 'bg-slate-100 text-slate-600', image: 'phamduong_project_2.jpg', role: 'Developer', details: 'Dự án thực nghiệm các kỹ thuật lập trình nâng cao.' },
  { name: 'dangkhoa_project', desc: 'Dự án tổng hợp.', tech: 'Various', icon: 'fa-solid fa-folder', bg: 'bg-slate-100 text-slate-600', image: 'dangkhoa_project.jpg', role: 'Developer', details: 'Dự án cá nhân lưu trữ các module hữu ích.' },
  { name: 'dangkhoa2004', desc: 'Profile cá nhân.', tech: 'HTML/CSS', icon: 'fa-solid fa-user', bg: 'bg-blue-100 text-blue-600', image: 'dangkhoa2004.jpg', role: 'Owner', details: 'Portfolio cá nhân thể hiện kỹ năng lập trình.' },
  { name: 'dangkh0a-minecraft-server', desc: 'Hệ thống server game Minecraft.', tech: 'Java', icon: 'fa-solid fa-cubes', bg: 'bg-orange-100 text-orange-600', image: 'dangkh0a-minecraft-server.jpg', role: 'Server Admin', details: 'Quản lý server, plugin và tối ưu Database.' },
  { name: 'VietNam_Trip_2025', desc: 'Lịch trình du lịch văn hóa.', tech: 'Docs', icon: 'fa-solid fa-map', bg: 'bg-sky-100 text-sky-600', image: 'VietNam_Trip_2025.jpg', role: 'Researcher', details: 'Tài liệu chi tiết về các địa điểm di sản Việt Nam.' },
  { name: 'TouringList_2025', desc: 'Danh sách các điểm đến du lịch.', tech: 'JS', icon: 'fa-solid fa-list', bg: 'bg-sky-100 text-sky-600', image: 'TouringList_2025.jpg', role: 'Developer', details: 'Ứng dụng ghi chú và lên kế hoạch du lịch.' },
  { name: 'dangKhoaUni_backend', desc: 'Backend quản lý đại học.', tech: 'Node.js', icon: 'fa-solid fa-database', bg: 'bg-indigo-100 text-indigo-600', image: 'dangKhoaUni_backend.jpg', role: 'Backend Dev', details: 'Xây dựng API quản lý sinh viên với hiệu suất cao.' },
  { name: 'find-dangkh0a', desc: 'Dự án tìm kiếm cá nhân.', tech: 'JS', icon: 'fa-solid fa-search', bg: 'bg-slate-100 text-slate-600', image: 'find-dangkh0a.jpg', role: 'Developer', details: 'Công cụ tìm kiếm thông tin cá nhân.' },
  { name: 'BanDoNoiThat', desc: 'Dự án bán đồ nội thất.', tech: 'PHP', icon: 'fa-solid fa-couch', bg: 'bg-amber-100 text-amber-600', image: 'BanDoNoiThat.jpg', role: 'Developer', details: 'Cửa hàng nội thất trực tuyến với giỏ hàng.' },
  { name: 'frontend-cineboo', desc: 'Dự án tốt nghiệp: Đặt vé xem phim.', tech: 'React', icon: 'fa-solid fa-ticket', bg: 'bg-amber-100 text-amber-600', image: 'frontend-cineboo.jpg', role: 'Fullstack Dev', details: 'Hệ thống đặt vé phim online, VNPAY, QR Code.' },
  { name: 'dangKhoaUni-Frontend', desc: 'Frontend quản lý đại học.', tech: 'Vue', icon: 'fa-solid fa-graduation-cap', bg: 'bg-indigo-100 text-indigo-600', image: 'dangKhoaUni-Frontend.jpg', role: 'Frontend Dev', details: 'Vue3 Dashboard cho quản lý học sinh.' },
  { name: 'HTML', desc: 'Bộ sưu tập templates HTML.', tech: 'HTML', icon: 'fa-brands fa-html5', bg: 'bg-orange-100 text-orange-600', image: 'HTML.jpg', role: 'Designer', details: 'Templates HTML cơ bản và nâng cao.' },
  { name: 'badge-preview-service', desc: 'Service tạo và xem trước badge.', tech: 'JS', icon: 'fa-solid fa-id-badge', bg: 'bg-pink-100 text-pink-600', image: 'badge-preview-service.jpg', role: 'Developer', details: 'Tạo ảnh badge tự động từ API.' },
  { name: 'pos_app', desc: 'Ứng dụng quản lý bán hàng POS.', tech: 'JS', icon: 'fa-solid fa-cash-register', bg: 'bg-emerald-100 text-emerald-600', image: 'pos_app.jpg', role: 'Developer', details: 'POS quản lý tồn kho và báo cáo doanh thu.' }
];
</script>