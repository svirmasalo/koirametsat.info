<template>
    <div v-editable="blok" v-html="content"></div>
</template>
<style scoped>
    :deep(li p) {
        @apply my-0;
    }
</style>
<script setup lang="ts">
const props = defineProps({ blok: Object });
const content = computed(() => {
        if (props.blok){
            return renderRichText(props.blok.content)
        } else {
            return 'Ei sisältöä';
        }
    }
);
</script>