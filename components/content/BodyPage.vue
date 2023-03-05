<script setup>
// defineProps(['content'])
</script>
<template>
  <main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen">
    <div class="container pt-10 text-primary">
      <div class="prose">
        <ContentSlot :use="$slots.default" />
      </div>
    </div>
  </main>
</template>