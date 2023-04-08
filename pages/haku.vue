<script setup>
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisHighlight,
} from "vue-instantsearch/vue3/es/index.js";

const indexName = "dev_koirametsat";
const algolia = useAlgoliaRef();

// Get initial search from query string
const initialSearch = useRoute().query.q || "";

// Set search string to initial search
const searchString = ref(initialSearch);

// Tracking event for Facebook and Google. Send event only after search input is blurred.
const track = (string) => {
  try {
    fbq("track", "Search", {
      search_string: string,
    });
  } catch (e) {
    console.warn("Facebook Pixel not loaded");
  }
  try {
    dataLayer.push({
      event: "Search",
      searchTerm: string, // Replace with the actual search term entered by the user
    });
  } catch (error) {
    console.warn("Datalayer not defined");
  }
};

</script>

<template>
  <div>
    <header class="pt-16 pb-12 text-center">
      <h1 class="text-4xl font-bold text-secondary leading-tight">Haku</h1>
      <p class="text-sm leading-relaxed">
        Hae koirametsää nimellä, kaupungilla, avainsanalla...
      </p>
    </header>
    <main>
      <AisInstantSearch :index-name="indexName" :search-client="algolia">
        <div class="max-w-sm mx-auto">
          <AisSearchBox
            placeholder="Hae nimellä, paikkakunnalla..."
            submit-title="Hae"
            reset-title="Tyhjennä"
            autofocus
            v-model="searchString"
            @blur="track(searchString)"
          />
        </div>
        <div class="bg-secondary flex flex-col justify-start pb-12">
          <div class="max-w-lg mx-auto w-full">
            <AisHits>
              <template v-slot:item="{ item }">
                <NuxtLink :to="item.path" class="flex flex-row justify-between items-center">
                  <div>
                    <div class="">
                      <p class="text-lg font-bold">
                        <AisHighlight
                          attribute="title"
                          :hit="item"
                        ></AisHighlight>
                      </p>
                      <p class="text-sm">
                        <AisHighlight attribute="city" :hit="item"></AisHighlight>
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
            </AisHits>
          </div>
        </div>
      </AisInstantSearch>
      <div class="bg-secondary flex flex-col justify-start pb-12">
        <ContentDoc />
      </div>
    </main>
    <SchemaOrgWebPage />
  </div>
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