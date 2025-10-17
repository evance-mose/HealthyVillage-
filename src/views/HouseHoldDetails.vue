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
      <p>ID: {{ id }}</p>
    </IonContent>
  </IonPage>
</template>
<script lang="ts" setup>
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
import { useRoute } from "vue-router";
const router = useRoute();
const id = router.params.id;
</script>

<style setup>
.back-arrow {
  color: white;
}
</style>
