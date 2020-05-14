<template>
	<div class="product-reviews">
		<div class="reviews-section-header">
			<p>Reviews</p>
			<btn-text btnClass="btn secondary sm">Write a review</btn-text>
		</div>
		<div class="total-review-rate">
			<div class="rate-mark">
				<p class="mark">4.5</p>
				<p class="full-mark">out of 5</p>
			</div>
			<vote-rate :rateVal="4.5" starSize="lg" />
			<div class="total-reviews">
				Total reviews:&nbsp;{{ totalReviews }}
			</div>
		</div>
		<div class="vote-rate-bars">
			<ul>
				<li v-for="(val, idx) in rateNum" :key="idx"><vote-rate-bar :rateVal="5-idx" :totalReviews="totalReviews" :reviews="val"></vote-rate-bar></li>
			</ul>
		</div>
		<div class="user-feedbacks mt-4">
			<ul>
				<li v-for="idx in 2" :key="idx">
					<user-prod-feedback></user-prod-feedback>
				</li>
			</ul>
		</div>
		<div class="post-review">
			<div class="post-review-top">
				<div class="user-avatar">
					<img src="https://www.nretnil.com/avatar/swag_25k.jpg">
				</div>
				<div class="rate-stars">
					<p>How many stars do you give this product?</p>
					<vote-rate-btn></vote-rate-btn>
				</div>
			</div>
			<div class="post-review-bottom">
				<input class="input-lg" placeholder="Write a catchy title for your review" />
				<textarea placeholder="This is where you write about your experiences with this product"></textarea>
				<div class="bottom-action">
					<p>
						By publishing reviews you give deckend.com permission to use your review in our communication channels and use your personal details according to our
						<textlink btnClass="textlink dark bold" fontSize="12px">privacy policy.</textlink> 
					</p>
					<btn-text btnClass="btn primary lg">Publish your review</btn-text>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import UserProdFeedback from '@/components/Widgets/UserProdFeedback'
export default {
	// props:{
	// 	totalReviews:{
	// 		type:
	// 	}
	// }
	components:{
		UserProdFeedback
	},
	data(){
		return{
			totalReviews: 2,
			rateNum:[1, 1, 0, 0, 0]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.product-reviews{
	width: 100%;
}
.reviews-section-header{
	display:flex;
	align-items: center;
	justify-content: space-between;
}
.reviews-section-header p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
}
.total-review-rate{
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom:20px;
}
.rate-mark{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	position: relative;
}
.rate-mark p.mark{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 60px;
	line-height: 82px;
	text-align: center;
	color: #283441
}
.rate-mark p.full-mark{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	text-align: center;
	color: #283441;
	position: absolute;
	bottom: 0;
}
.total-reviews{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	text-align: right;
	color: #283441;
	position: absolute;
	right: 0;
}
.user-feedbacks{
	margin-bottom: 30px;
}
.user-feedbacks ul li{
	margin-bottom: 40px;
}
.user-feedbacks ul li:last-child{
	margin-bottom: 0px;
}
.user-avatar{
	margin-right: 20px;
}
.user-avatar img{
	width: 60px;
	height: 60px;
	border-radius: 15px;
}
.post-review-top{
	display: flex;
	align-items:center;
}
.rate-stars p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #283441;
}
.post-review-bottom{
	margin-left: 80px;
	margin-top: 10px;
}
.post-review-bottom input{
	max-width: 528px;
}
.post-review-bottom textarea{
	margin-top:20px;
	height: 120px;
}
.bottom-action{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.bottom-action p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #283441;
	max-width: 332px;
}
</style>