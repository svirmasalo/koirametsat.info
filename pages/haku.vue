<script setup>
useHead({
  title: "Haku",
  description: "Etsitkö täydellistä koirametsää? Käytä koirametsät.info huippunopeaa hakutoimintoa löytääksesi laajan valikoiman erilaisia koirametsiä ympäri Suomen alueen, koon, sijainnin tai palveluiden perusteella. Löydä unelmiesi koirametsä hetkessä - tutustu nyt!",
});
const indexName = "dev_koirametsat";
const algolia = useAlgoliaRef();
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisHighlight,
} from "vue-instantsearch/vue3/es/index.js";

// Get initial search from query string
const initialSearch = useRoute().query.q || "";

// Set search string to initial search
const searchString = ref(initialSearch);

</script>

<template>
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
        />
      </div>
      <div class="bg-secondary flex flex-col justify-start pb-12 min-h-screen">
        <div class="max-w-lg mx-auto w-full">
          <AisHits>
            <template v-slot:item="{ item }">
              <NuxtLink :to="item.path">
                <div>
                  <p class="text-lg font-bold">
                    <AisHighlight attribute="title" :hit="item"></AisHighlight>
                  </p>
                  <p class="text-sm">
                    <AisHighlight attribute="tags" :hit="item"></AisHighlight>
                  </p>
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
        <ContentDoc />
      </div>
    </AisInstantSearch>
  </main>
</template>
  