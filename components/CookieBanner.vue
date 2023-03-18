<template>
  <CookieControl locale="en">
    <template #bar>
      <div>
        <h3>Evästeet</h3>
        <p>
          Käytämme omia ja kolmannen osapuolen evästeitä verkkosivuston
          esittämiseen ja sen käytön ymmärtämiseen, paremman palvelun
          tarjoamiseksi. Evästeiden käyttöoikeuksien valinta voidaan muuttaa koska
          tahansa evästeiden valintanapin avulla, joka ilmestyy valinnan jälkeen
          tähän banneriin.
        </p>
        <NuxtLink to="#">Tietosuojaseloste</NuxtLink>
      </div>
    </template>
  </CookieControl>
</template>
<style>
  .cookieControl button.cookieControl__ControlButton {
    bottom: 5rem; 
  }
</style>
<script setup lang="ts">
const {
  /* cookiesEnabled, */
  cookiesEnabledIds,
  /* isConsentGiven,
  isModalActive, */
  moduleOptions
} = useCookieControl();

const idsToWatch = moduleOptions.cookies?.optional.map((cookieId) => cookieId.id);

watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes("AW") &&
      current?.includes("AW")
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload(); // placeholder for your custom change handler
    }
  },
  { deep: true }
);
</script>
  