<script setup>
    const links = document.getElementsByTagName('a');
    const trackClick = (e) => {
        const link = e.target;
        const trackId = link.dataset.trackId;
        const href = link.href;

        try {
            dataLayer.push({
                event: "Item click",
                to: href,
                view: document.title,
                itemId: trackId,
            });
        } catch (error) {
            console.warn("Datalayer not defined");
        }
    }
    if (links) {
        for (let i = 0; i < links.length; i++) {
            links[i].setAttribute('data-track-id', i);
            links[i].addEventListener('click', trackClick);
        }
    }
</script>
<template>
    <!-- Just for the lulz -->
    <p class="sr-only"></p>
</template>