<template>
  <div id="app">
    <div class="d-flex justify-content-center align-items-center">
      <h1 class="m-0 me-2">TODO LIST</h1>
      <img class="img-icon" src="../public/add.svg" @click="data.addingNewTodo = true"/>
      <img class="img-icon" src="../public/filter.svg" @click="data.changingFiltres = true"/>
      <i class="fi fi-rr-filter"></i>
    </div>
    <table class="table table-striped w-50 mx-auto mt-4">
      <thead>
        <tr class=" table-dark">
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
          <th>Priotity</th>
          <th>Add Time</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <todo-item v-for="todo in sortedTodos" :key="todo.id" :todo="todo" @updateStatus="updateStatus($event)" @deleteTodo="deleteTodo($event)"/>
      </tbody>
    </table>
    <div class="PopUpBackground" v-if="data.addingNewTodo" @click="data.addingNewTodo = false">
      <div class="PopUp" @click.stop>
        <h1>Adding New Todo</h1>
        <div class=" d-flex justify-content-between align-items-center mt-1">
          <label for="title"><h3 class="m-0 me-3">Title</h3></label>
          <input type="text" name="title" class="form-control" v-model="data.addingNewTodoInput">
        </div>
        <div class=" d-flex justify-content-between align-items-center mt-1">
          <label for="priority" class=""><h3 class="m-0 me-3">Priority</h3></label>
          <select name="priority" class="form-select" v-model="data.addingNewTodoPriority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button class="btn btn-success " @click="addTodo"><h4 class="m-0">Add</h4></button>
        <button class="btn btn-danger" @click="data.addingNewTodo = false"><h4 class="m-0">Cancel</h4></button>
      </div>
    </div>
    <div class="PopUpBackground" v-if="data.changingFiltres" @click="data.changingFiltres = false">
      <div class="PopUp" @click.stop style="height: 350px;">
        <h1>Filtres</h1>
        <div class=" d-flex justify-content-between align-items-center mt-1">
          <label for="title"><h3 class="m-0 me-3">Title</h3></label>
          <input type="text" name="title" class="form-control" v-model="data.filtres.title">
        </div>
        <div class="d-flex justify-content-between align-items-center mt-1">
          <label for="status" class=""><h3 class="m-0 me-3">Status</h3></label>
          <div class="d-flex justify-content-center flex-grow-1">
            <div class="d-flex align-items-center me-2">
              <input type="checkbox" name="status" value="Todo" v-model="data.filtres.status.todo">
              <h5 class="m-0 ms-1">Todo</h5>
            </div>
            <div class="d-flex align-items-center ms-2">
              <input type="checkbox" name="status" value="Done" v-model="data.filtres.status.done">
              <h5 class="m-0 ms-1">Done</h5>
            </div>
          </div>
        </div>
        <div class=" d-flex justify-content-between align-items-center mt-1">
          <label for="priority" class=""><h3 class="m-0 me-3">Priority</h3></label>
          <div class="d-flex justify-content-center flex-grow-1">
            <div class="d-flex align-items-center me-2">
              <input type="checkbox" name="status" value="Low" v-model="data.filtres.priority.low">
              <h5 class="m-0 ms-1">Low</h5>
            </div>
            <div class="d-flex align-items-center ms-2">
              <input type="checkbox" name="status" value="Medium" v-model="data.filtres.priority.medium">
              <h5 class="m-0 ms-1">Medium</h5>
            </div>
            <div class="d-flex align-items-center ms-2">
              <input type="checkbox" name="status" value="High" v-model="data.filtres.priority.high">
              <h5 class="m-0 ms-1">High</h5>
            </div>
          </div>
        </div>
        <button class="btn btn-success"><h4 class="m-0">Apply</h4></button>
        <button class="btn btn-danger"><h4 class="m-0">Cancel</h4></button>
      </div>
    </div>
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
        todos: [] as Todo[],
        addingNewTodo: false,
        addingNewTodoInput: "",
        addingNewTodoPriority: "Low",
        changingFiltres: false,
        filtres: {
          title: "",
          status: {
            done: true,
            todo: true,
          },
          priority:{
            low: true,
            medium: true,
            high: true
          }
        }
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
            priority
          }
        }
      `;

      const response = await axios.post<{data: {todos: Todo[]}}>("http://localhost:3000/graphql",{
        query: query
      });

      console.log(response.data.data.todos)
      this.data.todos = response.data.data.todos.map(todo => ({
        ...todo,
        created_at: new Date(Number(todo.created_at))
      }));
    },
    async addTodo(){
      const query = `
        mutation{
          addTodo(input: {title: "${this.data.addingNewTodoInput.trim()}", priority: "${this.data.addingNewTodoPriority}"}){
            id,
            title,
            completed,
            created_at,
            priority
          }
        }
      `;

      const response = await axios.post<{data: {addTodo: Todo}}>("http://localhost:3000/graphql",{
        query: query
      });


      this.data.todos.push({...response.data.data.addTodo, created_at: new Date(Number(response.data.data.addTodo.created_at))});
      this.data.addingNewTodo = false;
    },
    updateStatus(todo: Todo){
      const index = this.data.todos.findIndex(t => t.id === todo.id);
      if(index != -1)
      {
        this.$set(this.data.todos, index, todo);
      }
    },
    deleteTodo(id: number){
      const index = this.data.todos.findIndex(t => t.id === id);
      if(index != -1)
      {
        this.$delete(this.data.todos, index);
      }
    }
  },
  watch:{
    "data.addingNewTodo"(val)
    {
      if(val == false)
      {
        this.data.addingNewTodoInput = "";
        this.data.addingNewTodoPriority = "Low";
      }
    }
  },
  computed:{
    sortedTodos(): Todo[]{
      const priorityOrder: Record<string, number> = {
        High: 3,
        Medium: 2,
        Low: 1
      };
      return this.data.todos.slice().sort((a: Todo, b: Todo) => priorityOrder[b.priority] - priorityOrder[a.priority])
    },
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
.PopUp 
{
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 300px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
.PopUpBackground
{
  position: fixed;
  background-color: #00000095;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 101%;
  height: 101%;
}
.PopUp input, .PopUp select{
  width: 70%;
}
#priorityTh{
  cursor: pointer;
}
.img-icon
{
  cursor: pointer;
  width: 2.5%;
  padding: 0.4%;
  border: #000000 solid 0.4vh;
  background-color: #198754;
  border-radius: 25%;
  margin: 0.5%;
}
</style>
