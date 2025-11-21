<template>
    <tr class="align-middle">
        <td>{{ todo.id }}</td>
        <td style="width: 40%;">{{ todo.title }}</td>
        <td style="width: 15%">{{todoStatusText}}</td>
        <td style="width: 20%;">{{ formatedDate}}</td>
        <td style="width: 15%"><button class="btn" :class="todoButtonClass" @click="updateStatus">{{todoButtonText}}</button></td>
        <td><img id="icon" src="../../assets/trash.svg"/></td>
    </tr>
</template>

<script lang="ts" src="./TodoItem.ts"/>

<style scoped>
#icon
{
    width: 3.5ch;
}
td button
{
    min-width: 14ch;
}
</style>