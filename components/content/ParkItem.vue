
<script setup lang="ts">
const props = defineProps({
  featureName: { type: String, default: "" },
  featureDescription: { type: String, default: "" },
  descriptionLink: { type: Boolean, default: false },
  maps: { type: Boolean, default: false },
});
let link = props.featureDescription;
if (props.maps) {
  const encodedURI = encodeURIComponent(props.featureDescription);
  link = `https://www.google.com/maps/place/${encodedURI}`;
}

// Track click event if link is clicked and featureName is "Varaukset"
const trackClick = () => {
  if (props.descriptionLink && props.featureName === "Varaukset") {
    try {
      gtag("event", "InitiateCheckout", {});
      fbq("track", "InitiateCheckout");
    } catch (error) {
      console.warn(error);
    }
  }
};
</script>
<template>
  <div class="feature border-b-2 borer-b-cloud not-prose pb-2 mb-2 px-1">
    <div class="meta hidden" v-html="useTransalateParkItemSchema(featureName, featureDescription)"></div>
    <p><span class="text-sm font-bold mb-2 block">{{ featureName }}:</span>
    <span class="block" v-if="descriptionLink">
      <NuxtLink :to="link" custom>
        <a
          @click="trackClick"
          :href="link"
          :title="maps ? 'Karttaan' : `Koirametsän varaukset täältä`"
          class="flex items-center"
        >
          <span class="max-w-sm truncate">{{ featureDescription }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </NuxtLink>
    </span>
    <span v-else class="block">{{ featureDescription }}</span>
    </p>
  </div>
</template>