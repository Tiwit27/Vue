<template>
    <tr class="align-middle">
        <td>{{ todo.id }}</td>
        <td style="width: 40%;">{{ todo.title }}</td>
        <td style="width: 15%">{{todoStatusText}}</td>
        <td><img :src="imageSrc"></td>
        <td style="width: 20%;">{{ formatedDate}}</td>
        <td style="width: 15%">
            <button class="btn" :class="todoButtonClass" @click="updateStatus">{{todoButtonText}}</button>
        </td>
        <td>
            <img id="icon" src="../../assets/trash.svg" @click="deleteTodo"/>
        </td>
    </tr>
</template>

<script lang="ts" src="./TodoItem.ts"/>

<style scoped>
#icon
{
    width: 3.5ch;
    cursor: pointer;
}
td button
{
    min-width: 14ch;
}
img
{
    width: 5ch;
}
</style>