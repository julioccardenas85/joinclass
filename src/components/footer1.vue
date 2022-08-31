<template>
  <div class="footer">
    <div class="box">
      <img class="footerButton" src="assets/icon/return.png">
      <img class="footerButton" src="assets/icon/home.png">
      <div class="footerButton" id="smallCircularPhoto">
        <img src="assets/icon/no_user_photo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer1"
}
</script>

<style scoped>
  .footer {
    height: 92px;
    width: auto;
    background-color: #DDF1F4;

  }
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .footerButton {
    height: 50px;
    width: 50px;
    margin-top: 21px;
  }

</style>