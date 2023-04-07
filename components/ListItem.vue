<script setup>
const props = defineProps(["title", "substring", "to"]);
// Format firestore collection slug from the 'to' prop (e.g. /helsinki/koirapuisto -> koirapuisto-helsinki)
const firestoreSlug = props.to
  .split("/")
  .filter((item) => item)
  .reverse()
  .join("-");
// Get average rating from firestore
const { averageRating } = useReviews(firestoreSlug);
</script>
<template>
  <NuxtLink
    class="flex flex-row justify-between items-center"
    data-target="park"
    :to="to"
  >
    <div class="">
      <div class="mb-1">
        <p class="text-lg font-bold">{{ title }}</p>
        <p class="text-sm leading-relaxed">{{ substring }}</p>
      </div>
      <div class="">
        <p class="kmi-reviews-header--rating">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            class="kmi-reviews-header--star"
          >
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span>{{ averageRating }}</span>
        </p>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </NuxtLink>
</template>
<style scoped>
.kmi-reviews-header--rating {
  @apply flex items-center text-sm;
}
.kmi-reviews-header--star {
    display: block;
    height: 12px;
    width: 12px;
    fill: currentcolor;
    margin-right: 0.25rem;
}
</style>