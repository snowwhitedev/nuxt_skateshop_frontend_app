<template>
<div class="sidenav-container">
	<div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
	<transition name="slide-side">
		<div v-if="show" class="sidenav">
			<div class="close-btn" @click="$emit('close')">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20.749 4.707L19.334 3.293L12.042 10.586L4.74898 3.293L3.33398 4.707L10.627 12L3.33398 19.293L4.74898 20.707L12.042 13.414L19.334 20.707L20.749 19.293L13.456 12L20.749 4.707Z" fill="#101D2C"/>
				</svg>
			</div>
			<ul class="sidenav-list" @click="$emit('close')">
				<li class="sidenav-item">
					<nuxt-link to="/shop">Shop</nuxt-link>
					<ul class="sub-menu">
						<li class="sub-menuitem"><nuxt-link to="/shop">Featured skateshop</nuxt-link></li>
						<li class="sub-menuitem"><nuxt-link to="/shop/designer">Designer skateshops</nuxt-link></li>
					</ul>
				</li>
				<li class="sidenav-item"><nuxt-link to="/rate">Rate</nuxt-link></li>
				<li class="sidenav-item"><nuxt-link to="/contests">Contests</nuxt-link></li>
			</ul>
			<div class="sep-link">
				<nuxt-link to="/">How it works</nuxt-link>
			</div>
			<div class="sep-link">
				<nuxt-link to="/help">Help Center</nuxt-link>
			</div>
			<div class="space"></div>
			<div class="sidenav-footer">
				<div class="social-links">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="40" width="40" height="40" rx="10" transform="rotate(-90 0 40)" fill="#FAFAFB"/>
						<path d="M24.6664 12.2223H22.3331C21.3017 12.2223 20.3125 12.632 19.5832 13.3613C18.8539 14.0906 18.4442 15.0798 18.4442 16.1111V18.4445H16.1108V21.5556H18.4442V27.7778H21.5553V21.5556H23.8886L24.6664 18.4445H21.5553V16.1111C21.5553 15.9049 21.6372 15.707 21.7831 15.5612C21.929 15.4153 22.1268 15.3334 22.3331 15.3334H24.6664V12.2223Z" fill="#3466E8"/>
					</svg>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="40" width="40" height="40" rx="10" transform="rotate(-90 0 40)" fill="#FAFAFB"/>
						<path d="M28.5554 13C27.8106 13.5254 26.986 13.9272 26.1132 14.19C25.6448 13.6514 25.0223 13.2697 24.3298 13.0964C23.6374 12.9231 22.9084 12.9667 22.2415 13.2213C21.5746 13.4758 21.002 13.929 20.6011 14.5196C20.2002 15.1101 19.9903 15.8096 19.9999 16.5233V17.3011C18.6331 17.3366 17.2787 17.0334 16.0573 16.4187C14.836 15.804 13.7857 14.8967 12.9999 13.7778C12.9999 13.7778 9.88878 20.7778 16.8888 23.8889C15.287 24.9762 13.3788 25.5214 11.4443 25.4445C18.4443 29.3333 26.9999 25.4445 26.9999 16.5C26.9992 16.2834 26.9783 16.0672 26.9377 15.8545C27.7315 15.0716 28.2916 14.0832 28.5554 13Z" fill="#64CAF5"/>
					</svg>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="40" width="40" height="40" rx="10" transform="rotate(-90 0 40)" fill="#FAFAFB"/>
						<path d="M23.8888 12.2223H16.1111C13.9633 12.2223 12.2222 13.9634 12.2222 16.1111V23.8889C12.2222 26.0367 13.9633 27.7778 16.1111 27.7778H23.8888C26.0366 27.7778 27.7777 26.0367 27.7777 23.8889V16.1111C27.7777 13.9634 26.0366 12.2223 23.8888 12.2223Z" stroke="#A58878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M23.1114 19.51C23.2074 20.1573 23.0969 20.8184 22.7955 21.3992C22.4941 21.9801 22.0172 22.4511 21.4327 22.7453C20.8482 23.0395 20.1858 23.1419 19.5397 23.0379C18.8936 22.934 18.2968 22.6289 17.8341 22.1662C17.3714 21.7035 17.0663 21.1067 16.9624 20.4606C16.8584 19.8145 16.9608 19.1521 17.255 18.5676C17.5492 17.9831 18.0202 17.5062 18.6011 17.2048C19.1819 16.9035 19.843 16.7929 20.4903 16.8889C21.1506 16.9868 21.7619 17.2945 22.2339 17.7665C22.7058 18.2384 23.0135 18.8497 23.1114 19.51Z" stroke="#A58878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="40" width="40" height="40" rx="10" transform="rotate(-90 0 40)" fill="#FAFAFB"/>
						<path d="M30.5401 14.42C30.4213 13.9454 30.1794 13.5106 29.8387 13.1594C29.4981 12.8082 29.0708 12.5532 28.6001 12.42C26.8801 12 20.0001 12 20.0001 12C20.0001 12 13.1201 12 11.4001 12.46C10.9293 12.5932 10.5021 12.8482 10.1614 13.1994C9.8208 13.5506 9.57887 13.9854 9.46008 14.46C9.1453 16.2056 8.99132 17.9763 9.00008 19.75C8.98886 21.537 9.14285 23.3213 9.46008 25.08C9.59104 25.5398 9.83839 25.9581 10.1782 26.2945C10.5181 26.6308 10.9389 26.8738 11.4001 27C13.1201 27.46 20.0001 27.46 20.0001 27.46C20.0001 27.46 26.8801 27.46 28.6001 27C29.0708 26.8668 29.4981 26.6118 29.8387 26.2606C30.1794 25.9094 30.4213 25.4746 30.5401 25C30.8524 23.2676 31.0064 21.5103 31.0001 19.75C31.0113 17.963 30.8573 16.1787 30.5401 14.42Z" fill="#E14D4D"/>
						<path d="M17.75 23.0201L23.5 19.7501L17.75 16.4801V23.0201Z" fill="white"/>
					</svg>

				</div>
				<Logo logoColor="#DBDDDF" logoSize="mobileSidenav"/>
			</div>
		</div>
	</transition>
</div>
</template>

<script>
import Logo from "@/components/Navigation/Logo.vue";
export default {
name: "TheSidenav",
components: {
	Logo
},
props: {
	show: {
		type: Boolean,
		default: false
	}
}
};
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.sidenav-container {
	height: 100%;
	width: 100%;
}
.sidenav-backdrop {
	width: 100%;
	height: 100%;
	// background-color: rgba(0, 0, 0, 0.1);
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
}
.sidenav {
	height: 100%;
	width: 240px;
	background-color: white;
	z-index: 10000;
	position: fixed;
	top: 0;
	left: 0;
	box-sizing: border-box;
	padding: 45px 30px 30px 20px;
	display: flex;
	flex-direction: column;
}
.slide-side-enter-active,
.slide-side-leave-active {
	transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
	transform: translateX(-100%);
}

.sidenav-list {
	list-style: none;
	padding: 0;
	margin: 0;
	margin-bottom: 60px;
}

.sidenav-item {
	margin-top: 10px;
}
.sidenav-item:first-child {
	margin-top: 0px;
}

.sidenav-item a {
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
}

.sidenav-item a:hover,
.sidenav-item a:active {
	color: $color-primary;
}
.close-btn{
	position: absolute;
	top: 10px;
	right: 10px;
}
.sub-menu{
	margin-top: 10px;
	padding-left: 10px;
}
.sub-menuitem{
	padding-bottom: 15px;
}
.sub-menuitem a{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
}
.sub-menuitem a:hover,
.sub-menuitem a:active {
	color: $color-primary;
}
.sep-link a {
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
}
.space{
	flex: 1;
}
.sidenav-footer{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.social-links{
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
}
</style>
