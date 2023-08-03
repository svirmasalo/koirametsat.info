<script setup>
// Props
const props = defineProps(['city']);
const label = `Ilmoitus: Tässä kaupungissa ei vielä ole paikallisia koirametsiä.`;
</script>
<template>
    <aside class="mx-auto md:-mx-2 bg-primary-active p-4 w-full" :aria-label="label">
        <div class="prose prose-invert prose-sm text-secondary text-left">
            <h2>Ei paikallisia koirametsiä</h2>
            <p>
                Palvelusta ei vielä löydy tietoja tämän kaupungin paikallisista koirametsistä.
            </p>
            <p>
                Ilmianna puuttuva metsä sähköpostitse otsikolla "Uusi koirametsä". 
                Kerro sähköpostissa tiedot kohteesta, sekä verkko- tai Facebook-osoite. 
                Lähetä ilmianto osoitteeseen <a title="Sähköpostiosoite koirametsän tietojen lähettämiseen" href="mailto:sampo.virmasalo@gmail.com?subject=Uusi%20koirametsä">sampo.virmasalo@gmail.com</a>.
                Kiitos, että autat koiranomistajia löytämään koirametsät entistä helpommin 💡
            </p>
        </div>
    </aside>
    
</template>