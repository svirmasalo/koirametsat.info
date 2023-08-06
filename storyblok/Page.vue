<template>
  <div v-editable="blok" class="px-6" data-test="page">
    <StoryblokComponent
      v-for="blok in blok.header"
      :key="blok._uid"
      :blok="blok"
    />
    <main id="main" aria-label="Sisältö" class="bg-secondary flex flex-col justify-start pb-12">
      <div class="container pt-10 text-primary">
        <div class="prose">
          <StoryblokComponent
            v-for="blok in blok.body"
            :key="blok._uid"
            :blok="blok"
          />
        </div>
      </div>
    </main>
  </div>
</template>
  
<script setup>
    defineProps({ blok: Object });
</script>