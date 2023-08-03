<script setup lang="ts">
const props = defineProps({
  city: { type: String, default: "" },
});

const { data } = await useAsyncData(props.city, () =>
  queryContent('/')
    .where({
      closeBy: { $contains: props.city },
    })
    .only(['closeBy'])
    .find()
);
</script>
<template>
    <p v-if="data" class="text-sm flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path d="M4.25 2A2.25 2.25 0 002 4.25v2a.75.75 0 001.5 0v-2a.75.75 0 01.75-.75h2a.75.75 0 000-1.5h-2zM13.75 2a.75.75 0 000 1.5h2a.75.75 0 01.75.75v2a.75.75 0 001.5 0v-2A2.25 2.25 0 0015.75 2h-2zM3.5 13.75a.75.75 0 00-1.5 0v2A2.25 2.25 0 004.25 18h2a.75.75 0 000-1.5h-2a.75.75 0 01-.75-.75v-2zM18 13.75a.75.75 0 00-1.5 0v2a.75.75 0 01-.75.75h-2a.75.75 0 000 1.5h2A2.25 2.25 0 0018 15.75v-2zM7 10a3 3 0 116 0 3 3 0 01-6 0z" />
        </svg>
        Lähellä sijaitsevia koirametsiä:
        <b>{{ data.length }}</b>
    </p>
    <p v-else class="text-sm flex items-center gap-1">-</p>
</template>