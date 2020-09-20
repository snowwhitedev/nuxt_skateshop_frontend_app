<template>
	<div >
		<div class="header-menu">
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
			<TheSidenav :show="displaySidenav"	@close="displaySidenav = false" />
		</div>
		<nuxt/>
    <div class="page-footer" v-if="showMobileFooter">
		  <the-footer  />
    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSideNav.vue';

import BannerMain from '@/components/Banners/BannerMain.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    BannerMain
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
.header-menu{
	width: 100%;
	max-width: 1296px;
	margin: 0 auto;
	padding: 0 10px;
}
.page-footer {
  margin-top: 60px;
}
</style>
