<template>
	<div class="page-section">
		<banner-main title="Featured skateshop" subTitle="84 decks" :bannerBtn="bannerBtn" class="withBtn"/>
		<div class="app-container">
			<div class="production-container">
				<div class="filter-panel desktop-only"><filter-shop /></div>
				<div class="product-section">
					<div class="product-actions">
						<div class="sort">
							<dropdown-input label="Sort by" :items="sortKeys"/>
						</div>
						<div class="mobile-only">
							<filter-shop-mobile />
						</div>
					</div>	
					<div class="production-panel">
						<div v-for="(item, idx) in products" :key="idx">
							<card-product :cardData="item" class="shop-product"/>
						</div>
					</div>
					<mobile-loading v-if="showLoading"></mobile-loading>
					<pagination v-if="!$device.isMobile" class="paginator" :totalPages="3" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BannerMain from '@/components/Banners/BannerMain.vue';
import FilterShop from '@/components/Filters/FilterShop.vue';
import FilterShopMobile from '@/components/Filters/FilterShopMobile.vue'; 
import { mapGetters } from 'vuex';
export default {
	components:{
		BannerMain,
		FilterShop,
		FilterShopMobile
	},
	layout:'layout_fullbanner',
	data(){
		return{
			showLoading: false,
			pageNum: 1,
			itemsPerPage: 4,
			fetching: false,
			fetchCompleted: false,
			sortKeys:[
				{"value": "relevance", text: "relevance"},
				{"value": "newness", text: "newness"},
				{"value": "popularity", text: "popularity"}
			],
			bannerBtn:{
				"text": "Browse designer skateshops",
				"link": "/shop/designer"
			},
			products: []
		}
	},
	async created() {
		if(process.client) {
			window.addEventListener('scroll', this.handleScroll);
		}
		if (this.$device.isMobile) {
			await this.$store.dispatch('uiprops/setShowMobileFooter', false)
		}
		await this.getData({ pageNum: this.pageNum, itemsPerPage: this.itemsPerPage })
		this.pageNum++;
	},
	computed:{
		...mapGetters('uiprops',['isMobile'])
	},
	methods: {
		async handleScroll(event) {
			if (!this.$device.isMobile) return;
			if ( this.fetchCompleted ) {
				this.$store.dispatch('uiprops/setShowMobileFooter', true);
				return;
			}
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				if( this.fetching ) return;
				this.showLoading = true;
				this.fetching = true;
				await this.getData( { pageNum: this.pageNum, itemsPerPage: this.itemsPerPage })
				this.showLoading = false;
				this.fetching = false;
				this.pageNum++;
			}
		},
		getData(params) {
			return new Promise((resolve, reject) => {
				const fakeData= [
					{id: 1},
					{id: 2},
					{id: 3},
					{id: 4},
					{id: 5},
					{id: 6}
				]
				if (!this.$device.isMobile){
					this.products = fakeData;
					resolve();
				}
				if (this.$device.isMobile) {
					if (fakeData.length <= ( params.pageNum - 1) * params.itemsPerPage) {
						this.fetchCompleted =  true;
						resolve();
					} else {
						setTimeout(() => {
							this.products = this.products.concat(fakeData.slice((params.pageNum - 1) * params.itemsPerPage, params.pageNum * params.itemsPerPage));
							resolve();
						}, 800)
					} 
				}
				
			})
			
		}
	}
}
</script>

<style lang="scss" scoped>
.filter-panel{
	margin-right: 20px;
}
.production-section{
	grid-area: products;
}
.paginator{
	margin-bottom: 60px;
}
.production-container{
	margin-top: 20px;
	display: flex;
}
.product-actions{
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	margin-bottom: 20px;
}
.production-panel {
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 20px;
}
.sort{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.product-section{
	margin: 0 auto;
}
@media (max-width: 1163px) {
	.production-panel {
		grid-template-columns: auto auto;
	}
}
@media (max-width: 883px){
	.filter-panel{
		display: none;
	}
	.mobile-only{
		display: block;
	}
}
@media (max-width: 559px) {
	.production-panel {
		grid-column-gap: 10px;
	}
}
</style>