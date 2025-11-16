<template>
    <div id="container">
        <div class="d-flex justify-content-center">
            <input type="text" v-model="inputTodo" @input="clearEmptyInputFlag" placeholder="Zadanie" class="form-control w-25 me-3">
            <button @click="addTodoItem" class="btn btn-primary">Dodaj zadanie</button>
        </div>
        <h5 class="text-danger mt-2" v-if="emptyInput">Zadanie musi zawierać opis</h5>
        <table id="list" class="table table-striped w-50 mx-auto mt-4">
            <thead class="table-dark">
                <tr>
                    <td colspan="3">Do zrobienia</td>
                </tr>
                <tr>
                    <th style="width: 6%;">lp.</th>
                    <th>Zadanie</th>
                    <th class="w-25">Akcja</th>
                </tr>
            </thead>
            <tbody>
                <todo-item 
                    v-for="todo in todos.filter(todo => todo.done == false)" 
                    :key="todo.id" 
                    :done="todo.done" 
                    :text="todo.text" 
                    :id="todo.id" 
                    @updateDone="updateDone(todo.id, $event)"
                    />
            </tbody>
        </table>
        <br/>
        <table id="list" class="table table-striped w-50 mx-auto">
            <thead class="table-dark">
                <tr>
                    <td colspan="3">Wykonane</td>
                </tr>
                <tr>
                    <th style="width: 6%;">lp.</th>
                    <th>Zadanie</th>
                    <th class="w-25">Akcja</th>
                </tr>
            </thead>
            <tbody>
                <todo-item 
                    v-for="todo in todos.filter(todo => todo.done == true)" 
                    :key="todo.id" 
                    :done="todo.done" 
                    :text="todo.text" 
                    :id="todo.id" 
                    @updateDone="updateDone(todo.id, $event)"
                    />
            </tbody>
        </table>
         <!--@updateDone jest to customowy event stworzony w TodoItem.ts w metodzie ChangeStatus()
         przesyła on w $event aktualną wartość done (true/false)-->
    </div>
</template>

<script lang="ts" src="./TodoList.ts"/>