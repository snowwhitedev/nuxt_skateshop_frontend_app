<template>
	<div>
		<div class="page-section">
			<div class="rate-design-detail">
				<div class="design-detail">
					<img class="design-image" src="https://cdn.dribbble.com/users/2546342/screenshots/5208110/skateboards_mockup_dribbble__size_2.jpg">
					<div class="design-content">
						<p class="design-title">
							Hurley X Machina Gold 
						</p>
						<p class="design-text">
							Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum sed ullamcorper. Isscd nisl malesua Isscd nisl malesuada, quis porta nulla.
						</p>
						<div class="designer">
							<div class="designer-info">
								<img class="designer-img" src="https://www.nretnil.com/avatar/swag_25k.jpg" />
								<div class="designer-desc">
									<p class="designer-name" style="display:flex; align-items:center;">Ben Jhamin
										<btn-textlink-follow style="margin-left: 30px;" />
									</p>
									<p class="designer-id">@davearts</p>
								</div>
							</div>
						</div>
						<div class="tags">
							<tag v-for="tag in tags" :key="tag">{{tag}}</tag>
						</div>
						<div class="design-rate">
							<div v-if="authLoggedIn"  class="rate-btns">
								<btn-ratinglevel2 v-for="rate in 5" :key="rate" :ratingLevel="rate" />
							</div>
							<div  v-else class="rate-btns">
								<btn-ratinglevel2 v-for="rate in 5" :key="rate" :ratingLevel="rate"  :btnDisabled="true"/>
								<btn-text btnClass="btn primary lg" class="login-btn">Please login to rate</btn-text>
							</div>
							<div class="rate-results">
								<p>4.7<small>&nbsp;/&nbsp;5 rating</small></p>
								<p>54<small>&nbsp;total votes</small></p>
								<p>17<small>&nbsp;days left</small></p>
							</div>
						</div>
						<card-preorder />
						<div class="social-links-section">
							<social-links></social-links>
							
						</div>
					</div>
				</div>
				<div class="comment-section">
					<div class="comments">
						<p>3 comments</p>
						<post-comment style="margin-bottom:40px"/>
						<comment style="margin-bottom: 60px;"/>
						<comment style="margin-bottom: 60px;"/>
					</div>
					<div class="contest">
						<p>About this contest</p>
						<card-contest />
						<div class="section">
							<div class="card-section-header">
								<div >
									<div class="card-section-title">
										Other designs in this contest
									</div>
								</div>
								<div class="card-section-action">
									<btn-text btnClass="btn secondary sm">See more</btn-text> 
								</div>
							</div>
							<div class="card-container">
								<div class="card-item">
									<card-rate :cardData="cardDataMock"/>
								</div>
								<div class="card-item">
									<card-rate :cardData="cardDataMock"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="section bottom">
			<div class="page-section">

				<div class="card-section-header">
					<div >
						<div class="card-section-title">
							Popular designs
						</div>
						<div class="card-section-description">
							Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum
						</div>
					</div>
					<div class="card-section-action">
						<btn-text btnClass="btn secondary sm">See more</btn-text> 
					</div>
				</div>
				<div class="card-container">
					<div class="card-item" v-for="design in popDesigns" :key="design.id">
						<card-rate :overlay="design.overlay" :cardData="design" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BtnRatinglevel2 from '@/components/Buttons/BtnRatinglevel2';
import CardPreorder from '@/components/Cards/CardPreorder.vue';
import PostComment from '@/components/Widgets/PostComment.vue';
import Comment from  '@/components/Widgets/Comment.vue';

import { mapState } from 'vuex';
export default {
	name:"rate-design-detail",
	// middleware: ['auth'],
	layout: 'layout_home',
	components:{
		BtnRatinglevel2, 
		CardPreorder,
		PostComment,
		Comment
	},
	data(){
		return{
			tags:['skate', 'team', 'road trip', 'monster', 'funny', 'spacewalk', 'saturn', 'planet', 'colorful', 'rainbow', 'unicorn'],
			popDesigns:[
				{"id": 1, "title": "title1", "overlay":false},
				{"id": 2, "title": "title2", "overlay":false},
				{"id": 3, "title": "title3", "overlay":false},
				{"id": 4, "title": "title4", "overlay":false}
			],
			cardDataMock: {"id": 1, "title": "title1", "overlay":false}   
		}
	},
	created(){
		console.log(this.$route.params);
		
	},
	methods:{
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.page-section{
	max-width: 1276px;
	width: 100%;
	margin: 0 auto;
}
.design-detail{
	display: flex;
}
.design-image{
	width: 736px;
	height: auto;
	max-height: 1100px;
}
.design-content{
	padding: 20px;
}
.design-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #283441;
}
.design-text{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #707780; 
}
.designer{
	display: flex;
	margin-top: 20px;
}
.designer-info{
	display: flex;
	align-items: center;
}
.designer-img{
	width: 40px;
	height: 40px;
	border-radius: 15px;
	margin-right: 20px;
}
.designer-name{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
}
.designer-id{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #707780;
}
.tags{
	margin-top: 15px;
	margin-bottom: 60px;
}
.tags button{
	margin-right:10px;
	margin-top: 10px;
}
.design-rate{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 20px;
	margin-bottom: 40px;
}
.rate-btns{
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
}
.rate-btns button{
	margin-right: 10px;
}
.rate-btns button:last-child{
	margin-right: 0px;
}
.login-btn{
	position: absolute;
}
.rate-results{
	display: flex;
	align-items: center;
	margin-top: 20px;
	justify-content: space-between;
	width: 75%;
}
.rate-results p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #357BFF;
}
.rate-results p small{
	font-weight: normal;
}
.social-links-section{
margin-top: 20px;
}
.social-links-header{
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}
.social-links-header p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	margin-right: 20px;
}
.short-line{
	width: 20px;
	border: 1px solid #283441 ;
}
a.social-link{
	margin-right: 10px;
}
a.social-link:last-child{
	margin-right: 0;
}

.comment-section{
	display: grid;
	grid-template-columns:50% 50%;
	margin-top: 60px;
}
.comments{
	padding-right: 10px;
}
.comments p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
}
.contest{
	padding-left: 10px;
}
.contest p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
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
.card-container{
	display: flex;
	overflow:auto;
	// padding: 10px 0;
}
.card-item{
margin-right: 20px;
}
.card-item:last-child{
	margin-right: 0;;
}
.section.bottom{
	background: #FBFBFB;
	// background: #cccccc;
	padding-bottom: 60px;
}
</style>