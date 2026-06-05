<template>
  <div class="relative w-full h-[180px] perspective-1000">
    <div class="group relative w-full h-full transition-all duration-500 hover:scale-[1.05] hover:z-[999]">
      
      <div class="absolute inset-0 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm transition-opacity duration-300 group-hover:opacity-0 backface-hidden">
        <div class="flex items-center gap-3 mb-3">
          <div :class="'w-10 h-10 rounded-xl flex items-center justify-center ' + bg">
            <i :class="icon + ' text-sm'"></i>
          </div>
          <h4 class="font-bold text-slate-900 text-sm truncate">{{ name }}</h4>
        </div>
        <p class="text-xs text-slate-500 mb-4 h-8 line-clamp-2 font-medium">{{ desc }}</p>
        <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{{ tech }}</span>
      </div>

      <div class="absolute inset-0 bg-white border border-blue-300 p-4 rounded-2xl shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 flex flex-col justify-between">
        <img :src="`/images/${image}`" :alt="name" class="w-full h-24 object-cover rounded-xl mb-3 border border-slate-100" />
        <div class="space-y-2">
          <div>
            <p class="text-[9px] font-bold text-slate-400 uppercase">Vai trò</p>
            <p class="text-[11px] font-bold text-slate-800 truncate">{{ role }}</p>
          </div>
          <div>
            <p class="text-[9px] font-bold text-slate-400 uppercase">Chi tiết</p>
            <p class="text-[11px] font-bold text-slate-600 line-clamp-2">{{ details }}</p>
          </div>
          <button class="w-full py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg hover:bg-blue-600 transition-colors">
            Xem chi tiết
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
// PHẦN QUAN TRỌNG: Đây là nơi khai báo các props để Vue nhận diện biến
defineProps({
  name: String,
  desc: String,
  tech: String,
  icon: String,
  bg: String,
  image: String,
  role: String,
  details: String
});
</script>

<style scoped>
.perspective-1000 { perspective: 1000px; }
.backface-hidden { backface-visibility: hidden; }
</style>