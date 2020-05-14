<template>
	<div class="contest-detail">
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
					<p class="section-title">Winners</p>
					<p class="section-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt magna in nisl sagittis, non eleifend velit scelerisque. Maecenas sed felis ac diam venenatis pretium sit amet ac risus.
					</p>
					<ul class="winners">
						<li><textlink>Into the Forrest </textlink><small> by</small> Little Joe</li>
						<li><textlink>Into the Forrest </textlink><small> by</small> Little Joe</li>
						<li><textlink>Into the Forrest </textlink><small> by</small> Little Joe</li>
						<li><textlink>Into the Forrest </textlink><small> by</small> Little Joe</li>
						<li><textlink>Into the Forrest </textlink><small> by</small> Little Joe</li>
					</ul>
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
				<contest-details :closed="true"/>
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
			contentImg: "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg"
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.content-container{
	width:1060px;
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
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
ul.winners{
	list-style: decimal;
	list-style-position: inside;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 30px;
	margin-top: 30px;
}
.content-image{
	width: 100%;
	height: auto;
	margin-top: 10px;
}
.content-right{
	width:412px;
	padding: 0 30px 30px 30px;
}
li small{
	font-size: 12px;
}
</style>