<template>
  <div id="app">
    <div>
      <h1>Animals List</h1>
      <div id="filtres" class="d-inline-flex flex-column">
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="data.filters.name" name="name">
        </div>
        <div>
          <label for="species">Species</label>
          <input type="text" v-model="data.filters.species" name="species">
        </div>
        <div >
          <label for="minW">Min weight</label>
          <input type="number" v-model="data.filters.minWeight" name="minW"/>
        </div>
        <div>
          <label for="maxW">Min weight</label>
          <input type="number" v-model="data.filters.maxWeight" name="maxW"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import Animal from './interfaces/Animal';

export default Vue.extend({
  name: 'App',
  data(){
    return{
      data:{
        animals: [] as Animal[],
        filters:{
          name: "",
          species: "",
          minWeight: 0,
          maxWeight: 0,
        }
      }
    }
  },
  created(){
    this.data.animals = [
      { name: "Lion", species: "Panthera leo", weight: 190 },
      { name: "Tiger", species: "Panthera tigris", weight: 220 },
      { name: "Elephant", species: "Loxodonta africana", weight: 5400 },
      { name: "Giraffe", species: "Giraffa camelopardalis", weight: 800 },
      { name: "Zebra", species: "Equus quagga", weight: 350 },
      { name: "Cheetah", species: "Acinonyx jubatus", weight: 72 },
      { name: "Leopard", species: "Panthera pardus", weight: 90 },
      { name: "Hippopotamus", species: "Hippopotamus amphibius", weight: 1500 },
      { name: "Rhinoceros", species: "Rhinoceros unicornis", weight: 2300 },
      { name: "Hyena", species: "Crocuta crocuta", weight: 60 },
      { name: "Wolf", species: "Canis lupus", weight: 50 },
      { name: "Fox", species: "Vulpes vulpes", weight: 14 },
      { name: "Bear", species: "Ursus arctos", weight: 350 },
      { name: "Kangaroo", species: "Macropus rufus", weight: 85 },
      { name: "Panda", species: "Ailuropoda melanoleuca", weight: 100 },
      { name: "Gorilla", species: "Gorilla gorilla", weight: 160 },
      { name: "Chimpanzee", species: "Pan troglodytes", weight: 50 },
      { name: "Orangutan", species: "Pongo pygmaeus", weight: 75 },
      { name: "Crocodile", species: "Crocodylus niloticus", weight: 500 },
      { name: "Alligator", species: "Alligator mississippiensis", weight: 360 },
      { name: "Ostrich", species: "Struthio camelus", weight: 140 },
      { name: "Penguin", species: "Aptenodytes forsteri", weight: 30 },
      { name: "Eagle", species: "Aquila chrysaetos", weight: 6 },
      { name: "Hawk", species: "Buteo jamaicensis", weight: 1.2 },
      { name: "Falcon", species: "Falco peregrinus", weight: 1 },
      { name: "Parrot", species: "Ara macao", weight: 1 },
      { name: "Flamingo", species: "Phoenicopterus roseus", weight: 3 },
      { name: "Peacock", species: "Pavo cristatus", weight: 4 },
      { name: "Camel", species: "Camelus dromedarius", weight: 600 },
      { name: "Donkey", species: "Equus africanus asinus", weight: 180 },
      { name: "Horse", species: "Equus ferus caballus", weight: 500 },
      { name: "Sheep", species: "Ovis aries", weight: 80 },
      { name: "Goat", species: "Capra aegagrus hircus", weight: 60 },
      { name: "Pig", species: "Sus scrofa domesticus", weight: 120 },
      { name: "Dog", species: "Canis lupus familiaris", weight: 30 },
      { name: "Cat", species: "Felis catus", weight: 4 },
      { name: "Rabbit", species: "Oryctolagus cuniculus", weight: 2 },
      { name: "Mouse", species: "Mus musculus", weight: 0.03 },
      { name: "Rat", species: "Rattus norvegicus", weight: 0.35 },
      { name: "Bat", species: "Chiroptera", weight: 0.02 },
      { name: "Sloth", species: "Folivora", weight: 5 },
      { name: "Koala", species: "Phascolarctos cinereus", weight: 15 }
    ]
    this.data.filters.maxWeight = this.data.animals.map(w => w.weight).sort((a,b) => a - b)[this.data.animals.length - 1]
  },
  components: {
  }
});
</script>

<style scoped>
  #app
  {
    text-align: center;
    margin: 0 auto;
  }
  #filtres div
  {
    display: flex;
    align-items: center;
    width: 100%;
  }
  #filtres div input
  {
    width: 75%;
    margin-left: auto;
  }
  #filtres div label
  {
    min-width: 40%;
    margin-right: auto;
    text-align: left;
    margin: 2% 0;
  }
</style>
