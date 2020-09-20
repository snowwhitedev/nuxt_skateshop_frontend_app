<template>
	<div class="page-section">
		<banner-main title="Featured skateshop" subTitle="84 decks" :bannerBtn="bannerBtn" />
		<div class="app-container">
			<div >
				<shop-header />
			</div>
			<div class="shop-tabs">
			 	<div class="shop-tab">
					<nuxt-link :to="`/shop/designer/${$route.params.id}/designs`"><span :class="designTabClass " @click="selectTab('designs')">Designs(5)</span></nuxt-link>
				</div>
				<div class="shop-tab">
					<nuxt-link :to="`/shop/designer/${$route.params.id}`"><span :class="deckTabClass" @click="selectTab('decks')">Decks(23)</span></nuxt-link>
				</div>
			</div>
			<div class="production-container">
				<div class="filter-panel"><filter-shop /></div>
				<nuxt-child />
			</div>
		</div>
	</div>
</template>

<script>
import BannerMain from '@/components/Banners/BannerMain.vue';
import ShopHeader from '@/components/Widgets/ShopHeader.vue';
import FilterShop from '@/components/Filters/FilterShop.vue';
export default {
	components:{
		BannerMain,
		ShopHeader,
		FilterShop
	},
	layout:'layout_fullbanner',
	data(){
		return{
			
			bannerBtn:{
				"text": "Browse designer skateshops",
				"link": "/shop/designer"
			},
			designTabClass: "shoptab-link",
			deckTabClass: "shoptab-link active"
		}
	},
	created(){
		// alert(this.$route.params);
		// console.log(this.$route.params);
	},
	methods:{
		selectTab(tab){
			if (tab === 'designs'){
				this.designTabClass = "shoptab-link active";
				this.deckTabClass = "shoptab-link";
			}

			if (tab === 'decks'){
				this.deckTabClass= "shoptab-link active";
				this.designTabClass = "shoptab-link";
			}
		}
	}
	
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.filter-panel{
	grid-area: filters;
}
.production-section{
	grid-area: products;
}

.production-container{
	margin-top: 20px;
	display:grid;
	grid-template-areas: 'filters products products products';
	grid-column-gap: 20px;
}

.shop-tabs{
	margin-top: 32px;
	background: #FFFFFF;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	// box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.5);
	margin-left: 30px;
	padding-bottom: 20px;
	display: flex;
}
.shop-tab{
	margin-right: 40px;
}
.shop-tab:last-child{
	margin-right: 0;
}

.shop-tab a .shoptab-link{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #707780;
	padding-bottom: 20px;
}
a .shoptab-link:hover{
	border-bottom: 2px solid #357BFF;
}
a .shoptab-link.active{
	color: #283441;
	border-bottom: 2px solid #357BFF;
}
</style>