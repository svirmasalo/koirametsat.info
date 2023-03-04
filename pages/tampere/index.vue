<template>
    <header>
        <ContentNavigation></ContentNavigation>
    </header>
    <main>
        <ContentList path="/tampere" v-slot="{ list }">
            <div class="container my-12" v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <a :href="article._path">Lue lisää</a>
            </div>
        </ContentList>
    </main>
</template>
  