<script setup>
    const props = defineProps(['cities']);

    const cityQuery = await queryContent('/').where({
        _path: {$in: props.cities},
    }).find();

    // Filter out non-cities and paths that are not direct children of root
    let cityList = cityQuery.filter((item) => {
        return item._path.split('/').length === 2;
    });

    // Count number of dog parks in each city
    cityList = cityList.map((city) => {
        city.dogForests = cityQuery.filter((item) => {
            return item._path.includes(city._path) && item._path.split('/').length === 3;
        }).length;
        return city;
    });

    // Sort cities alphabetically
    cityList = cityList.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

</script>
<template>
    <div class="mb-10">
        <div class="prose mb-6">
            <ContentSlot :use="$slots.default" />
        </div>
        <div class="not-prose">
            <ul class="flex flex-col gap-4 justify-center px-4">
                <li v-for="city in cityList" :key="city._path" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                    <nuxt-link class="flex flex-row justify-between items-center" :to="city._path">
                        <div class="">
                            <p class="text-lg font-bold">{{ useParseTitle(city.title) }}</p>
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