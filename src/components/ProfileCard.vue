<template>
  <div class="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all hover:shadow-2xl max-w-2xl mx-auto">
    <ProfileHeader />

    <div class="p-8 pt-4">
      <hr class="border-slate-100 my-6">
      
      <ProfileContact />

      <hr class="border-slate-100 my-6">

      <GitHubStats />

      <hr class="border-slate-100 my-6">

      <TechSkills />

      <ToolsPlatforms />

      <SoftSkills />

      <LifestyleHobbies />
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from './ProfileHeader.vue'
import ProfileContact from './ProfileContact.vue'
import GitHubStats from './GitHubStats.vue'
import TechSkills from './TechSkills.vue'
import ToolsPlatforms from './ToolsPlatforms.vue'
import SoftSkills from './SoftSkills.vue'
import LifestyleHobbies from './LifestyleHobbies.vue'
</script>