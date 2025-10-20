<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonBackButton
          default-href="/"
          :icon="arrowBackOutline"
          class="back-arrow"
          slot="start"
          text=""
        />
        <IonTitle>Household Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <h1>{{ household?.location?.name }}</h1>
      <h4>{{ household?.location?.description }}</h4>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { getHouseholdByID } from "@/utils/functions";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";
import { arrowBackOutline } from "ionicons/icons";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id as string;
const household = ref<any>(null);

onMounted(async () => {
  household.value = await getHouseholdByID(id);
});
</script>

<style scoped>
.back-arrow {
  color: white;
}
</style>
