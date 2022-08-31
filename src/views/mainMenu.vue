<template>
  <div>
    <div class="container" >
      <img class="item" id="header" src="assets/logoHorizontal.png">
      <p class="item" id="normalText">¡Hola usuario!</p>
      <h1 class="item">Mis academias</h1>
      <div class="item" id="circularPhoto">
        <img src="assets/danzmov.jpg">
      </div>
      <p id="normalText">Danzmov</p>
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
    name: 'mainMenu',
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
  .item {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
  #normalText {
    margin-left: auto;
    margin-right: auto;
  }

</style>