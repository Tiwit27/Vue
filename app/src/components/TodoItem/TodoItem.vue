<template>
  <tr>
    <td>{{ id }}.</td>
    <td>{{ text }}</td>
    <td><button @click="ChangeStatus" class="btn" :class="done ? 'btn-danger' : 'btn-success'">{{ done ? "Anuluj" : "Wykonaj" }}</button></td>
  </tr>
</template>
<script src="./TodoItem.ts"/>