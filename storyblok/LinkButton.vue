<script setup>
    const props = defineProps({ blok: Object });
    const url = `/${props.blok.to?.cached_url}`;

    const ctaStyle = injection => {
        let styleString = "";
        if (injection.includes('full')) {
            styleString += 'block ';
        } else {
            styleString += 'inline-block ';
        }
        if (injection.includes('alt')) {
            styleString += 'bg-primary-active';
        } else {
            styleString += 'bg-primary ';
        }
        return styleString
    }
</script>
<template>
    <div class="body-cta-block my-1 not-prose" v-editable="blok" data-test="link-button">
        <NuxtLink :to="url" class="body-cta-link" :class="ctaStyle(blok.style)">
            {{ blok.label }}
        </NuxtLink>
    </div>
</template>
  