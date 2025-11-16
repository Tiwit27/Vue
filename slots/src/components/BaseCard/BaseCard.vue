<template>
    <div class="card">
        <div class="card-title">
            <slot name="title"></slot>
        </div>

        <div class="card-content">
            <slot></slot>
        </div>

        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 20px auto;
  width: 300px;
  border-radius: 8px;
}
.card-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.card-footer {
  margin-top: 10px;
  font-size: 12px;
  color: gray;
}
</style>