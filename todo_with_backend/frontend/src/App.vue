<template>
  <div id="app">
    <todo-item/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from './components/TodoItem';
import { Todo } from './interfaces/Todo';
import axios from 'axios';

export default Vue.extend({
  name: 'App',
  components: {
    TodoItem
  },
  data(){
    return{
      data:{
        todos: [] as Todo[]
      }
    }
  },
  methods:{
    async getTodos(){
      const query = `
        query{
          todos{
            id
            title
            completed
            created_at
          }
        }
      `;

      const response = await axios.post("http://localhost:3000/graphql",{
        query: query
      });

      console.log(response);
    }
  },
  mounted(){
    this.getTodos();
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
}
</style>
