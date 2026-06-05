<template>
  <div
    class="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all hover:shadow-2xl">

    <!-- 1. Ảnh bìa (Cover Banner) -->
    <div class="h-32 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 relative">
      <button
        class="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex justify-center items-center text-white transition-colors"
        title="Chia sẻ hồ sơ">
        <i class="fa-solid fa-share-nodes text-sm"></i>
      </button>
    </div>

    <!-- 2. Avatar & Trạng thái -->
    <div class="relative -mt-16 flex justify-center z-10 px-8">
      <div class="relative group cursor-pointer">
        <img src="@/assets/avatar.jpg" alt="Cao Đăng Khoa"
          class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
        <span class="absolute bottom-2 right-2 flex h-5 w-5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white"
            title="Sẵn sàng làm việc"></span>
        </span>
      </div>
    </div>

    <!-- Nội dung chính -->
    <div class="p-8 pt-4">
      <!-- 3. Tên & Title -->
      <div class="text-center">
        <h1 class="text-2xl font-black text-slate-900 tracking-tight flex justify-center items-center gap-1.5">
          CAO ĐĂNG KHOA
          <i class="fa-solid fa-circle-check text-blue-500 text-lg" title="Verified Professional"></i>
        </h1>
        <p class="text-slate-500 font-medium text-sm mt-1">@dangkhoa2004</p>

        <div class="mt-4 flex justify-center">
          <span
            class="px-4 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full border border-slate-200 shadow-inner flex items-center gap-2">
            🚀 Junior Full-stack Developer
          </span>
        </div>
      </div>

      <!-- 4. Nút Hành động chính -->
      <div class="mt-6 grid grid-cols-2 gap-3">
        <a href="/CAODANGKHOA_CV.pdf" download
          class="bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-blue-600/30 flex justify-center items-center gap-2">
          <i class="fa-solid fa-cloud-arrow-down"></i> Tải CV
        </a>
        <a href="mailto:caodangkhoa.dev@gmail.com"
          class="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 py-2.5 rounded-xl text-sm font-bold transition-all flex justify-center items-center gap-2">
          <i class="fa-solid fa-paper-plane text-slate-600"></i> Liên hệ
        </a>
      </div>

      <!-- Cụm Mạng xã hội -->
      <div class="mt-4 flex justify-center gap-3">
        <a href="https://github.com/dangkhoa2004" target="_blank"
          class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center text-slate-600 hover:bg-slate-800 hover:text-white transition-colors shadow-sm">
          <i class="fa-brands fa-github text-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-khoa-cao-94051a390/"
          class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
          <i class="fa-brands fa-linkedin-in text-lg"></i>
        </a>
        <a href="https://www.facebook.com/dangkh0a2004"
          class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
      </div>

      <hr class="border-slate-100 my-6">

      <!-- 5. Thông tin chi tiết -->
      <div class="grid grid-cols-1 gap-4 text-sm text-slate-600 font-medium">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex justify-center items-center"><i
              class="fa-solid fa-location-dot"></i></div>
          <span>Hải An, Hải Phòng, Việt Nam</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex justify-center items-center"><i
              class="fa-solid fa-phone"></i></div>
          <span>0388.375.154</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex justify-center items-center"><i
              class="fa-solid fa-envelope"></i></div>
          <span class="truncate">caodangkhoa.dev@gmail.com</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex justify-center items-center"><i
              class="fa-solid fa-clock"></i></div>
          <span>Timezone: GMT+7 (Vietnam Standard Time)</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex justify-center items-center"><i
              class="fa-solid fa-briefcase"></i></div>
          <span>Kinh nghiệm: <strong class="text-slate-900">1.5+ Năm</strong></span>
        </div>
      </div>

      <hr class="border-slate-100 my-6">

      <!-- 6. Thống kê GitHub -->
      <div
        class="flex justify-between items-center text-center bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">

        <!-- Repositories -->
        <div class="flex-1 flex flex-col items-center group cursor-pointer">
          <div class="flex justify-center mb-1">
            <i
              class="fa-solid fa-book-bookmark text-slate-400 group-hover:text-indigo-500 transition-colors text-lg"></i>
          </div>
          <p class="text-xl font-black text-slate-800 leading-tight">32</p>
          <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Repos</p>
        </div>

        <!-- Đường chia -->
        <div class="w-px h-10 bg-slate-200"></div>

        <!-- Stars -->
        <div class="flex-1 flex flex-col items-center group cursor-pointer">
          <div class="flex justify-center mb-1">
            <i class="fa-solid fa-star text-slate-400 group-hover:text-amber-400 transition-colors text-lg"></i>
          </div>
          <p class="text-xl font-black text-slate-800 leading-tight">12</p>
          <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Stars</p>
        </div>

        <!-- Đường chia -->
        <div class="w-px h-10 bg-slate-200"></div>

        <!-- Followers -->
        <div class="flex-1 flex flex-col items-center group cursor-pointer">
          <div class="flex justify-center mb-1">
            <i class="fa-solid fa-user-group text-slate-400 group-hover:text-blue-500 transition-colors text-lg"></i>
          </div>
          <p class="text-xl font-black text-slate-800 leading-tight">18</p>
          <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Followers</p>
        </div>

      </div>

      <hr class="border-slate-100 my-6">

      <!-- 7. Ngôn ngữ lập trình -->
      <div>
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <i class="fa-solid fa-code text-slate-300"></i> Top Languages
        </h3>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span class="flex items-center gap-1.5"><i class="fa-brands fa-vuejs text-emerald-500 text-sm"></i>
                Vue.js</span>
              <span>32.0%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
              <div class="bg-gradient-to-r from-emerald-400 to-emerald-600 h-1.5 rounded-full" style="width: 32%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span class="flex items-center gap-1.5"><i class="fa-brands fa-java text-orange-500 text-sm"></i> Java
                (Core)</span>
              <span>22.5%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
              <div class="bg-gradient-to-r from-orange-400 to-orange-600 h-1.5 rounded-full" style="width: 22.5%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span class="flex items-center gap-1.5"><i class="fa-brands fa-js text-yellow-500 text-sm"></i> JS /
                TS</span>
              <span>18.0%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
              <div class="bg-gradient-to-r from-yellow-400 to-blue-500 h-1.5 rounded-full" style="width: 18%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span class="flex items-center gap-1.5"><i class="fa-brands fa-php text-indigo-500 text-sm"></i> PHP
                (Laravel)</span>
              <span>12.0%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
              <div class="bg-gradient-to-r from-indigo-400 to-indigo-600 h-1.5 rounded-full" style="width: 12%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-c text-slate-500 text-sm"></i> C/C++ &
                C#</span>
              <span>7.0%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 shadow-inner">
              <div class="bg-gradient-to-r from-slate-400 to-slate-600 h-1.5 rounded-full" style="width: 7%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 8. Công cụ & Nền tảng -->
      <div class="mt-6 pt-6 border-t border-slate-100">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-slate-300"></i> Tools & Platforms
        </h3>
        <div class="flex flex-wrap gap-2">
          <!-- Systems & DevOps -->
          <span
            class="px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-[11px] font-bold border border-blue-100">Docker</span>
          <span
            class="px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-[11px] font-bold border border-blue-100">Linux</span>
          <span
            class="px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-[11px] font-bold border border-blue-100">Git</span>
          <span
            class="px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-[11px] font-bold border border-blue-100">XAMPP</span>

          <!-- Database -->
          <span
            class="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded text-[11px] font-bold border border-emerald-100">MySQL</span>
          <span
            class="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded text-[11px] font-bold border border-emerald-100">NoSQL</span>
          <span
            class="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded text-[11px] font-bold border border-emerald-100">Supabase</span>

          <!-- IoT & Network -->
          <span
            class="px-2.5 py-1 bg-purple-50 text-purple-600 rounded text-[11px] font-bold border border-purple-100">MQTT</span>
          <span
            class="px-2.5 py-1 bg-purple-50 text-purple-600 rounded text-[11px] font-bold border border-purple-100">WebSockets</span>
          <span
            class="px-2.5 py-1 bg-purple-50 text-purple-600 rounded text-[11px] font-bold border border-purple-100">TCP/IP</span>
          <span
            class="px-2.5 py-1 bg-purple-50 text-purple-600 rounded text-[11px] font-bold border border-purple-100">RTOS</span>

          <!-- Game & Design -->
          <span class="px-2.5 py-1 bg-rose-50 text-rose-600 rounded text-[11px] font-bold border border-rose-100">Unity
            Engine</span>
          <span
            class="px-2.5 py-1 bg-rose-50 text-rose-600 rounded text-[11px] font-bold border border-rose-100">Figma</span>
        </div>
      </div>

      <!-- 9. Kỹ năng mềm & Ngoại ngữ -->
      <div class="mt-6 pt-6 border-t border-slate-100">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <i class="fa-solid fa-star text-slate-300"></i> Soft Skills & Languages
        </h3>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Tư duy hệ thống</span>
              <span class="text-emerald-600">Tốt</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
              <div class="bg-gradient-to-r from-emerald-400 to-emerald-600 h-1.5 rounded-full" style="width: 85%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Giải quyết vấn đề</span>
              <span class="text-amber-600">Tốt</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
              <div class="bg-gradient-to-r from-amber-400 to-amber-600 h-1.5 rounded-full" style="width: 85%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Độc lập & Làm việc nhóm</span>
              <span class="text-indigo-600">Tốt</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
              <div class="bg-gradient-to-r from-indigo-400 to-indigo-600 h-1.5 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Quản lý dự án (Agile/Scrum)</span>
              <span class="text-purple-600">Trung bình</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
              <div class="bg-gradient-to-r from-purple-400 to-purple-600 h-1.5 rounded-full" style="width: 60%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>Tiếng Anh (Tài liệu chuyên ngành)</span>
              <span class="text-blue-600">Khá</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden shadow-inner">
              <div class="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 10. Sở thích & Phong cách sống -->
      <div class="mt-6 pt-6 border-t border-slate-100">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <i class="fa-solid fa-compass text-slate-300"></i> Lifestyle & Hobbies
        </h3>
        <div class="flex flex-col gap-2.5">
          <!-- Thể thao -->
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-rose-500"><i class="fa-solid fa-medal text-sm"></i></span>
            <span class="text-xs font-medium text-slate-600 leading-relaxed">
              <strong class="text-slate-800">Thể thao:</strong> Đam mê cầu lông & bóng đá.
            </span>
          </div>
          <!-- Đa phương tiện -->
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-purple-500"><i class="fa-solid fa-photo-film text-sm"></i></span>
            <span class="text-xs font-medium text-slate-600 leading-relaxed">
              <strong class="text-slate-800">Sáng tạo:</strong> Thiết kế UI/UX, Figma, chỉnh sửa video/audio (CapCut, FL
              Studio, DaVinci Resolve).
            </span>
          </div>
          <!-- Game -->
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-indigo-500"><i class="fa-solid fa-gamepad text-sm"></i></span>
            <span class="text-xs font-medium text-slate-600 leading-relaxed">
              <strong class="text-slate-800">Giải trí:</strong> Trải nghiệm game Steam, Minecraft & Game Indie.
            </span>
          </div>
          <!-- Du lịch -->
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-emerald-500"><i class="fa-solid fa-map-location-dot text-sm"></i></span>
            <span class="text-xs font-medium text-slate-600 leading-relaxed">
              <strong class="text-slate-800">Khám phá:</strong> Trải nghiệm du lịch văn hóa, di tích lịch sử (Tam Cốc,
              Hoa Lư...).
            </span>
          </div>
          <!-- Cafe -->
          <div class="flex items-start gap-2">
            <span class="mt-0.5 text-amber-600"><i class="fa-solid fa-mug-hot text-sm"></i></span>
            <span class="text-xs font-medium text-slate-600 leading-relaxed">
              <strong class="text-slate-800">F&B:</strong> Thích trải nghiệm các quán cafe không gian đẹp (Phê La,
              KAFA...).
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>