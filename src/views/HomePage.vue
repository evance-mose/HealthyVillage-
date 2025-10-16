<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>HealthyVillage</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-fab vertical="bottom" horizontal="end" class="ion-padding">
      <ion-fab-button @click="seeApps">
        <ion-icon :icon="gridOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import {} from "ionicons/dist/types/components/icon/icon";
import { qrCodeOutline, gridOutline } from "ionicons/icons";

const seeApps = () => {
  alert("Opps apps");
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
