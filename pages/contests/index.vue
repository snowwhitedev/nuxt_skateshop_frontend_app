<template>
	<div class="page-section">
		<banner-main title="Design Contests" subTitle="2 open contests" />
		<div class="app-container">
			<div class="section">
				<div class="contest-card-item"><card-contest-detail :cardData="contests[0]"/></div>
				<div class="contest-card-item"><card-contest-detail :cardData="contests[1]" cardType="right"/></div>
				<div class="contest-card-item"><card-contest-detail :cardData="contests[2]"/></div>
				<div class="contest-card-item"><card-contest-detail :cardData="contests[3]" cardType="right"/></div>
			</div>
			<div class="section">
				<div class="section-title">Closesd contests</div>
				<div class="section-description">Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum</div>
				<div class="grid-container-3">
					<card-contest-closed v-for="contest in contests" :key="contest.id" :cardData="contest"/>
				</div>
				<pagination class="paginator" :totalPages="3" />
			</div>			
		</div>
	</div>
</template>

<script>
import BannerMain from '@/components/Banners/BannerMain.vue';
export default {
	components:{
		BannerMain
	},
	layout:'layout_fullbanner',
	data(){
		return{
			contests:[
				{    
					"id": 1,
					"cardImage": 'https:/resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg',
					'logoImage': 'https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png'
				},
				{    
					"id": 2,
					"cardImage": 'https://resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg',
					'logoImage': 'https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png'
				},
				{    
					"id": 3,
					"cardImage": 'https://resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg',
					'logoImage': 'https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png'
				},
				{    
					"id": 4,
					"cardImage": 'https://resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg',
					'logoImage': 'https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png'
				},
				{    
					"id": 5,
					"cardImage": 'https://resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg',
					'logoImage': 'https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png'
				},
				{    
					"id": 6,
					"cardImage": 'https://resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg',
					'logoImage': 'https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png'
				}
			]
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.contest-card-item{
	margin-bottom: 20px;
}
.contest-card-item:last-child{
	margin-bottom: 0px;
}
.section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
}
.section-description{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #4C5561;
	margin-top: 10px;
	margin-bottom: 20px;
}
.paginator{
	margin-bottom: 60px;
}
.grid-container-3 {
    width: 100%;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: auto auto auto;
    grid-row-gap: 36px;
    max-width: 1276px;
    justify-items: center;
}

@media only screen and (max-width: 1315px){
    .grid-container-3{
        grid-template-columns: auto auto;
    }
}

@media only screen and (max-width: 883px){
    .grid-container-3{
        grid-template-columns: auto auto;
    }
}


@media only screen and (max-width: 451px){
    .grid-container-3{
        grid-template-columns: auto;
    }
}
</style>