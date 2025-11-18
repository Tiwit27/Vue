<template>
  <div id="app">
    <h1>Todo List with backend</h1>
    <table class="table table-striped w-50 mx-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Add Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <todo-item v-for="todo in data.todos" :key="todo.id" :todo="todo"/>
      </tbody>
    </table>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from './components/TodoItem';
import { Todo } from './interfaces/Todo';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

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

      const response = await axios.post<{data: {todos: Todo[]}}>("http://localhost:3000/graphql",{
        query: query
      });

      console.log(response.data.data.todos)
      this.data.todos = response.data.data.todos.map(todo => ({
        ...todo,
        created_at: todo.created_at ? new Date(Number(todo.created_at)) : undefined
      }));
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
