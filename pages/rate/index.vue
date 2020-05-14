<template>
	<div class="page-section">
		<banner-main title="Rate Designs" subTitle="304 designs" />
		<div class="app-container">
			<div class="page-actions">
				<filter-rate />
				<dropdown-input label="Sort by" :items="sortKeys"/>
			</div>
			<div class="grid-container-4">
				<card-rate class="mobile-card-rate" v-for="design in designs" :key="design.id" :overlay="design.overlay" :cardData="design" @showOverlay="showDesignOverlay(design.id)"/>
			</div>
			<pagination class="mb-6 desktop-only" :totalPages="5" />
			<div class="wrapper mobile-only">
				<div class="more-loading">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.234 4.23392C5.216 3.24725 6.552 2.66659 8 2.66659C10.9407 2.66659 13.3333 5.05925 13.3333 7.99992H14.6667C14.6667 4.32325 11.676 1.33325 8 1.33325C6.19 1.33325 4.51933 2.05925 3.292 3.29192L2 1.99992V5.99992H6L4.234 4.23392Z" fill="#DBDDDF"/>
						<path d="M11.766 11.766C10.784 12.7527 9.44868 13.3333 8.00001 13.3333C5.05934 13.3333 2.66668 10.9407 2.66668 8H1.33334C1.33334 11.6767 4.32401 14.6667 8.00001 14.6667C9.81068 14.6667 11.4807 13.9407 12.708 12.708L14 14V10H10L11.766 11.766Z" fill="#DBDDDF"/>
					</svg>
					<p>
						&nbsp;&nbsp;Loading...
					</p>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import BannerMain from '@/components/Banners/BannerMain.vue';
import FilterRate from '@/components/Filters/FilterRate.vue';
export default {
	components:{
		BannerMain,
		FilterRate
	},
	layout:'layout_fullbanner',
	data(){
		return{
			sortKeys:[
				{"value": "relevance", text: "relevance"},
				{"value": "newness", text: "newness"},
				{"value": "popularity", text: "popularity"}
			],
			designs:[
				{"id": 1, "title": "title1", "overlay":false},
				{"id": 2, "title": "title2", "overlay":false},
				{"id": 3, "title": "title3", "overlay":false},
				{"id": 4, "title": "title4", "overlay":false},
				{"id": 5, "title": "title1", "overlay":false},
				{"id": 6, "title": "title2", "overlay":false},
				{"id": 7, "title": "title3", "overlay":false},
				{"id": 8, "title": "title4", "overlay":false}
			]
		}
	},
	methods:{
		showDesignOverlay(designId){
			this.designs.forEach((item, key) =>{
				this.designs[key].overlay = false;
				if (item.id === designId) {
					this.designs[key].overlay = true;
				}
			})
		}
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
.more-loading{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
}
.more-loading p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #DBDDDF;
}
</style>