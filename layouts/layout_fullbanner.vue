<template>
	<div >
		<div class="header-menu">
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
			<TheSidenav :show="displaySidenav"	@close="displaySidenav = false" />
		</div>
		<nuxt/>
		<the-footer />
	</div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';
import TheFooter from '@/components/Footer/TheFooter.vue';
import BannerMain from '@/components/Banners/BannerMain.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    BannerMain
  },
  data() {
    return {
      displaySidenav: false
    }
  },
  created(){
    console.log("[full banner layout]");
  }
}
</script>

<style lang="scss" scoped>
.header-menu{
	width: 100%;
	max-width: 1296px;
	margin: 0 auto;
	padding: 0 10px;
}
</style>
