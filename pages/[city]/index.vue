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
            closeBy: {$contains: [useParseTitle(cityQuery.title)]},
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

    const localText = list => {
        if (list.length === 1) {
            return `on ${list.length} paikallinen koirametsä`;
        } else if (list.length > 1) {
            return `on ${list.length} paikallista koirametsää`;
        } else {
            return `ei ole paikallisia koirametsiä`;
        }
    }
    const closeByText = list => {
        if (list.length === 1) {
            return `${list.length} lähellä sijaitseva koirametsä`;
        } else if (list.length > 1) {
            return `${list.length} lähellä sijaitsevaa koirametsää`;
        } else {
            return '';
        }
    }
    useHead({
        title: `${cityQuery.title} - Koirametsät.info`,
        meta: [
            {
                name: 'description',
                content: `${cityQuery.titleIn} on yhteensä ${parkList.length} paikallista ja ${closeByQuery.length} lähellä sijaitsevaa koirametsää.`
            },
            {
            name: 'author',
            content: 'Koirametsät.info'
            },
            {
            name: 'robots',
            content: 'index, follow'
            },
            {
            name: 'googlebot',
            content: 'index, follow'
            },
            {
                name: 'og:title',
                content: `${cityQuery.title} - Koirametsät.info`
            },
            {
                name: 'og:description',
                content: `${cityQuery.titleIn} on yhteensä ${parkList.length} paikallista ja ${closeByQuery.length} lähellä sijaitsevaa koirametsää.`
            },
        ],
        link: [
            {
                rel: "canonical",
                href: `https://koirametsat.info${route.fullPath}`,
            },
        ],
    });
</script>
<template>
    <div>
        <Breadcrumbs :path="route.path" :curPageTitle="cityQuery.title"/>
        <header class="pt-16 pb-12 text-center max-w-sm mx-auto px-4 md:px-0">
            <h1 class="text-4xl font-bold text-secondary leading-tight mb-2">{{ useParseTitle(cityQuery.title) }}</h1>
            <p class="leading-relaxed">
                {{cityQuery.titleIn}} 
                <span>{{ localText(parkList) }}</span>
                <span v-if="closeByQuery.length > 0"> ja {{ closeByText(closeByQuery) }} </span>
            </p>
        </header>
        <main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen">
            <div class="container pt-10 park-list-container">
                <div v-if="parkList.length > 0" class="mx-auto prose mt-12">
                    <h2 id="city-parks">{{ cityQuery.titleIn }} sijaitsevat koirametsät</h2>
                </div>
                <div v-if="parkList.length > 0" class="w-full max-w-lg mx-auto pt-8">
                    <ul aria-labelledby="city-parks" class="flex flex-col gap-4 justify-center">
                        <li v-for="park in parkList" :key="park._path" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                            <ListItem :to="park._path" :title="useParseTitle(park.title)" :substring="park.address" />
                        </li>
                    </ul>
                </div>
                <div v-if="closeByQuery.length > 0" class="mx-auto prose mt-12">
                    <h2 id="close-by-parks">Lähellä sijaitsevat koirametsät</h2>
                </div>
                <div v-if="closeByQuery.length > 0" class="w-full max-w-lg mx-auto pt-8">
                    <ul aria-labelledby="close-by-parks" class="flex flex-col gap-4 justify-center">
                        <li v-for="item in closeByQuery" :key="item._path" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow">
                            <ListItem :to="item._path" :title="useParseTitle(item.title)" :substring="item.address" :city="item.city" />
                        </li>
                    </ul>
                </div>
                <div class="prose text-center py-10" v-if="parkList.length === 0">
                    <NoContentForCity :city="useParseTitle(cityQuery.title)" />
                </div>
                <ContentDoc :path="$route.path" />
            </div>
        </main>
        <SchemaOrgWebPage />
    </div>
</template>
<style scoped>
    .park-list-container > div:first-of-type {
        margin-top: 0;
    }
</style>
  