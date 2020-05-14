<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				My skateshop
			</p>
		</div>
		<div class="content-body">
			<div class="shop-tabs">
			 	<div class="tab">
					<nuxt-link :to="`/account/shop/dashboard`">Dashboard</nuxt-link>
				</div>
				<div class="tab">
					<nuxt-link :to="`/account/shop/designs`">My designs(5)</nuxt-link>
				</div>
				<div class="tab">
					<nuxt-link :to="`/account/shop/products`">My products(3)</nuxt-link>
				</div>
				<div class="tab">
					<nuxt-link :to="`/account/shop/settings`">Settings</nuxt-link>
				</div>
			</div>
			<div class="tab-content">
				<nuxt-child />
			</div>
		</div>
	</div>
</template>

<script>
import Tabs from '@/components/Widgets/Tabs.vue';
import Tab from '@/components/Widgets/Tab.vue';
export default {
	layout:'layout_account',
	components:{
		Tabs,
		Tab
	},
	data(){
		return{
			
		}
	},
	methods:{

	},
	created(){
		// this.$router.push('/account/shop/dashboard');
		const currentPath = this.$router.history.current.path;
		
		// const currentPath = '/account/shop/dashboard/';
		
		const pathArr = currentPath.split('/');
		if (pathArr[pathArr.length-1] === "shop"){
			this.$router.push('/account/shop/dashboard');
		} else if (pathArr[pathArr.length-1] === "" && pathArr[pathArr.length-1] === "shop"){
			this.$router.push('/account/shop/dashboard');
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.account-content-container{
	padding-top: 40px;
}
p.content-brand{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
}
.content-header{
	margin-bottom: 30px;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}

.shop-tabs{
	margin-top: 20px;
	background: #FFFFFF;
	border-bottom: 1px solid #E7E8EA;
	padding-bottom: 10px;
	display: flex;
}
.tab{
	margin-right: 40px;
}
.tab:last-child{
	margin-right: 0;
}
.tab a{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #707780;
	padding-bottom: 10px;
}
.tab a.nuxt-link-active{
	font-weight: bold;
	color: #283441;
	border-bottom: 2px solid #357BFF;
}

.tab-content{
	margin-top:20px;
}
</style>