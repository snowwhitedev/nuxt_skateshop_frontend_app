<template>
	<div>
    <news-flash >The whole month of April, FREE SHIPPING worldwide</news-flash>
    <div class="app-container">
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSidenav
        :show="displaySidenav"
        @close="displaySidenav = false" />
      <nuxt/>
    </div>
    <the-footer />
	</div>
</template>

<script>
import NewsFlash from '../components/Notification/NewsFlash.vue';
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';
import TheFooter from '@/components/Footer/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    NewsFlash
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

</style>
