<template>
    <ol class="sr-only" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <NuxtLink to="/" itemprop="item" itemscope itemtype="https://schema.org/WebPage" itemid="https://koirametsat.info">
                <span itemprop="name">koirametsat.info</span>
            </NuxtLink>
            <meta itemprop="position" content="1" />
        </li>
        <li v-for="(item, index) in pathItems.slice(1)" :key="index" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <NuxtLink :to="`${item}`" itemprop="item" itemscope itemtype="https://schema.org/WebPage" :itemid="`https://koirametsat.info/${item}`">
                <span itemprop="name">{{ item }}</span>
            </NuxtLink>
            <meta itemprop="position" :content="`${index + 2}`" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">{{ useParseTitle(curPageTitle) }}</span>
            <meta itemprop="position" :content="`${pathItems.length + 1}`" />
        </li>
    </ol>
</template>
<script setup lang="ts">
const props = defineProps({
  path: { type: String, default: "" },
  curPageTitle: { type: String, default: "" }
});
const pathItems = props.path.split("/");
// Substract the last item from the array
pathItems.pop();
</script>