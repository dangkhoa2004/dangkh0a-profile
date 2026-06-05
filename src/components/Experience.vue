<template>
  <div
    class="relative bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-lg shadow-slate-200/40 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">

    <!-- Họa tiết nền -->
    <div class="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50/50 blur-2xl pointer-events-none">
    </div>

    <div class="flex items-center gap-4 mb-8 relative z-10">
      <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
        <i class="fa-solid fa-briefcase text-xl"></i>
      </div>
      <h2 class="text-xl font-black text-slate-800 tracking-tight">Kinh nghiệm</h2>
    </div>

    <!-- Timeline Kinh nghiệm -->
    <div class="relative border-l-2 border-slate-100 ml-4 pl-6 space-y-8">

      <!-- Job 1 -->
      <div class="relative group">
        <span
          class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></span>

        <div class="group-hover:translate-x-1 transition-transform duration-300">
          <h3 class="font-black text-slate-800 text-base group-hover:text-blue-600 transition-colors">Ouransoft Hải
            Phòng</h3>
          <p class="text-blue-600 text-sm font-bold mt-0.5">Fullstack Developer</p>
          <p class="text-slate-400 text-xs mt-1 font-medium flex items-center gap-1.5">
            <i class="fa-regular fa-calendar-days"></i> 08/2024 - 04/2025
          </p>
          <p class="text-slate-600 text-[13px] mt-2.5 leading-relaxed font-medium">
            Xây dựng giải pháp kết nối IoT, thu thập dữ liệu từ hệ thống cảm biến công nghiệp truyền tải theo thời gian
            thực (MQTT, WebSockets, RTOS).
          </p>

          <div class="mt-3 flex flex-wrap gap-2">
            <a href="#" target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 rounded-lg text-[11px] font-bold transition-all shadow-sm">
              <i class="fa-solid fa-link"></i> Project IoT
            </a>
            <a href="#" target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-800 hover:text-white border border-slate-200 hover:border-slate-800 rounded-lg text-[11px] font-bold text-slate-600 transition-all shadow-sm">
              <i class="fa-brands fa-github text-sm"></i> Source Code
            </a>
          </div>
        </div>
      </div>

      <!-- Job 2 -->
      <div class="relative group">
        <span
          class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-300"></span>

        <div class="group-hover:translate-x-1 transition-transform duration-300">
          <h3 class="font-black text-slate-800 text-base group-hover:text-emerald-600 transition-colors">Game Indie với
            Unity</h3>
          <p class="text-emerald-600 text-sm font-bold mt-0.5">Game Developer</p>
          <p class="text-slate-400 text-xs mt-1 font-medium flex items-center gap-1.5">
            <i class="fa-regular fa-calendar-days"></i> 02/2024 - Hiện tại
          </p>
          <p class="text-slate-600 text-[13px] mt-2.5 leading-relaxed font-medium">
            Thiết kế môi trường, xử lý vật lý bằng C# và hệ thống chuyển động cho nhân vật trong game.
          </p>

          <div class="mt-3 flex flex-wrap gap-2">
            <a href="#" target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 border border-slate-200 hover:border-emerald-200 rounded-lg text-[11px] font-bold transition-all shadow-sm">
              <i class="fa-solid fa-gamepad"></i> Demo Game
            </a>
          </div>
        </div>
      </div>

      <!-- Job 3 -->
      <div class="relative group">
        <span
          class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300"></span>

        <div class="group-hover:translate-x-1 transition-transform duration-300">
          <h3 class="font-black text-slate-800 text-base group-hover:text-purple-600 transition-colors">Game Server Dev
          </h3>
          <p class="text-purple-600 text-sm font-bold mt-0.5">Backend / Logic Programmer</p>
          <p class="text-slate-400 text-xs mt-1 font-medium flex items-center gap-1.5">
            <i class="fa-regular fa-calendar-days"></i> 08/2018 - Hiện tại
          </p>
          <p class="text-slate-600 text-[13px] mt-2.5 leading-relaxed font-medium">
            Phát triển & vận hành hệ thống Server game (Minecraft, Ngọc Rồng, Làng Lá). Tối ưu hóa Database và quản lý
            server Linux/Docker.
          </p>

          <div class="mt-3 flex flex-wrap gap-2">

            <!-- Làng Lá Server (Icon Phi tiêu Ninja) -->
            <a href="#" target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 hover:border-purple-200 rounded-lg text-[11px] font-bold transition-all shadow-sm">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
              </svg>
              Làng Lá Server
            </a>

            <!-- Ngọc Rồng Server (Icon Viên Ngọc Rồng) -->
            <a href="#" target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 hover:border-purple-200 rounded-lg text-[11px] font-bold transition-all shadow-sm">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12S6.477 22 12 22 22 17.523 22 12 17.523 2 12 2Zm0 15.5l-3.5 2 1-4-3-2.5 4-.5 1.5-3.5 1.5 3.5 4 .5-3 2.5 1 4-3.5-2z" />
              </svg>
              Ngọc Rồng Server
            </a>

            <!-- Minecraft Server (Icon Khối Block 3D) -->
            <a href="#" target="_blank"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-600 border border-slate-200 hover:border-purple-200 rounded-lg text-[11px] font-bold transition-all shadow-sm">
              <svg class="w-3.5 h-3.5 stroke-current" fill="none" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" viewBox="0 0 24 24">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              Minecraft Server
            </a>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>