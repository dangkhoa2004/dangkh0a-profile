<template>
  <div class="flex justify-between items-center text-center bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div class="flex-1 flex flex-col items-center group cursor-pointer">
      <div class="flex justify-center mb-1">
        <i class="fa-solid fa-book-bookmark text-slate-400 group-hover:text-indigo-500 transition-colors text-lg"></i>
      </div>
      <p class="text-xl font-black text-slate-800 leading-tight">32</p>
      <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Repos</p>
    </div>

    <div class="w-px h-10 bg-slate-200"></div>

    <div class="flex-1 flex flex-col items-center group cursor-pointer">
      <div class="flex justify-center mb-1">
        <i class="fa-solid fa-star text-slate-400 group-hover:text-amber-400 transition-colors text-lg"></i>
      </div>
      <p class="text-xl font-black text-slate-800 leading-tight">12</p>
      <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Stars</p>
    </div>

    <div class="w-px h-10 bg-slate-200"></div>

    <div class="flex-1 flex flex-col items-center group cursor-pointer">
      <div class="flex justify-center mb-1">
        <i class="fa-solid fa-user-group text-slate-400 group-hover:text-blue-500 transition-colors text-lg"></i>
      </div>
      <p class="text-xl font-black text-slate-800 leading-tight">18</p>
      <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Followers</p>
    </div>
  </div>
</template>

<script setup>
</script>