<script setup>
    const props = defineProps(['type', 'to', 'label']);
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
    <div class="body-cta-block my-1 not-prose">
        <ContentSlot :use="$slots.default" />
        <NuxtLink :to="to" class="body-cta-link" :class="ctaStyle(type)">
            {{ label }}
        </NuxtLink>
    </div>
</template>