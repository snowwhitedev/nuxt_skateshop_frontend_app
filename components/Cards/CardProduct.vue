<template>
	<div class="card">
		<div class="card-image">
			<btn-like class="likeBtn" />
			<figure class="image">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
			</figure>
		</div>
		<div :class="cardContentClass">
			<p class="title">Hurely X Machina Gold</p>
			<p class="seller">by<big>Little Joe</big></p>
			<div class="price">
				€ 49,00
			</div>
			<div class="card-action">
				<btn-buy btnClass="btn primary sm buy" />
				<nuxt-link  class="to-details" :to="`/shop/product/${cardData.id}`"><btn-textlink rightIcon="arrow">See details</btn-textlink></nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components:{
	},
	props: {
		cardData: Object
	},
	data(){
	return{
		cardContentClass: " card-content"      
	}
	},
	methods:{

	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.likeBtn{
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 9;
}

.card{
	width: 304px;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	// box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.5);
	border-radius: 5px;
	height: 562px;
}

.card-image{
	width: 100%;
	height: 400px;
	border-radius: 5px 5px 0 0;
}
.card-image .image img{
	width: 100%;
	height: 400px;
	border-radius: 5px 5px 0 0;
}

.card-content{
	padding: 20px 20px 10px 20px;
}

.title{
	font-size: $font-size-header-6;
	color: #283441;
	font-weight: $font-weight-bold;
	line-height: 27px;
	font-style: normal;
	font-family: $font-family-primary;
	margin-bottom: 0px;
}

.seller{
	font-family: $font-family-primary;
	font-size: $font-size-caption;
	font-style: normal;
	font-weight: normal;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #9399A0;
	margin-bottom: 15px;
}
.seller big{
	font-family: $font-family-primary;
	font-size: 120%;
	color: #000;
	margin-left: 8px;
}
.price{
	font-family: $font-family-primary;
	font-size: $font-size-subtitle-1;
	font-weight: $font-weight-bold;
	color: $color-pink;
	font-style: normal;
	line-height: 22px;
}
.card-action{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top:10px;
}
.to-details{
	display: block;
}
@media (max-width: 767px) {
	.card{
		width: 157px;
		height: 399px;
	}
	.card-image{
		height: 230px;
	}
	.card-image .image img{
		height: 230px;
	}
	.card-content{
		padding: 10px 15px;
	}

	.title{
		font-size: 16px;
		line-height: 22px;
	}
	.seller{
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 10px;
	}
	.price{
		font-size: 16px;
		line-height: 22px;
	}
	.to-details{
		display: none;
	}
}
</style>

