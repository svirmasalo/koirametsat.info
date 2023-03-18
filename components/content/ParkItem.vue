
<script setup lang="ts">
const props = defineProps({
  featureName: { type: String, default: "" },
  featureDescription: { type: String, default: "" },
  descriptionLink: { type: Boolean, default: false },
});

// Track click event if link is clicked and featureName is "Varaukset"
const trackClick = () => {
  if (props.descriptionLink && props.featureName === "Varaukset") {
    // @ts-ignore
    window.dataLayer.push({
      event: "InitiateCheckout",
    });
    try {
        fbq("track", "InitiateCheckout");
    } catch (error) {
        console.warn(error);
    }
  }
};

</script>
<template>
    <div class="feature border-b-2 borer-b-cloud not-prose pb-2 mb-2 px-1">
        <h3 class="text-sm font-bold mb-2">{{ featureName }}</h3>
        <p v-if="descriptionLink">
            <NuxtLink :to="featureDescription" custom >
                <a @click="trackClick" :href="featureDescription" :title="`Koirametsän varaukset täältä`">
                    {{ featureDescription }}
                </a>
            </NuxtLink>
        </p>
        <p v-else class="">{{ featureDescription }}</p>
    </div>
</template>