<template>
  <div class="cookie-alert">
    <div class="close-dlg">
      <p>Allow cookies</p>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" @click="onClose">
        <path d="M2.82837 2.82831L8.48522 8.48516" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.82837 8.48517L8.48522 2.82831" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <p>
      This website uses cookies in order to offer you the most relevant information. Please accept cookies for optimal performance.
    </p>
    <div class="cookie-actions">
      <btn-text btnClass="btn primary lg" @onClick="allowCookie">Yes, I allow cookies</btn-text>
      <textlink btnClass="textlink dark" class="learn-more">Learn more</textlink>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    allowCookie() {
      this.$emit("close");
    },
    onClose() {
      this.$emit("close");
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-alert {
  width: calc(100vw - 40px);
  max-width: 464px;
  position: fixed;
  bottom: 10px;
  left: 30px;
  padding: 40px 30px 20px 30px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #F3F4F4;
  box-sizing: border-box;
  box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
  border-radius: 3px;
  z-index: 99999;
}
.cookie-actions {
  margin-top: 10px;
}
.learn-more {
  margin-left: 40px;
}
.close-dlg {
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  right: 10px;
}
.close-dlg p {
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 0.02em;
  color: #283441;
  margin-right: 5px;
}
.close-dlg svg {
  cursor: pointer;
}
</style>