<template>
	<div class="bannerin">
		<div class="banner-content">
			<img :src="logoImg" class="logoImg">
			<div class="banner-text">Sony - 25 Years VX1000</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "banner-contest",
	data(){
		return {
			logoImg:"https://cdn.freebiesupply.com/images/large/2x/sony-logo-black-and-white.png"
		}
	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.bannerin{
	width: 100%;
	position: relative;
	border-radius: 30px;
	overflow: hidden;
	height: 243px;
	background: url('https://thumbs.dreamstime.com/z/many-gold-cup-winner-golden-cups-victory-competition-41233570.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
.bannerin:after{
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	max-width: 850px;
	height: 100%;
	opacity: 0.4;
	background: -webkit-linear-gradient(349.53deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
	background: -o-linear-gradient(349.53deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
	background: linear-gradient(100.47deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
}
.banner-content{
	z-index: 9;
	position: absolute;
	bottom: 30px;
	left: 50px;
}
.logoImg{
	width: 94px;
	height: auto;
}
.banner-text{
	font-size: $font-size-header-4;
	font-family: $font-family-primary;
	color: $color-white;
	max-width: 469px;
	line-height: 46px;
	font-weight: $font-weight-bold;
}

@media (max-width: 767px){
	.bannerin {
		border-radius: 0;
		width: calc(100% + 20px);
		margin-left: -10px;
	}
}
</style>
