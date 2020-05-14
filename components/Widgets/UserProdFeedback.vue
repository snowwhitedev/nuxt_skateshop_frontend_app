<template>
	<div class="user-prod-feedback">
		<div class="feedback-top">
			<div class="user-avatar">
				<img src="https://www.nretnil.com/avatar/swag_25k.jpg">
			</div>
			<div class="user-rate">
				<div class="upper-content">
					<vote-rate :rateVal="5"></vote-rate>
					<p>I love the quality of this product!!!</p>
				</div>
				<div class="user-info">
					<p>Gal Gadot&nbsp;<small>on January 30, 2017</small></p>
				</div>
			</div>
		</div>
		<div class="feedback-text">
			<p>I bought this deck over 5 months ago and it still holds up! No cracks and it still has the same amount of pop as on day 1. Will for sure buy again!</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.feedback-top{
	display: flex;
	align-items: center;
}
.user-avatar{
	margin-right: 20px;
}
.user-avatar img{
	width: 60px;
	height: 60px;
	border-radius: 15px;
}
.upper-content{
	display: flex;
}
.upper-content p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #283441;
	margin-left: 10px;
}
.user-info{
	margin-top: 5px;
}
.user-info p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
}
.user-info p small{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #707780;
}
.feedback-text{
	margin-top: 14px;
	margin-left: 80px;
}
.feedback-text p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #283441;
}
</style>