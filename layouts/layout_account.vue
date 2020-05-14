<template>
    <div>
        <div class="app-container">
            <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
            <TheSidenav
            :show="displaySidenav"
            @close="displaySidenav = false" />
            <div class="account-container">
                <account-side-menu />
                <div class="account-content">
                    <nuxt/>
                </div>
            </div>
        </div>
        <the-footer class="mt-6" />
    </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';
import AccountSideMenu from '@/components/Navigation/AccountSideMenu.vue';
import TheFooter from '@/components/Footer/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheSidenav,
    AccountSideMenu,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    }
   
  },
  created(){
    console.log("[created account layout]");
  }
}
</script>

<style lang="scss" scoped>
.account-container{
    display: flex;
}
.account-content{
  margin-left: 60px;
  width: 844px;
  
}
</style>
