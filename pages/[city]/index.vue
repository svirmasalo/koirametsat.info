<script setup>
    const route = useRoute();
    const parkQuery = await queryContent({
        where: {
            _path: {$contains: route.path},
        }
    }).find();

    const cityQuery = await queryContent({
        where: {
            _path: {$eq: route.path},
        }
    }).findOne();

    // Query all documents that have a closeBy array including current city
    const closeByQuery = await queryContent({
        where: {
            closeBy: {$contains: [cityQuery.title]},
        }
    }).find();


    // List of paths that are not cities
    const nonCities = [route.path];
    // Filter out non-cities and paths that are not direct children of root
    let parkList = parkQuery.filter((item) => {
        return !nonCities.includes(item._path) && item._path.split('/').length === 3;
    });
    // Count number of dog parks in each park
    parkList = parkList.map((park) => {
        park.dogForests = parkQuery.filter((item) => {
            return item._path.includes(park._path) && item._path.split('/').length === 3;
        }).length;
        return park;
    });
    // Sort cities alphabetically
    parkList = parkList.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

</script>
<template>
    <header>
        <header class="pt-16 pb-12 text-center">
            <h1 class="text-4xl font-bold text-secondary leading-tight">{{ cityQuery.title }}</h1>
            <p class="text-sm leading-relaxed">{{cityQuery.titleIn}} on yhteensä <span>{{ parkList.length }}</span> koirametsää.</p>
        </header>
    </header>
    <main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen">
        <div class="container pt-10">
            <div v-if="parkList.length > 0" class="w-full max-w-lg mx-auto">
                <ul class="flex flex-col gap-4 justify-center">
                    <li v-for="park in parkList" :key="park._path" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                        <ListItem :to="park._path" :title="park.title" :substring="park.address" />
                    </li>
                </ul>
            </div>
            <div class="prose text-center py-10" v-else>
                <NoContentForCity />
            </div>
            <div v-if="closeByQuery.length > 0" class="mx-auto prose mt-12">
                <h2>Lähellä sijaitsevat koirametsät</h2>
            </div>
            <div v-if="closeByQuery.length > 0" class="w-full max-w-lg mx-auto pt-8">
                <ul class="flex flex-col gap-4 justify-center">
                    <li v-for="item in closeByQuery" :key="item._path" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                        <ListItem :to="item._path" :title="item.title" :substring="item.address" />
                    </li>
                </ul>
            </div>
            <ContentDoc :path="$route.path" />
        </div>
    </main>
</template>
  