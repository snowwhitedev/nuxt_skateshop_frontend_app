<template>
	<div class="page-section">
		<banner-main title="Rate Designs" subTitle="304 designs" class="no-btn" />
		<div class="app-container">
			<div class="page-actions">
				<filter-rate />
				<dropdown-input label="Sort by" :items="sortKeys"/>
			</div>
			<div class="grid-container-4">
				<div  v-for="design in designs" :key="design.id" >
					<card-rate class="mobile-card-rate" :cardData="design" @showOverlay="showDesignOverlay(design.id)"/>
				</div>
			</div>
			<mobile-loading v-if="showLoading"></mobile-loading>
			<pagination v-else class="mb-6 desktop-only" :totalPages="5" />
		</div>
	</div>
</template>

<script>
import BannerMain from '@/components/Banners/BannerMain.vue';
import FilterRate from '@/components/Filters/FilterRate.vue';
import { mapGetters } from 'vuex';
export default {
	components:{
		BannerMain,
		FilterRate
	},
	layout:'layout_fullbanner',
	data(){
		return{
			showLoading: false,
			pageNum: 1,
			itemsPerPage: 4,
			sortKeys:[
				{"value": "relevance", text: "relevance"},
				{"value": "newness", text: "newness"},
				{"value": "popularity", text: "popularity"}
			],
			designs: [],
			fetching: false,
			fetchCompleted: false
		}
	},
	async created() {
		if(process.client) {
			window.addEventListener('scroll', this.handleScroll);
		}
		if (this.$device.isMobile) {
			await this.$store.dispatch('uiprops/setShowMobileFooter', false)
		}
		await this.getDesigns({ pageNum: this.pageNum, itemsPerPage: this.itemsPerPage })
		this.pageNum++;
	},
	methods:{
		showDesignOverlay(designId){
			this.designs.forEach((item, key) =>{
				this.designs[key].overlay = false;
				if (item.id === designId) {
					this.designs[key].overlay = true;
				}
			})
		},
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
				await this.getDesigns( { pageNum: this.pageNum, itemsPerPage: this.itemsPerPage })
				this.showLoading = false;
				this.fetching = false;
				this.pageNum++;
			}
		},
		getDesigns(params) {
			return new Promise((resolve, reject) => {
				const fakeDesigns = [
					{"id": 1, "title": "title1"},
					{"id": 2, "title": "title2"},
					{"id": 3, "title": "title3"},
					{"id": 4, "title": "title4"},
					{"id": 5, "title": "title1"},
					{"id": 6, "title": "title2"},
					{"id": 7, "title": "title3"},
					{"id": 8, "title": "title4"}
				];
				if (!this.$device.isMobile){
					this.designs = fakeDesigns;
					resolve();
				}
				if (this.$device.isMobile) {
					if (fakeDesigns.length <= ( params.pageNum - 1) * params.itemsPerPage) {
						this.fetchCompleted =  true;
						resolve();
					} else {
						setTimeout(() => {
							this.designs = this.designs.concat(fakeDesigns.slice((params.pageNum - 1) * params.itemsPerPage, params.pageNum * params.itemsPerPage));
							resolve();
						}, 800)
					} 
				}
				
			})
			
		}

	},
	computed:{
		...mapGetters('uiprops',['isMobile'])
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.page-actions{
	margin: 20px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

</style>