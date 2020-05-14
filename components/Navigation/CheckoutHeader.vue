<template>
<div class="header-container">
	<header class="the-header">
		<nuxt-link to="/"><Logo /></nuxt-link>
		<div class="badge-checkout">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.043 23C2.15697 23 2.04297 6.694 2.04297 6C2.04297 5.637 2.23997 5.303 2.55697 5.126L11.557 0.126C11.86 -0.042 12.226 -0.042 12.529 0.126L21.529 5.126C21.846 5.303 22.043 5.637 22.043 6C22.043 6.694 21.929 23 12.043 23ZM4.05797 6.58C4.16797 9.341 5.04597 21 12.043 21C19.04 21 19.918 9.341 20.027 6.58L12.043 2.143L4.05797 6.58Z" fill="#44DC94"/>
          <path d="M12.381 16.8162L7.29297 13.0002L8.79297 11.0002L11.704 13.1842L15.982 6.33817L18.103 7.66317L12.381 16.8162Z" fill="#44DC94"/>
      </svg>
      <div class="badge-text">
          <p>Secure</p>
          <p>Checkout</p>
      </div>
    </div>
		<div class="spacer"></div>
	
		<shopping-cart  class="header-action"/>
    
  </header>
</div>
</template>

<script>
import Logo from "@/components/Navigation/Logo.vue";
import ShoppingCart from "@/components/Navigation/ShoppingCart.vue";

import { mapState } from 'vuex';

export default {
	name: "TheHeader",
	data(){
		return{
		
		}
	},
	components: {
		Logo,
		ShoppingCart
	},
	methods:{
		
	},
	created(){
		// console.log("[the header]", this.$auth.$state);
	},
	computed:{
		...mapState('auth', ['loggedIn', 'user'])
	}
};
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.header-container {
  margin-top:20px;
  height: 82px;
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
.header-action{
  margin-left:20px;
}
.badge-checkout{
  display: flex;
  align-items: center;
}
.badge-text p{
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  color: #283441;
}
</style>
