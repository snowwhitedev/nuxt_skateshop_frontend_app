<template>
	<div class="contest-detail mb-6">
		<banner-contest />
		<div class="content-container">
			<div class="content-left">
				<div class="content-section">
					<p class="section-title">About this contest</p>
					<p class="section-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt magna in nisl sagittis, non eleifend velit scelerisque. Maecenas sed felis ac diam venenatis pretium sit amet ac risus. In tincidunt mi non erat vestibulum elementum. Fusce eget felis maximus, vestibulum elit vitae, fringilla tellus. Mauris sed tincidunt mi non erat unt mi non erat vestibulum elementum. Velit scelerisque. Maecenas sed felis ac diam venenatis pretium sit amet ac risus. In tincidunt mi non erat vestibulum elementum. Fusce eget felis maximus, vestibulum elit vitae, fringilla tellus. Mauris sed tincidunt mi non erat unt mi non erat vestibulum elementum.
					</p>
				</div>
				<div class="content-section">
					<social-links />
				</div>
				<div class="content-section">
					<p class="section-title">Inspiration</p>
					<p class="section-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt magna in nisl sagittis, non eleifend velit scelerisque.
					</p>
					<img :src="contentImg" class="content-image" />
				</div>
			</div>
			<div class="content-right">
				<contest-details />
				
			</div>
			<div class="card-section" style="margin-top: 30px;" v-if="$device.isMobile">
				<div class="card-section-header">
					<div >
						<div class="card-section-title">
							Designs in this contest
						</div>
					</div>
					<div class="card-section-action">
						<btn-text btnClass="btn secondary sm">See more</btn-text> 
					</div>
				</div>
				<div class="card-container">
					<div class="card-item" v-for="design in contestDesigns" :key="design.id">
						<card-rate  :cardData="design"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BannerContest from '@/components/Banners/BannerContest.vue';
import ContestDetails from '@/components/Widgets/ContestDetails.vue'
export default {
	
	components:{
		BannerContest,
		ContestDetails
	},
	data(){
		return{
			contentImg: "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
			contestDesigns:[
				{"id": 1, "title": "title1"},
				{"id": 2, "title": "title2"},
				{"id": 3, "title": "title3"},
				{"id": 4, "title": "title4"}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.content-container{
	width: fit-content;
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
	flex-direction: row;
}
.content-left{
	width: 628px;
	margin-right: 20px;
}
.content-section{
	margin-bottom: 40px;
}
.content-section p.section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 10px;
}
.content-section p.section-text{
	// width: 100%;
	max-width: 626px;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #283441;
}
.content-image{
	width: 100%;
	height: auto;
	margin-top: 10px;
}
.content-right{
	width:412px;
	padding: 30px;
	margin-top: -30px;
	background: #FAFAFB;
	border-radius: 5px;
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
.card-container{
	display: flex;
	flex-direction: row;
	overflow:auto;
	padding: 0;
	padding-bottom: 10px;
}
.card-item{
	margin-right: 20px;
}
.card-item:last-child{
	margin-right: 0;
}
@media (max-width: 1079px){
	.content-right{
		width: 356px;
		padding: 15px;
	}
}
@media (max-width: 1023px){
	.content-left{
		width: 392px;
	}
	.content-right{
		width: 336px; 
	}
}
@media (max-width: 767px){
	.content-container{
		flex-direction: column;
		width: 100%;
	}
	.content-left{
		width: 100%;
	}
	.content-right{
		width: 100%;
		padding: 30px 20px 20px 20px;
		background: #FAFAFB;
	}
	.card-section-title{
		font-size: 20px;
		line-height: 27px;
	}
	
}
</style>