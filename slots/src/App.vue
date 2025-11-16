<template>
  <div id="app">
    <!-- Karta 1 -->
    <base-card>
      <template #title>Lew</template>
      Najgroźniejszy drapieżnik afrykański.
      <template #footer>Źródło: Wikipedia</template>
    </base-card>
    <!-- Karta 2 -->
    <base-card>
      <template #title>Słoń</template>
      Największe zwierzę lądowe na świecie.
      <template #footer>Waga: 6000 kg</template>
    </base-card>

    <!-- Karta 3 -->
    <base-card>
      <template #title>Małpa</template>
      Bardzo inteligentne i zręczne zwierzę.
      <template #footer>Lubi banany 🍌</template>
    </base-card>
    <hr/>
    <alert-box v-if="data.alertVisibility">
      <template #title>Przykładowy alert</template>
      Tekst Alertu
      <template #footer><button @click="data.alertVisibility = false">Zaakceptuj alert</button></template>
    </alert-box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseCard from './components/BaseCard/BaseCard.vue';
import AlertBox from './components/AlertBox';

export default Vue.extend({
  name: 'App',
  components: {
    BaseCard,
    AlertBox
  },
  data(){
    return{
      data:{
        alertVisibility: true
      }
    }
  }
});
</script>
