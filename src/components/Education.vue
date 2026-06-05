<template>
  <div class="relative bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-lg shadow-slate-200/40 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
    
    <div class="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-slate-50 blur-2xl pointer-events-none"></div>

    <div class="flex items-center gap-4 mb-8 relative z-10">
      <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shadow-inner">
        <i class="fa-solid fa-graduation-cap text-xl"></i>
      </div>
      <h2 class="text-xl font-black text-slate-800 tracking-tight">Học vấn & Đồ án</h2>
    </div>

    <div class="relative border-l-2 border-slate-100 ml-4 pl-6 space-y-10">
      
      <div class="relative group">
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></span>
        
        <div class="group-hover:translate-x-1 transition-transform duration-300">
          <h3 class="font-black text-slate-800 text-base group-hover:text-blue-600 transition-colors">Đại học Thành Đô</h3>
          <p class="text-blue-600 text-base font-bold mt-0.5">CNTT (Lập trình phần mềm và Web)</p>
          <p class="text-slate-400 text-sm mt-1 font-medium flex items-center gap-1.5">
            <i class="fa-regular fa-calendar-days"></i> 08/2025 - Đang học
          </p>
          
          <div class="mt-4 grid grid-cols-1 gap-3">
            <div class="p-3 bg-blue-50/50 border border-blue-100 rounded-lg">
              <div class="flex items-center gap-2 text-[11px] font-bold text-blue-700 mb-1.5">
                <i class="fa-solid fa-robot text-blue-500"></i> AI Biometric System
              </div>
              <p class="text-[11px] text-slate-600 leading-relaxed font-medium">
                Ứng dụng AI nhận diện khuôn mặt và vân tay để điểm danh, tích hợp bảo mật sinh trắc học vào hệ thống quản lý.
              </p>
            </div>
            <div class="grid grid-cols-1 gap-2">
              <div class="px-3 py-2 bg-blue-50/50 border border-blue-100 rounded-lg text-[11px] font-bold text-blue-700">
                <i class="fa-solid fa-code"></i> dangKhoaUni-Frontend: Phát triển giao diện người dùng bằng Vue3 và Tailwind.
              </div>
              <div class="px-3 py-2 bg-blue-50/50 border border-blue-100 rounded-lg text-[11px] font-bold text-blue-700">
                <i class="fa-solid fa-database"></i> dangKhoaUni-Backend: Xây dựng RESTful API xử lý dữ liệu sinh viên tập trung.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative group">
        <span class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300"></span>
        
        <div class="group-hover:translate-x-1 transition-transform duration-300">
          <h3 class="font-black text-slate-800 text-base group-hover:text-orange-600 transition-colors">FPT Polytechnic</h3>
          <p class="text-orange-600 text-base font-bold mt-0.5">Phát triển phần mềm</p>
          <p class="text-slate-400 text-sm mt-1 font-medium flex items-center gap-1.5">
            <i class="fa-regular fa-calendar-days"></i> 08/2022 - 02/2025
          </p>
          
          <div class="mt-4 grid grid-cols-1 gap-3">
            <div class="px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl font-bold text-amber-800 shadow-sm shadow-amber-100">
              <div class="flex items-center justify-between text-[12px] mb-2">
                <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-500"></i> Dự án Tốt nghiệp: Bán vé xem phim</span>
                <span class="text-[9px] bg-amber-500 text-white px-2 py-0.5 rounded-md">Featured</span>
              </div>
              <p class="text-[11px] font-medium text-amber-900/80 leading-relaxed">
                Hệ thống đặt vé xem phim online đầy đủ tính năng: chọn ghế, thanh toán VNPAY, tích hợp gửi vé qua Email và QR Code.
              </p>
            </div>
            
            <div class="grid grid-cols-1 gap-2">
              <div class="px-3 py-2 bg-orange-50/50 border border-orange-100 rounded-lg text-[11px] font-bold text-orange-700">
                <i class="fa-solid fa-cash-register mr-1"></i> pos_app: Ứng dụng POS quản lý bán hàng tại quầy, thống kê báo cáo theo ngày.
              </div>
              <div class="px-3 py-2 bg-orange-50/50 border border-orange-100 rounded-lg text-[11px] font-bold text-orange-700">
                <i class="fa-solid fa-road mr-1"></i> Road-to-Fullstack: Kho kiến thức cá nhân, tổng hợp các module reusable UI/UX.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>