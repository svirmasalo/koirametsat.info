<script setup lang="ts">
defineProps({
  label: { type: String, default: "" },
});
</script>
<template>
  <aside class="-mx-2 bg-primary-active p-4 w-full" :aria-label="label">
    <div class="prose prose-invert prose-sm text-secondary">
        <ContentSlot :use="$slots.default" />
    </div>
  </aside>
</template>