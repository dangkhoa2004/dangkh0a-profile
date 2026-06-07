<template>
  <div>
    <div class="h-32 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 relative">
      <button class="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex justify-center items-center text-white transition-colors" title="Chia sẻ hồ sơ">
        <i class="fa-solid fa-share-nodes text-sm"></i>
      </button>
    </div>

    <div class="relative -mt-16 flex justify-center z-10 px-8">
      <div class="relative group cursor-pointer">
        <img src="@/assets/avatar.jpg" alt="Cao Đăng Khoa" class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
        <span class="absolute bottom-2 right-2 flex h-5 w-5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white" title="Sẵn sàng làm việc"></span>
        </span>
      </div>
    </div>

    <div class="p-8 pt-4 pb-0">
      <div class="text-center">
        <h1 class="text-2xl font-black text-slate-900 tracking-tight flex justify-center items-center gap-1.5">
          CAO ĐĂNG KHOA
          <i class="fa-solid fa-circle-check text-blue-500 text-lg" title="Verified Professional"></i>
        </h1>
        <p class="text-slate-500 font-medium text-sm mt-1">@dangkhoa2004</p>
        <div class="mt-4 flex justify-center">
          <span class="px-4 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-full border border-slate-200 shadow-inner flex items-center gap-2">
            🚀 Junior Full-stack Developer
          </span>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-3">
        <a href="/CAODANGKHOA_CV.pdf" download class="bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-blue-600/30 flex justify-center items-center gap-2">
          <i class="fa-solid fa-cloud-arrow-down"></i> Tải CV
        </a>
        <a href="mailto:caodangkhoa.dev@gmail.com" class="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 py-2.5 rounded-xl text-sm font-bold transition-all flex justify-center items-center gap-2">
          <i class="fa-solid fa-paper-plane text-slate-600"></i> Liên hệ
        </a>
      </div>

      <div class="mt-4 flex justify-center gap-3">
        <a href="https://github.com/dangkhoa2004" target="_blank" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center text-slate-600 hover:bg-slate-800 hover:text-white transition-colors shadow-sm">
          <i class="fa-brands fa-github text-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/%C4%91%C4%83ng-khoa-cao-94051a390/" target="_blank" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
          <i class="fa-brands fa-linkedin-in text-lg"></i>
        </a>
        <a href="https://www.facebook.com/dangkh0a2004" target="_blank" class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex justify-center items-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>