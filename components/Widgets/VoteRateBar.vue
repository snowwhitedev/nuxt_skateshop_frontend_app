<template>
	<div class="vote-rate-bar">
		<vote-rate :rateVal="rateVal" class="sm"></vote-rate>
		<div class="rate-bar">
			<div class="review-part" :style="`width:${reviewPercent}%;`"></div>
		</div>
		<p class="review-count">{{ reviews }}</p>
	</div>
</template>

<script>
export default {
	props:{
		rateVal:{
			type: Number,
			default: null
		},
		totalReviews:{
			type: Number,
			default: null
		},
		reviews:{
			type: Number,
			default: null
		}
	},
	computed:{
		reviewPercent: function(){
			return Math.round(100 * this.reviews / this.totalReviews); 
		}
	}
	
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
	.rate-bar{
		width: 430px;
		height: 12px;
		background: #E7E8EA;
		border-radius: 7px;
		position: relative;
	}
	.review-part{
		position: absolute;
		background: #FFA057;
		border-radius: 7px;
		height: 12px;
	}
	.vote-rate-bar{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	p.review-count{
		font-family: $font-family-primary;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 30px;
		text-align: right;
		color: #283441;
	}
</style>