<script setup>
// Props
const props = defineProps(['city']);
const label = `Ilmoitus: Palvelusta ei vielä löydy tietoja kaupungin ${props.city} koirametsistä.`;
</script>
<template>
    <aside class="mx-auto md:-mx-2 bg-primary-active p-4 w-full" :aria-label="label">
        <div class="prose prose-invert prose-sm text-secondary text-left">
            <h2>Palvelusta ei vielä löydy tietoja tämän kaupungin koirametsistä.</h2>
            <p>
                Ilmianna puuttuva metsä sähköpostitse otsikolla "Uusi koirametsä". 
                Kerro sähköpostissa tiedot kohteesta, sekä verkko- tai Facebook-osoite. 
                Lähetä ilmianto osoitteeseen <a title="Sähköpostiosoite koirametsän tietojen lähettämiseen" href="mailto:sampo.virmasalo@gmail.com?subject=Uusi%20koirametsä">sampo.virmasalo@gmail.com</a>.
                Kiitos, että autat koiranomistajia löytämään koirametsät entistä helpommin 💡
            </p>
        </div>
    </aside>
    
</template>