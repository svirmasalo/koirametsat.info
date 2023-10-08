<script setup>
    const props = defineProps({ blok: Object });

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

    const internal = computed(() => {
        console.log('int', props.blok.to?.linktype === 'story');
        return props.blok.to?.linktype === 'story';
    });
    const external = computed(() => {
        console.log('ext', props.blok.to?.linktype === 'url');
        return props.blok.to?.linktype === 'url';
    });

    const url = computed(() => {
        if (internal.value) {
            return `/${props.blok.to?.story?.full_slug}`;
        } else if (external.value) {
            return props.blok.to?.url;
        } else {
            return '';
        }
    });

</script>
<template>
    <div class="body-cta-block my-1 not-prose" v-editable="blok" data-test="link-button" v-if="internal">
        <NuxtLink :to="url" class="body-cta-link" :class="ctaStyle(blok.style)">
            {{ blok.label }}
        </NuxtLink>
    </div>
    <div title="Siirry Stripeen ja tue palvelua" class="body-cta-block my-1 not-prose" v-editable="blok" data-test="link-button" v-if="external">
        <a :href="url" class="body-cta-link" :class="ctaStyle(blok.style)">
            {{ blok.label }}
        </a>
    </div>
</template>
  