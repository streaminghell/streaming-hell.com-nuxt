<template>
  <div class="wrapper">
    <div class="container">
      <div class="form-container">
        <div class="title">Войдите в свою учетную запись</div>
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?11"
          data-telegram-login="streaminghell_bot"
          data-size="medium"
          data-radius="3"
          data-auth-url="https://api.streaming-hell.com/v1/auth/telegram"
          data-request-access="write"
        ></script>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #fafbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
}

.container {
  margin-top: 40px;
  max-width: 280px;

  @media (min-width: 380px) {
    max-width: 345px;
  }

  width: 100%;
  height: 100%;
  flex: 1 0 0;
  // margin: auto;
  padding: 16px;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  box-sizing: border-box;
  color: rgb(94, 108, 132);
  margin: 0 auto 24px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
}

.title {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
  color: rgb(94, 108, 132);
  font-size: 16px;
  font-weight: 700;
}
</style>
