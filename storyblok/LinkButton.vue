<script setup>
    const props = defineProps({ blok: Object });

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

    const buttonVariant = computed(() => {
        const {style} = props.blok;
        return style ? `body-cta-link--${style}` : 'body-cta-link';
    });

</script>
<template>
    <div class="body-cta-block my-1 not-prose" v-editable="blok" data-test="link-button" v-if="internal">
        <NuxtLink :to="url" :class="buttonVariant">
            {{ blok.label }}
        </NuxtLink>
    </div>
    <div title="Siirry Stripeen ja tue palvelua" class="body-cta-block my-1 not-prose" v-editable="blok" data-test="link-button" v-if="external">
        <a :href="url" :class="buttonVariant">
            {{ blok.label }}
        </a>
    </div>
</template>