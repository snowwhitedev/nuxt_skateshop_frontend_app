<template>
    <div>
      <div class="app-container">
        <header>
            <checkout-header v-if="$device.isMobile"/>
        </header>
        <p class="right-quote">
          Need help? Call use on <span class="phone-number">+31 123 8910 1112</span>
        </p>
        <div class="checkout-container">
          <nuxt/>
        </div>
      </div>
      <the-footer />
    </div>
</template>

<script>
import CheckoutHeader from "@/components/Navigation/CheckoutHeader.vue";
import TheFooter from '@/components/Footer/TheFooter.vue';
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSideNav.vue';
export default {
  components: {
    CheckoutHeader,
    TheFooter,
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
   
  },
  created(){
    console.log("[created default layout]");
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.checkout-container{
    width: 100%;
    max-width: 1060px;
    margin: 10px auto 60px;
}
.right-quote{
    text-align: right;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: right;
    letter-spacing: 0.02em;
    color: #283441;
    margin-top: 10px;
}
.right-quote .phone-number{
    color: #357BFF;
    font-weight: 600;
}

@media (max-width: 1023px){
  .checkout-container{
    margin-bottom: 50px;
  }
}
@media (max-width: 767px){
  .checkout-container{
    margin-top: 20px;
  }
}
</style>
