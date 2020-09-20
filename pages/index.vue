<template>
	<div>
		<div class="page-section">
			<carousel />
			<div class="section">
				<div class="card-section">
					<div class="card-section-header">
						<div >
							<div class="card-section-title">
								Newest designs
							</div>
							<div class="card-section-description">
								Sed ullamcorper tellus quis nisl.
							</div>
						</div>
						<div class="card-section-action">
							<btn-text btnClass="btn secondary sm">See more</btn-text> 
						</div>
					</div>
					<div class="card-container">
						<div class="card-item" v-for="design in newDesigns" :key="design.id">
							<card-rate  :cardData="design"/>
						</div>
					</div>
				</div>
				<banner-in />
			</div>
		</div>
		<div class="popular-section">
			<div class="page-section">
				<div class="section">
					<div class="card-section">
						<div class="card-section-header">
							<div >
								<div class="card-section-title">
									Popular designs
								</div>
								<div class="card-section-description">
									Sed ullamcorper tellus quis nisl.
								</div>
							</div>
							<div class="card-section-action">
								<btn-text btnClass="btn secondary sm">See more</btn-text> 
							</div>
						</div>
						<div class="card-container">
							<div class="card-item" v-for="design in popDesigns" :key="design.id">
								<card-rate :overlay="design.overlay" :cardData="design"/>
							</div>
						</div>
					</div>
					<div class="card-section">
						<div class="card-section-header">
							<div >
								<div class="card-section-title">
									Best sellers
								</div>
								<div class="card-section-description">
									Sed ullamcorper tellus quis nisl.
								</div>
							</div>
							<div class="card-section-action">
								<btn-text btnClass="btn secondary sm">See more</btn-text> 
							</div>
						</div>
						<div class="card-container">
							<div v-for="item in bestSellers" :key="item.id" class="card-item product">
								<card-product :cardData="item" />
							</div>
						</div>
					</div>
					<div class="card-section">
						<div class="card-section-header">
							<div >
								<div class="card-section-title">
									Contest
								</div>
								<div class="card-section-description">
									Sed ullamcorper tellus quis nisl.
								</div>
							</div>
							<div class="card-section-action">
								<btn-text btnClass="btn secondary sm">See more</btn-text> 
							</div>
						</div>
						<div class="card-contest-container">
							<card-contest-lg class="card-contest-margin"/>
							<card-contest-md />
						</div>
					</div>
					<div class="card-section">
						<div class="card-section-header">
							<div >
								<div class="card-section-title">
									Featured products
								</div>
								<div class="card-section-description">
									Sed ullamcorper tellus quis nisl.
								</div>
							</div>
							<div class="card-section-action">
								<btn-text btnClass="btn secondary sm">See more</btn-text> 
							</div>
						</div>
						<div class="card-container">
							<div class="card-item product" v-for="item in featuredProds" :key="item.id">
								<card-product :cardData="item" />
							</div>
						</div>
					</div>
					<div class="card-section" style="margin-bottom:20px;">
						<carousel-blog />
					</div>
				</div>
			</div>
		</div>
		<div class="instagram-section">
			<div class="section">
				<p class="instagram-section-title">
					Follow us on Instagram
					<svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.2138 0.71967C16.9209 0.426777 16.446 0.426777 16.1531 0.71967C15.8602 1.01256 15.8602 1.48744 16.1531 1.78033L17.2138 0.71967ZM21 5.56655L21.5303 6.09688C21.8232 5.80398 21.8232 5.32911 21.5303 5.03622L21 5.56655ZM16.1531 9.35276C15.8602 9.64566 15.8602 10.1205 16.1531 10.4134C16.446 10.7063 16.9209 10.7063 17.2138 10.4134L16.1531 9.35276ZM1 4.81655C0.585786 4.81655 0.25 5.15233 0.25 5.56655C0.25 5.98076 0.585786 6.31655 1 6.31655V4.81655ZM16.1531 1.78033L20.4697 6.09688L21.5303 5.03622L17.2138 0.71967L16.1531 1.78033ZM20.4697 5.03622L16.1531 9.35276L17.2138 10.4134L21.5303 6.09688L20.4697 5.03622ZM21 4.81655H1V6.31655H21V4.81655Z" fill="#101D2C"/>
					</svg>

				</p>
				<div class="instagram-cards">
					<card-instagram />
					<card-instagram />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Carousel from '../components/Carousel/Carousel.vue';
import BannerIn from '../components/Banners/BannerIn.vue';
import CardContestLg from '../components/Cards/CardContestLg.vue';
import CardContestMd from '../components/Cards/CardContestMd';
import CarouselBlog from '../components/Carousel/CarouselBlog.vue';
export default {
	name: 'HomePage',
	layout: 'layout_home',
	components: {
		Carousel,
		BannerIn,
		CardContestLg,
		CardContestMd,
		CarouselBlog
	},
	created(){
	},
	data(){
		return {
			newDesigns:[
				{"id": 1, "title": "title1"},
				{"id": 2, "title": "title2"},
				{"id": 3, "title": "title3"},
				{"id": 4, "title": "title4"}
			],
			popDesigns:[
				{"id": 1, "title": "title1"},
				{"id": 2, "title": "title2"},
				{"id": 3, "title": "title3"},
				{"id": 4, "title": "title4"}
			],
			bestSellers: [
				{"id": 1},
				{"id": 2},
				{"id": 3},
				{"id": 4}
			],
			featuredProds: [
				{"id": 1},
				{"id": 2},
				{"id": 3},
				{"id": 4}
			]
		}
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.page-section{
	max-width: 1296px;
	padding: 0 10px;
	width: 100%;
	margin: 0 auto;
}
.popular-section{
	width: 100%;
	background: #F8F8F8;
	border-top-left-radius: 150px;
	margin-top: 60px;
}
.card-section-header{
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 20px;
	padding:0 2px;
}
.card-section-title{
	font-size: $font-size-header-5;
	color:#283441;
	font-weight: $font-weight-bold;
	font-style: normal;
	font-family: $font-family-primary;
	line-height: 33px;
}
.card-section-description{
	font-size: $font-size-subtitle-2;
	color:#4C5561;
	font-weight: $font-weight-thin;
	font-style: normal;
	font-family: $font-family-primary;
	line-height: 180%;
	letter-spacing: 0.01em;
	mix-blend-mode: normal;
	margin-top:10px;
	margin-bottom: 0;
}
.card-contest-container,
.card-container{
	display: flex;
	flex-direction: row;
	overflow:auto;
	padding: 0;
	padding-bottom: 56px;
}
.card-item{
	margin-right: 20px;
}
.card-item:last-child{
	margin-right: 0;
}
.card-contest-margin{
	margin-right: 18px;
	margin-bottom: 0;
}
.instagram-section{
	margin: 0;
}
.instagram-section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	text-align: center;
	color: #283441;
	margin-bottom: 30px;
	display: flex;
	align-items: center;justify-content: center;
}
.instagram-section-title svg {
	margin-left: 5px;
}
.instagram-cards{
	display: flex;
	// flex-wrap: wrap;
	justify-content: space-between;
	overflow:auto;
}

@media (max-width: 767px){
	.card-section-title{
		font-size: 20px;
		line-height: 27px;
	}
	.card-section-description{
		font-size: $font-size-subtitle-2;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.03em;
		mix-blend-mode: normal;
	}
	.card-container{
		padding-bottom: 50px;
	}
	.popular-section{
		margin-top: 0;
	}
	.card-item.product{
		margin-right: 10px;
	}
	.card-contest-margin{
		margin-right: 0;
		margin-bottom: 10px;
	}
	.card-contest-container{
		flex-direction: column;
	}
	.instagram-section-title{
		font-size: 20px;
		line-height: 27px;
		margin-bottom: 10px;
	}
	.popular-section {
		background: none;
	}
}
</style>
