<template>
	<div class="page-section">
		<banner-main title="Featured skateshop" subTitle="84 decks" :bannerBtn="bannerBtn" />
		<div class="app-container">
			<div >
				<shop-header />
			</div>
			<div class="shop-tabs">
			 	<div class="tab">
					<nuxt-link :to="`/shop/designer/${$route.params.id}/designs`"><a :class="designTabClass " @click="selectTab('designs')">Designs(5)</a></nuxt-link>
				</div>
				<div class="tab">
					<nuxt-link :to="`/shop/designer/${$route.params.id}`"><a :class="deckTabClass" @click="selectTab('decks')">Decks(23)</a></nuxt-link>
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
			designTabClass: "tab-link",
			deckTabClass: "tab-link active"
		}
	},
	created(){
		// alert(this.$route.params);
		// console.log(this.$route.params);
	},
	methods:{
		selectTab(tab){
			if (tab === 'designs'){
				this.designTabClass = "tab-link active";
				this.deckTabClass = "tab-link";
			}

			if (tab === 'decks'){
				this.deckTabClass= "tab-link active";
				this.designTabClass = "tab-link";
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
.tab{
	margin-right: 40px;
}
.tab:last-child{
	margin-right: 0;
}
.tab{

}
.tab a.tab-link{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #707780;
	padding-bottom: 20px;
}
a.tab-link:hover{
	border-bottom: 2px solid #357BFF;
}
a.tab-link.active{
	color: #283441;
	border-bottom: 2px solid #357BFF;
}
</style>