<template>
  <div class="kmi-reviews-review--header">
    <div class="kmi-reviews-review--header-icon">
      <span itemprop="name">{{ getInitials(review.user) }}</span>
    </div>
    <div class="kmi-reviews-review--header-data">
      <h3 itemprop="author">{{ review.user }}</h3>
      <meta itemprop="datePublished" :content="osDate" />
      <p>{{ humanDate }}</p>
      <meta itemprop="worstRating" content="1" />
      <meta itemprop="bestRating" content="5" />
      <span itemprop="ratingValue">{{ review.rating }}</span>
    </div>
  </div>
  <div class="kmi-reviews-review--body">
    <p itemprop="reviewBody">{{ review.review }}</p>
  </div>
</template>
<style scoped>
.kmi-reviews-review--header {
  @apply flex flex-row items-center gap-4 mb-4;
}
.kmi-reviews-review--header-icon {
  @apply w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold uppercase text-xs;
}
.kmi-reviews-review--header-data h3 {
  @apply mt-0 mb-1 font-bold leading-tight;
}
.kmi-reviews-review--header-data p {
  @apply text-xs;
}
.kmi-reviews-review--body {
  @apply text-sm;
}
.kmi-reviews-review--header-data span[itemprop="ratingValue"] {
  @apply sr-only;
}
</style>
<script setup>
const props = defineProps(["review"]);
let reviewDate;
try {
  reviewDate = props.review.date.toDate();
} catch (error) {
  reviewDate = "-";
}

// Format date string to day month year format
const formatDate = (date) => {
  if (date === "-") return date;
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("fi-FI", options);
};

// Format date to year-month-day
const formatDateToOS = (date) => {
  if (date === "-") return date;
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  return `${year}-${month}-${day}`;
};
const humanDate = formatDate(reviewDate);
const osDate = formatDateToOS(reviewDate);

// Function that returns initials from a name string
const getInitials = (name) => {
  if (!name) return "";
  const nameArray = name.split(" ");
  // Reduce the array to two items
  if (nameArray.length > 2) {
    nameArray.splice(2, nameArray.length - 1);
  }
  const initials = nameArray.map((n) => n.charAt(0)).join("");
  return initials;
};
</script>