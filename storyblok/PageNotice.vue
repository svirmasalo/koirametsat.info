<template>
  <aside v-editable="blok" :class="backgroundColor" :aria-label="ariaLabel">
    <div class="prose prose-invert prose-sm text-secondary" v-html="content">
    </div>
  </aside>
</template>
<style scoped>
    aside {
        @apply -mx-2 p-4 w-full;
    }
    aside.primary {
        @apply bg-primary-active;
    }
    aside.accent {
        @apply bg-accent;
    }
</style>
<script setup lang="ts">
  const props = defineProps({ blok: Object });
  const backgroundColor = computed(() => {
      if (props.blok){
          return props.blok.bgColor;
      } else {
          return 'primary';
      }
  });
  const ariaLabel = computed(() => {
      if (props.blok){
          return props.blok.aria_label;
      } else {
          return 'Toissijainen sisältö';
      }
  });
  const content = computed(() => {
          if (props.blok){
              return renderRichText(props.blok.content)
          } else {
              return 'Ei sisältöä';
          }
      }
  );
</script>