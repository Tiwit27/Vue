<template>
    <div id="container" >
        <h1><slot name="title"></slot></h1>
        <p><slot></slot></p>
        <slot name="footer"></slot>
    </div>
</template>

<style scoped>
    #container
    {
        display: inline-flex;
        flex-direction: column;
        border: 1px solid black;
        text-align: center;
    }
    #container h1, #container p
    {
        margin: 2% 0;
    }
</style>