<script setup>
    useHead({
      title: 'Kaupungit - Koirametsät.info',
      description: 'Koirametsät lajiteltuna kaupungeittain. Koirametsät.info-palvelusta löydät kätevästi Suomen koirametsät.',
    });
    const cityQuery = await queryContent({
        where: {
            _path: {$contains: '/'},
        }
    }).sort({_path: 1}).find();

    // List of paths that are not cities
    const nonCities = [
      '/haku', 
      '/tietoa-palvelusta', 
      '/tietoa-koirametsista', 
      '/kaupungit', 
      '/tietosuojaseloste', 
      '/', 
      '/kommentoinnin-ehdot', 
      '/mika-on-koirametsa',
      '/koirametsa-havu-ja-muut-suomen-koirametsat'
    ];

    const cityList = computed(() => {
      // Filter out non-cities and paths that are not direct children of root
      let cl = cityQuery.filter((item) => {
          // console.log(item._path, item._path.split('/').length);
          return !nonCities.includes(item._path) && item._path.split('/').length === 2;
      });
      // Count number of dog parks in each city
      cl = cl.map((city) => {
          city.dogForests = cityQuery.filter((item) => {
              return item._path.includes(city._path) && item._path.split('/').length === 3;
          }).length;
          return city;
      });

      const cc = [...cl].filter((city) => {
        return city.dogForests > 0;
      }).length;

      return {cl, cc};
    });

</script>
<template>
  <div>
    <header class="pt-16 pb-12 text-center">
      <h1 class="text-4xl font-bold text-secondary leading-tight">Kaupungit</h1>
      <p class="text-sm leading-relaxed">Koirametsiä jo <span>{{ cityList.cc }}</span> kaupungissa</p>
    </header>
    <Breadcrumbs path="/kaupungit" curPageTitle="Kaupungit"/>
    <main class="bg-secondary flex flex-col justify-start pb-12 min-h-screen">
      <div class="flex flex-col justify-start pb-12 order-2">
        <ContentDoc tag="article" />
      </div>
      <div class="w-full max-w-lg mx-auto pt-10 order-0">
          <h2 class="text-primary mb-4 px-4 font-bold">Koirametsät kaupungeittain</h2>
          <ul class="flex flex-col gap-4 justify-center px-4" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
              <li v-for="city in cityList.cl" :key="city._file" class="bg-white shadow text-primary rounded p-5 hover:shadow-md transition-shadow" itemprop="name">
                  <nuxt-link class="flex flex-row justify-between items-center" :to="city._path" itemprop="url">
                      <div class="">
                          <p class="text-lg font-bold mb-2">{{ city.title }}</p>
                          <p class="text-sm flex items-center gap-1 mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                              <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                            </svg>
                            Paikallisia koirametsiä: <b>{{ city.dogForests }}</b>
                          </p>
                          <ClientOnly>
                            <CloseByCount :city="city.title" />
                          </ClientOnly>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                  </nuxt-link>
              </li>
          </ul>
        </div>
    </main>
    <SchemaOrgWebPage />
  </div>
</template>
    