<template>
  <div>
    <div class="container" >
      <img class="item" id="header" src="assets/logoHorizontal.png">
      <div class="container1">
        <div class="item2" id="circularPhoto">
          <img src="assets/danzmov.jpg">
        </div>
        <div class="container3">
          <h1 class="item3">Danzmov</h1>
          <p class="item4" id="normalText">Usuarios</p>
        </div>

      </div>
      <div class="container2">
        <button2 class="item2">Búsqueda</button2>
        <button2 class="item2">Alta</button2>
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
    name: 'usersMenu',
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
.container3{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item {
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.item2 {
  margin-top: 40px;
}
.item3 {
  margin-top: 50px;
  margin-bottom: 0px;
}
.item4 {
  margin-top: 0px;
}
</style>