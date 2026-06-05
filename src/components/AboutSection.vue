<template>
  <div class="relative bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-lg shadow-slate-200/40 overflow-hidden group/main transition-all duration-500 hover:shadow-xl">
    
    <!-- Ánh sáng nền -->
    <div class="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full bg-blue-100/40 blur-3xl pointer-events-none transition-transform duration-1000 group-hover/main:translate-x-3 group-hover/main:translate-y-3"></div>
    <div class="absolute bottom-0 left-0 -ml-10 -mb-10 w-48 h-48 rounded-full bg-indigo-50/40 blur-3xl pointer-events-none transition-transform duration-1000 group-hover/main:-translate-x-3 group-hover/main:-translate-y-3"></div>

    <div class="relative z-10">
      
      <!-- Tiêu đề & Icon -->
      <div class="flex items-center gap-4 mb-5">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex justify-center items-center shadow-md shadow-blue-500/20 transform -rotate-6 group-hover/main:rotate-0 transition-transform duration-500 shrink-0">
          <i class="fa-solid fa-laptop-code text-lg"></i>
        </div>
        <div>
          <h2 class="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
            Xin chào, tôi là Đăng Khoa
          </h2>
          <p class="text-[10px] font-bold text-blue-500 mt-0.5 tracking-wider uppercase">Software Developer</p>
        </div>
      </div>
      
      <!-- Lời tựa -->
      <div class="relative pl-5 py-1 mb-6">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
        <p class="text-slate-600 leading-relaxed font-medium text-sm">
          Lập trình viên Web & Application với tư duy hệ thống vững chắc. Tôi đam mê xây dựng các ứng dụng web thực tế, tối ưu hóa hiệu năng và mang lại trải nghiệm mượt mà nhất.
        </p>
      </div>
      
      <!-- Grid Bento Boxes (Nội dung dài, căn items-start) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- 1. Triết lý -->
        <div class="relative bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:bg-white hover:border-amber-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <div class="bg-amber-100 text-amber-600 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <div class="flex-1 min-w-0 mt-0.5">
            <h4 class="font-bold text-slate-800 text-xs mb-1.5 uppercase tracking-wide flex justify-between items-center">
              Triết lý
              <i class="fa-solid fa-arrow-right text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-amber-500 transition-all duration-300"></i>
            </h4>
            <p class="text-[12px] text-slate-500 leading-relaxed font-medium">
              Hướng tới kiến trúc <strong class="text-slate-700">Clean Code</strong>, chú trọng tối ưu cấu trúc dữ liệu, hiệu suất hệ thống và đảm bảo mã nguồn dễ dàng mở rộng, bảo trì dài hạn.
            </p>
          </div>
        </div>

        <!-- 2. Đang học -->
        <div class="relative bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:bg-white hover:border-emerald-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <div class="bg-emerald-100 text-emerald-600 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-seedling"></i>
          </div>
          <div class="flex-1 min-w-0 mt-0.5">
            <h4 class="font-bold text-slate-800 text-xs mb-1.5 uppercase tracking-wide flex justify-between items-center">
              Đang học
              <i class="fa-solid fa-arrow-right text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500 transition-all duration-300"></i>
            </h4>
            <p class="text-[12px] text-slate-500 leading-relaxed font-medium">
              Tập trung nghiên cứu sâu về <strong class="text-slate-700">TypeScript</strong> để kiểm soát kiểu dữ liệu chặt chẽ, nền tảng <strong class="text-slate-700">Next.js</strong> và các mẫu kiến trúc System Design.
            </p>
          </div>
        </div>

        <!-- 3. Mục tiêu -->
        <div class="relative bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:bg-white hover:border-rose-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <div class="bg-rose-100 text-rose-600 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-bullseye"></i>
          </div>
          <div class="flex-1 min-w-0 mt-0.5">
            <h4 class="font-bold text-slate-800 text-xs mb-1.5 uppercase tracking-wide flex justify-between items-center">
              Mục tiêu
              <i class="fa-solid fa-arrow-right text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-rose-500 transition-all duration-300"></i>
            </h4>
            <p class="text-[12px] text-slate-500 leading-relaxed font-medium">
              Phấn đấu trở thành một <strong class="text-slate-700">Junior Full-stack Developer</strong> vững chuyên môn, có khả năng bao quát và xử lý mượt mà cả hai mảng Frontend và Backend.
            </p>
          </div>
        </div>

        <!-- 4. Thói quen -->
        <div class="relative bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:bg-white hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <div class="bg-indigo-100 text-indigo-600 w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <i class="fa-solid fa-mug-hot"></i>
          </div>
          <div class="flex-1 min-w-0 mt-0.5">
            <h4 class="font-bold text-slate-800 text-xs mb-1.5 uppercase tracking-wide flex justify-between items-center">
              Thói quen
              <i class="fa-solid fa-arrow-right text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-indigo-500 transition-all duration-300"></i>
            </h4>
            <p class="text-[12px] text-slate-500 leading-relaxed font-medium">
              Thích tìm tòi các công nghệ mới, viết blog chia sẻ kiến thức, và giữ thói quen đi <strong class="text-slate-700">Cafe & Code</strong> dịp cuối tuần để tìm cảm hứng sáng tạo.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>