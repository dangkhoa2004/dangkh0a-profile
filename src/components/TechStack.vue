<template>
  <div class="relative bg-white border border-slate-200/60 p-8 rounded-3xl shadow-lg shadow-slate-200/40 overflow-hidden hover:shadow-xl transition-all duration-500">
    
    <!-- Họa tiết trang trí -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl pointer-events-none"></div>

    <h2 class="text-xl font-black text-slate-800 mb-8 flex items-center gap-3 relative z-10">
      <i class="fa-solid fa-bolt text-amber-500"></i> Kỹ năng (Tech Stack)
    </h2>
    
    <div class="space-y-10 relative z-10">
      
      <!-- Component Badge Wrapper -->
      <div v-for="(group, title) in techGroups" :key="title">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-5 ml-1">{{ title }}</h3>
        <div class="flex flex-wrap gap-3">
          <div 
            v-for="tech in group" 
            :key="tech.alt" 
            class="transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md rounded-lg overflow-hidden"
          >
            <img :src="tech.url" :alt="tech.alt" class="block" />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
const techGroups = {
  'Frontend': [
    { url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', alt: 'HTML5' },
    { url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', alt: 'CSS3' },
    { url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', alt: 'JavaScript' },
    { url: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white', alt: 'TypeScript' },
    { url: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white', alt: 'React' },
    { url: 'https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white', alt: 'Vue.js' },
    { url: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', alt: 'Tailwind' },
    { url: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white', alt: 'Bootstrap' }
  ],
  'Backend & Database': [
    { url: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white', alt: 'Laravel' },
    { url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white', alt: 'Node.js' },
    { url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white', alt: 'Python' },
    { url: 'https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white', alt: 'Java' },
    { url: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white', alt: 'MySQL' },
    { url: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white', alt: 'MongoDB' },
    { url: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black', alt: 'Firebase' }
  ],
  'Tools & Others': [
    { url: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white', alt: 'Git' },
    { url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white', alt: 'Docker' },
    { url: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black', alt: 'Linux' },
    { url: 'https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white', alt: 'VSCode' },
    { url: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white', alt: 'Figma' },
    { url: 'https://img.shields.io/badge/MQTT-FF6600?style=for-the-badge&logo=mqtt&logoColor=white', alt: 'MQTT' }
  ]
}
</script>