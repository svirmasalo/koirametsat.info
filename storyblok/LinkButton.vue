<script setup>
    const props = defineProps({ blok: Object });

    const ctaStyle = injection => {
        let styleString = [];
        let bgFallback = false;

        if (injection.includes('full')) {
            styleString.push('block');
        } else {
            styleString.push('inline-block');
        }
        if (injection.includes('alt')) {
            styleString.push('bg-primary-active');
        } else {
            bgFallback = true;
        }
        if (injection.includes('support')) {
            styleString.push('text-indigo-50 bg-indigo-600 linear-gradient to-right from-indigo-700 to-indigo-600 hover:bg-indigo-800 transition-colors');
        } else {
            bgFallback = true;
        }
        if (bgFallback) {
            styleString.push('bg-primary');
        }
        return styleString.join(' ');
    }

    const internal = computed(() => {
        return props.blok.to?.linktype === 'story';
    });
    const external = computed(() => {
        return props.blok.to?.linktype === 'url';
    });

    const url = computed(() => {
        if (internal.value) {
            return `/${props.blok.to?.cached_url}`;
        } else if (external) {
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
  