<template>
  <div class="my-6">
    <FormKit type="form" id="reviewForm" @submit="addReview" submit-label="Lähetä arvostelu" v-if="!formSent">
      <FormKit
        type="text"
        name="name"
        id="name"
        validation="required|not:Admin|length:5,36"
        label="Nimi"
        help="Syötä nimesi"
        placeholder="Etunimi Sukunimi tai nimimerkki"
      />
      <FormKit
        type="textarea"
        name="review"
        id="review"
        validation="required|not:Admin|length:5,300"
        label="Arvostelu"
        help="Kirjoita arvostelu"
        placeholder="Pidin / en pitänyt koirametsästä, koska..."
      />
      <FormKit
        v-model="formRating"
        type="radio"
        label="Arvosana"
        :options="['1', '2', '3', '4', '5']"
        help="1 = huono, 5 = erinomainen"
        validation="matches:1,2,3,4,5|required"
      />
      <FormKit
        type="checkbox"
        label="Hyväksyn ehdot"
        validation="accepted"
      />
    </FormKit>
    <div v-else class="p-4 rounded border broder-red-500 my-6">
      <p class="text-center"><i>Olet jo arvostellut tämän koirametsän.</i></p>
    </div>
    <ErrorMessage message="Hups... eipä onnistunutkaan. Voit kokeilla uudelleen 👍" v-if="error"/>
    <SuccessMessage message="Kiitos, arvostelusi on tallennettu." v-if="reviewSent"/>
  </div>
</template>
<style>
[data-type="radio"] .formkit-options {
  @apply flex justify-between;
}
.formkit-input[type="submit"] {
  @apply bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-active transition-colors;
}
</style>
<script setup lang="ts">
import "@formkit/themes/genesis";
import {reset} from "@formkit/core";

import {ReviewPost} from "types/review.post";

import { addDoc, collection as collectionRef } from "firebase/firestore";
import { useFirestore} from "vuefire";

import { ref } from 'vue'

const props = defineProps(["slug"]);
const formRating = ref(undefined);

const db = useFirestore();
const parkCollection = collectionRef(db, props.slug[0]);

const error = useState('error', () => false);
const reviewSent = useState('reviewSent', () => false);
const formSent = useState('formSent', () => false);

const addReview = async (fields: any) => {

  if (formSent.value) {
    return;
  }

  // Turn the rating into a number
  const rating = Number(formRating.value);

  const data:ReviewPost = {
    user: fields.name,
    review: fields.review,
    rating: rating,
    date: new Date(),
  };
  // Add a new document with automatically generated id.
  try {
    const res = await addDoc(parkCollection, data);
  } catch (e) {
    console.error("Error adding document: ", e);
    error.value = true;
  }
  if (!error.value) {
    // Set timeout to show success message. This helps user with bouncing screen.
    setTimeout(() => {
      reviewSent.value = true;
    }, 2000);
  }
  reset('reviewForm');
  formSent.value=true;
};
</script>