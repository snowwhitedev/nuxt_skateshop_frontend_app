<template>
	<div class="page-section">
		<banner-main title="Featured skateshop" subTitle="84 decks" :bannerBtn="bannerBtn" />
		<div class="app-container">
			<div class="production-container">
				<div class="filter-panel"><filter-shop /></div>
				<div class="production-panel">
					<div class="sort">
						<dropdown-input label="Sort by" :items="sortKeys"/>
					</div>
					<div v-for="(item, idx) in products" :key="idx">
						<card-product :cardData="item"/>
					</div>
				</div>
				<pagination class="paginator" :totalPages="3" />
			</div>
		</div>
	</div>
</template>

<script>
import BannerMain from '@/components/Banners/BannerMain.vue';
import FilterShop from '@/components/Filters/FilterShop.vue';
export default {
	components:{
		BannerMain,
		FilterShop
	},
	layout:'layout_fullbanner',
	data(){
		return{
			sortKeys:[
				{"value": "relevance", text: "relevance"},
				{"value": "newness", text: "newness"},
				{"value": "popularity", text: "popularity"}
			],
			bannerBtn:{
				"text": "Browse designer skateshops",
				"link": "/shop/designer"
			},
			products: [
				{"id": 1},
				{"id": 2},
				{"id": 3},
				{"id": 4},
				{"id": 5},
				{"id": 6}
			]
		
		}
	}
	
}
</script>

<style lang="scss" scoped>
.filter-panel{
	grid-area: filters;
}
.production-section{
	grid-area: products;
}
.paginator{
	grid-area: paginator;
	margin-bottom: 60px;
}
.production-container{
	margin-top: 20px;
	display:grid;
	grid-template-areas: 'filters products products products'
								'filter paginator paginator paginator';
	grid-column-gap: 20px;
}

.production-panel {
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 20px;

}
.sort{
	grid-column-start: 3;
	grid-column-end: 4;
	display: flex;
	justify-content: flex-end;
}

</style>