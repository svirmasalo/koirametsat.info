<template>
    <div class="mb-10" v-editable="blok" data-test="city-links-list" :aria-label="ariaLabel">
        <div class="prose mb-6">
            <h2 v-text="heading"></h2>
        </div>
        <div class="not-prose">
            <ul class="flex flex-col gap-4 justify-center px-4">
                <li v-for="blok in cities" :key="blok._uid" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                    <nuxt-link class="flex flex-row justify-between items-center" :to="blok.city.cached_url">
                        <div class="">
                            <p class="text-lg font-bold">{{ blok.label }}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
interface City {
    id: String;
    url: String;
    linktype: String;
    fieldtype: String;
    cached_url: URL;
}
interface CityLink {
    label: String;
    city: City;
    component: String;
    _uid: string;
    _editable: String;
}

const props = defineProps({ blok: Object });
const cities: Array<CityLink> = props.blok?.cities || [];
const heading: String = props.blok?.heading || "";
const ariaLabel: String = props.blok?.ariaLabel || "Lista suosituimmista alueista";

</script>