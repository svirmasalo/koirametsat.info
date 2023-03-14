<template>
  <div ref="og-image" class="bg-primary w-og h-og text-cloud flex flex-col justify-center p-10">
    <div class="">
      <h1 class="text-6xl font-bold mb-6 my-0 leading-none">Puolen hehtaarin koirametsä</h1>
      <p class="text-xl mb-6">Niittyahontie 60 40950 Muurame</p>
      <a class="body-cta-link inline-block bg-primary-active" href="#">Lue lisää</a>
    </div>
  </div>
</template>
<script setup>
 // Generate base64 image from html
 import { toPng } from 'html-to-image';
 /* toPng(document.getElementById(ogImage.id))
  .then(function (dataUrl) {
    console.log(dataUrl, 'asd.png');
  }); */
</script>