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
    <div class="page-footer" v-show="showMobileFooter">
      <the-footer />
    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewsFlash from '@/components/Notification/NewsFlash.vue';
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSideNav.vue';
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
  },
  computed: {
    ...mapGetters('uiprops', ['showMobileFooter'])
  }
}
</script>

<style lang="scss" scoped>

</style>
