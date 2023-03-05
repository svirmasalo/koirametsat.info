<script setup>
    useHead({
      title: 'Kaupungit',
      description: 'Koirametsät lajiteltuna kaupungeittain.'
    })
    const cityQuery = await queryContent({
        where: {
            _path: {$contains: '/'},
        }
    }).find();
    // List of paths that are not cities
    const nonCities = ['/haku', '/tietoa-palvelusta', '/kaupungit', '/'];
    // Filter out non-cities and paths that are not direct children of root
    let cityList = cityQuery.filter((item) => {
        return !nonCities.includes(item._path) && item._path.split('/').length === 2;
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
  <header class="pt-16 pb-12 text-center">
    <h1 class="text-4xl font-bold text-secondary leading-tight">Kaupungit</h1>
    <p class="text-sm leading-relaxed">Koirametsiä jo <span>{{ cityList.length }}</span> kaupungissa</p>
  </header>
  <main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen">
    <div class="w-full max-w-lg mx-auto pt-10">
        <h2 class="text-primary mb-4 px-4 font-bold">Koirametsät kaupungeittain</h2>
        <ul class="flex flex-col gap-4 justify-center px-4">
            <li v-for="city in cityList" :key="city._path" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                <nuxt-link class="flex flex-row justify-between items-center" :to="city._path">
                    <div class="">
                        <p class="text-lg font-bold">{{ city.title }}</p>
                        <p class="text-sm">Koirametsiä: <span>{{ city.dogForests }}</span></p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </nuxt-link>
            </li>
        </ul>
    </div>
  </main>
</template>
    