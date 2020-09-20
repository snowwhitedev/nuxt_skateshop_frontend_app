<template>
	<div class="card-product">
		<div class="card-image">
			<btn-like class="likeBtn" />
			<figure class="image">
				<nuxt-link :to="`/shop/product/${cardData.id}`">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
				</nuxt-link>
			</figure>
		</div>
		<div class="card-content">
			<nuxt-link :to="`/shop/product/${cardData.id}`">
				<p class="title">Hurely Machina Gold</p>
			</nuxt-link>
			<p class="seller">by
				<nuxt-link :to="`/shop/designer/${cardData.id}`">
					<big>
						Little Joe
					</big>
				</nuxt-link>
			</p>
			<div class="price">
				€ 49,00
			</div>
			<div class="card-action">
				<nuxt-link :to="`/shop/product/${cardData.id}`">
					<btn-buy btnClass="btn primary sm buy" />
				</nuxt-link>
				<nuxt-link class="to-details" :to="`/shop/product/${cardData.id}`"><btn-textlink rightIcon="arrow">See details</btn-textlink></nuxt-link>
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

.card-product{
	width: 304px;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
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
.title:hover {
	color: #357BFF;
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
	display: flex;
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
	.card-product:not(.shop-product){
		width: 157px;
		height: 399px;
	}
	.card-product:not(.shop-product) .card-image{
		height: 230px;
	}
	.card-product:not(.shop-product) .card-image .image img{
		height: 230px;
	}
	.card-product:not(.shop-product) .card-content{
		padding: 10px 15px;
	}
	.card-product:not(.shop-product) .card-content .title{
		font-size: 16px;
		line-height: 22px;
	}
	.card-product:not(.shop-product) .card-content .seller{
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 10px;
	}
	.card-product:not(.shop-product) .card-content .price{
		font-size: 16px;
		line-height: 22px;
	}
	.to-details{
		display: none;
	}

	.card-product.designer-overview{
		height: 562px;
	}
	.card-product.designer-overview .card-image{
		height: 400px;
	}
	.card-product.designer-overview .card-image .image img{
		height: 400px;
	}
	.card-product.designer-overview .card-content{
		padding: 20px 20px 10px 20px;
	}
	.card-product.designer-overview .card-content .title{
		font-size: 16px;
		line-height: 22px;
	}
	.card-product.designer-overview .card-content .seller{
		font-size: $font-size-caption;
		line-height: 16px;
		margin-bottom: 15px;
	}
	.card-product.designer-overview .card-content .price{
		font-size: $font-size-subtitle-1;
		line-height: 22px;
	}
}

@media (max-width: 1295px) and (min-width:1164px){
	.card-product.shop-product{
		width: 260px;
		height: 504px;
	}
	.card-product.shop-product .card-image{
		width: 260px;
		height: 342px;
	}
	.card-product.shop-product .card-image img{
		width: 260px;
		height: 342px;
	}
}

@media (max-width: 971px) and (min-width:884px){
	.card-product.shop-product{
		width: 260px;
		height: 504px;
	}
	.card-product.shop-product .card-image{
		width: 260px;
		height: 342px;
	}
	.card-product.shop-product .card-image img{
		width: 260px;
		height: 342px;
	}
}
@media (max-width: 647px) and (min-width:560px){
	.card-product.shop-product{
		width: 260px;
		height: 504px;
	}
	.card-product.shop-product .card-image{
		width: 260px;
		height: 342px;
	}
	.card-product.shop-product .card-image img{
		width: 260px;
		height: 342px;
	}
}
@media (max-width: 559px){
	.card-product.shop-product{
		width: 100%;
		max-width: 172px;
		height: 399px;
	}
	.card-product.shop-product .card-image{
		width: 100%;
		max-width: 172px;
		height: 230px;
	}
	.card-product.shop-product .card-image img{
		width: 100%;
		max-width: 172px;
		height: 230px;
	}
	.card-product.shop-product .card-content{
		padding: 10px 15px;
	}
	.card-product.shop-product .card-content .title{
		font-size: 16px;
		line-height: 22px;
	}
	.card-product.shop-product .card-content .seller{
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 10px;
	}
	.card-product.shop-product .card-content .price{
		font-size: 16px;
		line-height: 22px;
	}
}
</style>

