<template>
  <div>
    <div class="container" >
      <img class="item" id="header" src="assets/logoHorizontal.png">
      <div class="container1">
        <div class="item2" id="circularPhoto">
          <img src="assets/danzmov.jpg">
        </div>
        <h1 class="item2">Danzmov</h1>
      </div>
      <div class="container2">
        <button2 class="item2">Usuarios</button2>
        <button2 class="item2">Grupos</button2>
        <button2 class="item2">Horario</button2>
        <button2 class="item2">Pagos</button2>
        <button2 class="item2">Reportes</button2>
      </div>
      <div class="foot">
        <footer1></footer1>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import footer1 from "@/components/footer1";

  export default defineComponent ({
    name: 'moduleMenu',
    components: {
      footer1
    }
  });
</script>

<style scoped>
#header {
  box-sizing: border-box;
  height: 51px;
  width: 230px;
  border: 1px solid #808080;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container1{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.container2{
  display: flex;
  flex-direction: column;
}
.item {
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.item2 {
  margin-top: 40px;
}
</style>