<template>
	<div>
    <news-flash >The whole month of April, FREE SHIPPING worldwide</news-flash>
    <div class="app-container">
      <div class="header-menu">
        <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      </div>
      <TheSidenav
        :show="displaySidenav"
        @close="displaySidenav = false" />
      <nuxt/>
    </div>
    <the-footer />
    <cookie-alert v-if="cookieDlg" @close="() => cookieDlg = false" />
	</div>
</template>

<script>
import NewsFlash from '@/components/Notification/NewsFlash.vue';
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSideNav.vue';
import TheFooter from '@/components/Footer/TheFooter.vue';
import CookieAlert from '@/components/Widgets/CookieAlert.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    NewsFlash,
    CookieAlert
  },
  data() {
    return {
      displaySidenav: false,
      cookieDlg: true
    }
   
  },
  created(){
    console.log("[created default layout]");
  }
}
</script>

<style lang="scss" scoped>
.app-container{
  width: 100%;
  max-width: 100%;
  padding: 0;
}
.header-menu{
	width: 100%;
	max-width: 1296px;
	margin: 0 auto;
	padding: 0 10px;
}
</style>
