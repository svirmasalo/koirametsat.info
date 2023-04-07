<template>
  <section id="koirametsat-reviews">
    <header class="kmi-reviews-header" itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating" itemscope>
      <meta itemprop="reviewCount" :content="reviews.length" />
      <h2>Arvostelut</h2>
      <p class="kmi-reviews-header--rating">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; height: 16px; width: 16px; fill: currentcolor"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <span itemprop="ratingValue" :content="averageRating">{{ averageRating }}</span>
      </p>
    </header>
    <div role="list" class="kmi-reviews-wrapper" v-if="reviews.length > 0">
      <div
        v-for="r in reviews"
        role="listitem"
        class="kmi-reviews-review"
        itemprop="review"
        itemscope
        itemtype="https://schema.org/Review"
        :key="r.id"
      >
        <ReviewItem :review="r" />
      </div>
    </div>
    <div v-else>
        <p class="italic">Tätä koirametsää ei vielä ole arvosteltu.</p>
    </div>
    <ReviewForm :slug="slug" v-if="comCookieBase" />
  </section>
</template>
<script setup>
// Get props "collection" from the parent component
const props = defineProps(['slug']);

const {reviews, averageRating} = useReviews(props.slug);

// Check if "_kmcom_consent" cookie exists;
const comCookieBase = useCookie("_kmcom_consent");

// const averageRating = 5;
</script>
<style scoped>
#koirametsat-reviews {
  @apply py-12 text-primary mx-auto px-4 md:px-0;
  max-width: 65ch;
}
h2 {
  @apply text-2xl font-bold;
}
.kmi-reviews-header {
  @apply mb-6;
}
.kmi-reviews-header,
.kmi-reviews-header--rating {
  @apply flex flex-row items-center gap-2;
}
.kmi-reviews-wrapper {
  @apply grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-6 my-6;
}
</style>