<template>
    <div>
        <div class="app-container">
            <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
            <TheSidenav
            :show="displaySidenav"
            @close="displaySidenav = false" />
            <div class="account-container">
                <account-side-menu class="desktop-only-767"/>
                <account-side-menu-mobile class="mobile-only-767"/>
                <div class="account-content">
                    <nuxt/>
                </div>
            </div>
        </div>
        <div class="page-footer" v-if="showMobileFooter">
          <the-footer />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheSidenav from '@/components/Navigation/TheSideNav.vue';
import AccountSideMenu from '@/components/Navigation/AccountSideMenu.vue';
import AccountSideMenuMobile from '@/components/Navigation/AccountSideMenuMobile.vue';
import TheFooter from '@/components/Footer/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    AccountSideMenu,
    AccountSideMenuMobile,
    TheFooter
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
.account-container{
    display: flex;
    flex-direction: row;
}
.account-content{
  margin-left: 60px;
  width: 844px;
}
.desktop-only-767{
  display: block;
}
.mobile-only-767{
  display: none;
}
@media (max-width: 1023px){
  .account-content{
    margin-left: 30px;
    width: calc(100vw - 344px);
  }
}
@media (max-width: 767px){
  .account-container{
    flex-direction: column;
  }
  .account-content{
    width: 100%;
    margin-left: 0;
  }
  .desktop-only-767{
    display: none;
  }
  .mobile-only-767{
    display: block;
  }
}
</style>
