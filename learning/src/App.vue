<template>
  <div id="app">
    <input-counter/>
    <hr/>
    <list-filter @changePattern="changePattern($event)"/>
    <ul>
      <li v-for="animal in filtredAnimals" :key="animal">{{ animal }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListFilter from './components/ListFilter';
import InputCounter from './components/InputCounter';

export default Vue.extend({
  name: 'App',
  components: {
    ListFilter,
    InputCounter
  },
  data(){
    return{
      data: {
        animals: [
          "lion",
          "tiger",
          "elephant",
          "giraffe",
          "zebra",
          "kangaroo",
          "koala",
          "panda",
          "bear",
          "wolf",
          "fox",
          "rabbit",
          "deer",
          "horse",
          "donkey",
          "monkey",
          "chimpanzee",
          "gorilla",
          "leopard",
          "cheetah",
          "hippopotamus",
          "rhinoceros",
          "crocodile",
          "alligator",
          "snake",
          "lizard",
          "turtle",
          "frog",
          "toad",
          "eagle",
          "owl",
          "parrot",
          "penguin",
          "seal",
          "walrus",
          "dolphin",
          "whale",
          "shark",
          "octopus",
          "crab",
          "lobster",
          "bee",
          "butterfly",
          "ant",
          "spider",
          "hedgehog",
          "squirrel",
          "raccoon",
          "skunk",
          "moose",
          "platypus"
        ],
        pattern: ""
      }
    }
  },
  methods:{
    changePattern(pattern: string){
      this.data.pattern = pattern.trim();
    }
  },
  computed:{
    filtredAnimals(): string[]{
      return this.data.animals.filter(a => a.startsWith(this.data.pattern.trim()));
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: auto;
}
ul {
  list-style-position: inside;
  text-align: center;
  padding-left: 0;
}

li {
  margin: 0.5em 0;
}
</style>
