<template>
  <div v-if="blok" class="max-w-sm mx-auto mt-12" v-editable="blok" data-test="in-page-search-bar">
    <div role="search" class="ais-SearchBox-form px-4">
      <label for="sitewide-search" class="sr-only" v-text="blok.title"></label>
      <input
        id="sitewide-search"
        placeholder="Hae nimellä, kaupungilla..."
        class="ais-SearchBox-input"
        type="text"
        v-model="searchString"
        @keyup.enter="search()"
      />
      <button class="ais-SearchBox-submit" @click="search()" name="Klikkaa hakeaksesi" title="Hae" type="submit">
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 40 40"
          class="ais-SearchBox-submitIcon"
        >
          <path
            d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({ blok: Object });
const router = useRouter();
let searchString = ref("");
function search() {
// Track search event to Google and facebook
try {
    fbq("track", "Search", {
    search_string: searchString.value,
    });
} catch (e) {
    console.warn("Facebook Pixel not loaded");
}

try {
    window.dataLayer.push({
    event: "Search",
    searchTerm: searchString.value, // Replace with the actual search term entered by the user
    });
} catch (error) {
    console.warn("Datalayer not defined");
}

router.push({ path: "/haku", query: { q: searchString.value } });
}
</script>