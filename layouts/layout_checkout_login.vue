<template>
    <div>
      <div class="app-container">
        <header>
            <checkout-header v-if="!$device.isMobile"/>
            <TheHeader v-if="$device.isMobile" @sidenavToggle="displaySidenav = !displaySidenav" />
            <TheSidenav
              v-if="$device.isMobile"
              :show="displaySidenav"
              @close="displaySidenav = false" />
        </header>
        <p class="right-quote" v-if="!$device.isMobile">
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
    margin: 10px auto 0;

    // border: 1px solid black;
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
}
.right-quote .phone-number{
    color: #357BFF;
    font-weight: 600;
}

</style>
