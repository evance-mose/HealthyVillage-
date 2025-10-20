<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <ion-back-button
          default-href="/"
          :icon="arrowBackOutline"
          class="back-arrow"
          slot="start"
          text=""
        >
        </ion-back-button>
        <IonTitle>HouseHold Details</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <h1>{{ household?.name }}</h1>
      <h4>{{ household?.description }}</h4>
    </IonContent>
  </IonPage>
</template>
<script lang="ts" setup>
import { getHouseholdByID } from "@/utils/functions";
import { HouseHold } from "@/utils/types";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonItem,
  IonButton,
  IonBackButton,
} from "@ionic/vue";
import { arrowBackOutline } from "ionicons/icons";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
const id = router.params.id;
const household = ref();

onMounted(() => {
  console.log(getHouseholdByID(id));
});
</script>

<style setup>
.back-arrow {
  color: white;
}
</style>
