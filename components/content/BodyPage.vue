<script setup>
const props = defineProps(['skipMain']);
const skipMain = props.skipMain || false;
</script>
<template>
  <div v-if="skipMain" class="container pt-10 text-primary">
    <div class="prose">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
  <main v-else id="main" aria-label="Sisältö" class="bg-secondary flex flex-col justify-start pb-12">
    <div class="container pt-10 text-primary">
      <div class="prose">
        <ContentSlot :use="$slots.default" />
      </div>
    </div>
  </main>
</template>