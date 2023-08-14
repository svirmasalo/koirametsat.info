<template>
    <div v-editable="blok" v-html="content"></div>
</template>
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