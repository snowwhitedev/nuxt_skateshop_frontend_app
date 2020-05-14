<template>
	<div class="page-section">
		<banner-main title="Featured skateshop" subTitle="84 decks" :bannerBtn="bannerBtn" />
		<div class="app-container">
			<div class="product-container">
				<div class="filter-panel"><filter-shop :designerFilter="true"/></div>
				<div class="product-panel">
					<div class="sort">
						<dropdown-input label="Sort by" :items="sortKeys"/>
					</div>
					<div v-for="idx in 3" :key="idx" class="shop-container">
						<div class="shop-container-header">
							<div class="shop-intro-small">
								<div class="shop-logo" style="background-image: url('https://images-na.ssl-images-amazon.com/images/I/61QICUUo8yL._SX425_.jpg');">
									<svg class="check-babel" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22.042 10.999C22.042 9.40202 21.1 8.03502 19.747 7.39402C20.25 5.98402 19.95 4.35102 18.821 3.22102C17.692 2.09202 16.058 1.79202 14.648 2.29502C14.006 0.942023 12.638 -0.000976562 11.042 -0.000976562C9.44602 -0.000976562 8.07702 0.942023 7.43602 2.29502C6.02602 1.79202 4.39302 2.09202 3.26302 3.22102C2.13402 4.35102 1.83402 5.98402 2.33702 7.39402C0.984016 8.03502 0.0410156 9.40302 0.0410156 10.999C0.0410156 12.595 0.983016 13.963 2.33702 14.605C1.83402 16.015 2.13402 17.649 3.26302 18.777C4.39202 19.906 6.02602 20.207 7.43602 19.704C8.07802 21.057 9.44501 21.999 11.042 21.999C12.639 21.999 14.006 21.057 14.648 19.704C16.058 20.207 17.691 19.906 18.821 18.777C19.95 17.649 20.25 16.015 19.747 14.605C21.099 13.964 22.042 12.596 22.042 10.999ZM10.332 16.696L6.34802 14.039L7.73502 11.959L9.75102 13.303L15.041 6.24902L17.041 7.74902L10.332 16.696Z" 
										fill="#2E9BFF"/>
									</svg>
								</div>
								<div class="shop-mini-header">
									<div class="shop-title">
										<p class="shop-name">Dave's Skateshop</p>
										<tag-badge backColor="#FFA057" style="margin-right:10px;">Top seller</tag-badge>
										<btn-textlink-follow ></btn-textlink-follow>
									</div>
									<div class="shop-stats">
										<p>24<small>Designs</small></p>
										<p>4<small>Products</small></p>
										<p>1,744<small>Followers</small></p>
									</div>
								</div>
							</div>
							<div class="goto-btn">
								<nuxt-link to="/shop/designer/1">
									<btn-text btnClass="btn secondary sm">Go to skateshop</btn-text>
								</nuxt-link>
							</div>
						</div>
						<div class="shop-products">
							<card-product  v-for="(item, idxx) in products" :key="idxx" :cardData="item" />
						</div>
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
				"text": "Browse featured skateshops",
				"link": "/shop"
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
@import "~assets/css/variable.scss";
.filter-panel{
	grid-area: filters;
}
.product-panel{
	grid-area: products;
}
.paginator{
	grid-area: paginator;
	margin-bottom: 60px;
}
.product-container{
	margin-top: 20px;
	display:grid;
	grid-template-areas: 'filters products products products'
	                      'filter paginator paginator paginator';
	grid-column-gap: 20px;
}
.sort{
	grid-column-start: 3;
	grid-column-end: 4;
	display: flex;
	justify-content: flex-end;
}

.shop-container{
	margin-bottom: 60px;
}
.shop-container:last-child{
	margin-bottom: 0px;
}
.shop-container-header{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.shop-products{
	grid-column-start: 2;
	grid-column-end: 4;
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 20px;
}
.shop-intro-small{
	margin-bottom: 25px;
	display: flex;
	align-items: center;
}

.shop-intro-small .shop-logo{
	width: 60px;
	height: 60px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 15px;
	position: relative;
	margin-right: 38px;
}
.check-babel{
	position: absolute;
	right: -8px;
	bottom: -8px;
}
.shop-title{
	display: flex;
	align-items: center;
}
.shop-name{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #2D3748;
	margin-right: 15px;
}
.shop-stats{
	margin-top:5px;
	display: flex;
	align-items: center;
}
.shop-stats p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #283441;
	margin-right:40px;
}
.shop-stats p:last-child{
	margin-right: 0;
}
.shop-stats p small{
	line-height: 16px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    letter-spacing: 0.03em;
	font-weight: normal;
	font-size: 11px;
	margin-left: 3px;
}
</style>