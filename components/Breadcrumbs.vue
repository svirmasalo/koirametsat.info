<template>
    <ol class="sr-only" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <NuxtLink to="/" itemprop="item" itemscope itemtype="https://schema.org/WebPage" itemid="https://koirametsat.info" noPrefetch>
                <span itemprop="name">koirametsat.info</span>
            </NuxtLink>
            <meta itemprop="position" content="1" />
        </li>
        <li v-for="(pi, index) in pathItems" :key="pi" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <NuxtLink :to="`/${pi}`" itemprop="item" itemscope itemtype="https://schema.org/WebPage" :itemid="`https://koirametsat.info/${pi}`" noPrefetch>
                <span itemprop="name">{{ pi }}</span>
            </NuxtLink>
            <meta itemprop="position" :content="`${index + 2}`" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">{{ useParseTitle(curPageTitle) }}</span>
            <meta itemprop="position" :content="`${pathItemsTotal}`" />
        </li>
    </ol>
</template>
<script setup lang="ts">
const props = defineProps({
  path: { type: String, default: "" },
  curPageTitle: { type: String, default: "" }
});
const pathItems = props.path.split("/");
const pathItemsTotal = pathItems.length;
// Substract the first item from the array
pathItems.shift();
// Substract the last item from the array
pathItems.pop();
</script>