<template>
    <div>
        <input type="text" v-model="data.text">
        <h2 :style="{color: data.textColor}">Długość inputa: {{  textLength }}</h2>
    </div>
</template>

<script lang="ts" src="./InputCounter.ts"/>