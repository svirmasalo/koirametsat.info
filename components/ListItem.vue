<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        substring: {
            type: String,
            required: false
        },
        to: {
            type: String,
            required: true
        }
    }
}
</script>
<template>
    <NuxtLink class="flex flex-row justify-between items-center" :to="to">
        <div class="">
            <p class="text-lg font-bold">{{ title }}</p>
            <p class="text-sm leading-relaxed">{{ substring }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </NuxtLink>
</template>