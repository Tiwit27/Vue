<template>
  <div>
    <input type="number" v-model="count">
    <button @click="increment">Dodaj</button>
    <h2>Podwójona liczba klików: {{ doubleCount }}</h2>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    //name odpowiada za wyświetlanie nazwy komponentu w vue devTools w przeglądarce
    name: "CounterComponent",
    data(){
        //data() zawiera wszystkie elementy których zmiana powoduje odświerzenie danych na stronie
        return{
            count: 0
        }
    },
    methods:{
        //methods, zawiera podstawowe metody
        //(przeliczana przy każdym wykonaniu)
        increment()
        {
            this.count++
        }
    },
    computed:{
        //sekcja computed zawiera funkcje bazujące na danych z data() albo props
        //(przeliczana tylko gdy zmieni się wartość w jej środku)
        doubleCount()
        {
            return this.count * 2;
        }
    }
})
</script>
