<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>HealthyVillage</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-fab vertical="bottom" horizontal="end" class="ion-padding">
      <ion-fab-button @click="openModal">
        <ion-icon :icon="gridOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <ion-modal
      :is-open="showModal"
      @did-dismiss="closeModal"
      class="transparent-modal"
    >
      <ion-content>
        <ion-item button @click="showHouseholds">Households</ion-item>
        <ion-item button @click="showEncounters">Encounters/Visits</ion-item>
      </ion-content>
    </ion-modal>

    <ion-content :fullscreen="true" class="ion-padding">
      <div
        button
        v-for="(value, index) in households"
        :key="index"
        class="list-padding"
      >
        <ion-item @click="showHouseholds(value.resource.id)">
          <div class="list-household">
            <div>
              {{ value.resource.name }}
            </div>
            <div>
              {{ value.resource.description }}
            </div>
          </div>
        </ion-item>
      </div>
    </ion-content>
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
  IonModal,
  IonItem,
} from "@ionic/vue";
import {} from "ionicons/dist/types/components/icon/icon";
import { gridOutline } from "ionicons/icons";
import { onMounted, ref } from "vue";
import { getResources } from "../utils/functions";
import { HouseHold } from "@/utils/types";
import { useRouter } from "vue-router";

const router = useRouter();

let households = ref<null>(null);

onMounted(async () => {
  households.value = await getResources("Location");
});

const showModal = ref<boolean>(false);

function openModal(): void {
  showModal.value = true;
}

function closeModal(): void {
  showModal.value = true;
}

const showEncounters = () => {
  alert("Show Encounters/Visits");
};

const showHouseholds = (id: string) => {
  router.push({ name: "HouseHoldDetails", params: { id } });
};
</script>

<style scoped>
.transparent-modal .modal-wrapper {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
}

.transparent-modal-content {
  background: #fff;
  border-radius: 16px 16px 0 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 200px;
  padding: 16px;
}

.list-household {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  padding: 8px;
}
.list-padding {
  padding-bottom: 5px;
}
</style>
