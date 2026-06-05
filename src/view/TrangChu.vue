<template>
  <div class="min-h-screen bg-slate-100 py-6 px-4 md:py-12 md:pl-[50px] md:pr-12 font-sans text-slate-800">
    <div class="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
      
      <div class="md:col-span-3 sticky top-6 md:top-12 z-10">
        <ProfileCard />
      </div>

      <div class="md:col-span-9 flex flex-col gap-6 md:gap-8">
        <AboutSection />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Experience />
          <Education />
        </div>

        <TechStack />
        <FeaturedProjects />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import AboutSection from '@/components/AboutSection.vue';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import TechStack from '@/components/TechStack.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
</script>