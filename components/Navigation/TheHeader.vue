<template>
<div class="header-container">
	<header class="the-header">
		<TheSideNavToggle @toggle="$emit('sidenavToggle')" />
		<nuxt-link to="/"><Logo class="header-logo" /></nuxt-link>
		<div class="navigation-items">
		<ul class="nav-list">
			<li class="nav-item"><nuxt-link to="/shop">Shop</nuxt-link></li>
			<li class="nav-item"><nuxt-link to="/rate">Rate</nuxt-link></li>
			<li class="nav-item"><nuxt-link to="/contests">Contests</nuxt-link></li>
		</ul>
		</div>
		<div class="spacer"></div>
		<div class="navigation-items">
			<ul class="nav-list">
				<li class="nav-item">
					<nuxt-link to="/help">Help Center</nuxt-link>
				</li>
			</ul>
		</div>
		<input-search class="input-normal header-action nav-header-search" placeHolder="Search designs, decks, shops or designers"/>
		<shopping-cart  class="header-action"/>
		<notification-panel v-if="$auth.loggedIn" class="header-action"/>
		<toggle-msg v-if="$auth.loggedIn" class="header-action nav-header-message"/>
		<account-menu v-if="$auth.loggedIn" class="header-action"/>
		<nuxt-link v-if="!$auth.loggedIn" to="/login">
			<btn-text class="header-action" btnClass="btn primary sm">Login</btn-text>
		</nuxt-link>
	</header>
	<input-search class="nav-header-mobile-search" placeHolder="Search designs, decks, shops or designers"/>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Logo from "@/components/Navigation/Logo.vue";
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";
import ShoppingCart from "@/components/Navigation/ShoppingCart.vue";
import AccountMenu from '@/components/Navigation/AccountMenu.vue';
import NotificationPanel from '@/components/Navigation/NotificationPanel.vue';
export default {
  name: "TheHeader",
	components: {
		TheSideNavToggle,
		Logo,
		ShoppingCart,
		AccountMenu,
		NotificationPanel
	},
	data(){
		return{
		}
	},
	methods:{
		
	},
	created(){
		const isMobile = this.$device.isMobile;
		this.$store.dispatch('uiprops/checkMobile', isMobile);
	},
	computed:{
		authLoggedIn(){
			return this.$auth.$storage.getUniversal("authLoggedIn");
		}
	}
};
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.header-container {
  	margin-top:20px;
	//   height: 82px;
	height: auto;
	margin-bottom: 20px;
}
.the-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;
  box-sizing: border-box;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
	margin: 0 20px;
}

.nav-item a {
	text-decoration: none;
	color: #283441;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
	color: #357BFF;
}

.nav-item a::after{
	width: 15px;
	background-color: #357BFF;
	display: block;
	height: 1px;
	margin: 0 auto;
	opacity: 0;
	-webkit-transition: all ease-in-out 0.5s;
	-moz-transition: all ease-in-out 0.5s;
	-o-transition: all ease-in-out 0.5s;
	transition: all ease-in-out 0.5s;
}

.nav-item a.nuxt-link-active::after {
	content: '';
	-webkit-transform: translateY(20px);
	-moz-transform: translateY(20px);
	-ms-transform: translateY(20px);
	transform: translateY(20px);
	opacity: 1;
}

.header-actions{
  display: flex;
}
.header-action{
  margin-left:20px;
}
.header-logo{
	margin-right: 40px;
}
.nav-header-mobile-search{
	height: 40px;
	width: 100%;
	display: none !important;
}
@media (max-width: 1128px){
	.nav-item {
		margin: 0 10px;
	}
	.header-logo{
		margin-right: 20px;
	}
}

@media (min-width: 1024px) {
  .navigation-items {
    display: block;
  }
}

@media (max-width: 767px) {
	.nav-header-message{
		display: none !important;
	}
	.nav-header-search{
		display: none !important;
	}
	.nav-header-mobile-search{
		display: flex !important;
	}
}
@media (max-width: 340px){
	.header-logo{
		margin-right: 10px;
	}
	.header-action{
		margin-left:10px;
	}
}
</style>
