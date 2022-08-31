<template>
  <div>
    <header1></header1>
    <div class="container">
      <h1 class="item">Iniciar sesión</h1>
      <input class="item" type="email" id="email" placeholder="Correo electrónico">
      <input class="item" type="password" placeholder="Contraseña">
      <p class="item" id="link">Regístrate</p>
      <button class="item">Continuar</button>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import header1 from "@/components/header1";

  export default defineComponent({
    name: 'Home',
    components: {
      header1
    }
  });
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item {
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
</style>