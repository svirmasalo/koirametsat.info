<template>
  <div class="my-6">
    <FormKit
      type="form"
      id="reviewForm"
      @submit="addReview"
      submit-label="Lähetä arvostelu"
      v-if="!formSent"
    >
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
      <div class="terms">
        <FormKit type="checkbox" label="Hyväksyn ehdot" validation="accepted" />
        <NuxtLink
          to="/tietoa-palvelusta/kommentoinnin-ehdot"
          title="Kommentoinnin ehdot"
          class="text-xs"
          >Kommentoinnin ehdot.</NuxtLink
        >
      </div>
    </FormKit>
    <div
      v-if="formSent && !reviewSent"
      class="p-4 rounded bg-primary-active text-cloud my-6"
    >
      <p class="text-center">
        <i>Vaikuttaisi siltä, että olet jo arvostellut tämän koirametsän.</i>
      </p>
    </div>
    <ErrorMessage
      message="Hups... eipä onnistunutkaan. Voit kokeilla uudelleen 👍"
      v-if="error"
    />
    <SuccessMessage
      message="Kiitos, arvostelusi on tallennettu."
      v-if="reviewSent"
    />
  </div>
</template>
<style>
[data-type="radio"] .formkit-options {
  @apply flex justify-between;
}
.formkit-input[type="submit"] {
  @apply bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-active transition-colors;
}
.terms {
  @apply mb-4;
}
.terms .formkit-outer {
  @apply mb-1;
}
</style>
<script setup lang="ts">
import "@formkit/themes/genesis";
import { reset } from "@formkit/core";

import { ref } from "vue";

const route = useRoute();

const props = defineProps(["slug"]);
const formRating = ref(undefined);

const error = useState("error", () => false);
const reviewSent = useState("reviewSent", () => false);
const formSent = useState("formSent", () => false);

const comCookie = useCookie("_kmcom", {
  expires: new Date("2035-12-31"),
  path: route.path,
  sameSite: "strict",
  secure: true,
});

// Set form sent if comCookie value is the same as slug
if (comCookie.value && comCookie.value === props.slug) {
  formSent.value = true;
}

const addReview = async (fields: any) => {
  if (formSent.value) {
    return;
  }

  // Turn the rating into a number
  const rating = Number(formRating.value);

  const data = {
    user: fields.name,
    review: fields.review,
    rating: rating,
    date: new Date(),
  };
  // Add a new document with automatically generated id.
  try {
    const res = await usePostReview(props.slug, data);
  } catch (e) {
    console.error("Error adding document: ", e);
    error.value = true;
  }
  if (!error.value) {
    reviewSent.value = true;
    formSent.value = true;
    comCookie.value = props.slug;
  }
  reset("reviewForm");
};

// Reset form data on unmount
onUnmounted(() => {
  formSent.value = false;
  reviewSent.value = false;
  error.value = false;
});
</script>