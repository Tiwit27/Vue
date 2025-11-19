<template>
    <tr class="align-middle">
        <td>{{ data.todo.id }}</td>
        <td style="width: 40%;">{{ data.todo.title }}</td>
        <td style="width: 15%">{{ data.todo.completed ? "Done" : "Todo"}}</td>
        <td>{{ formatedDate}}</td>
        <td style="width: 15%"><button class="btn" :class="data.todo.completed ? 'btn-danger' : 'btn-success'" @click="data.todo.completed = !data.todo.completed">{{ data.todo.completed ? "Cancel" : "Mark as done"}}</button></td>
        <td><img id="icon" src="../../assets/trash.svg"/></td>
    </tr>
</template>

<script lang="ts" src="./TodoItem.ts"/>

<style scoped>
#icon
{
    width: 2rem;
}
</style>