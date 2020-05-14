<template>
	<div class="card-product-line">
		<img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
		<div class="card-content">
			<nuxt-link :to="`/account/shop/products/1/edit`" ><textlink btnClass="textlink blue" class="btn-edit">Edit</textlink></nuxt-link>
			<div class="content-col first">
				<p class="card-title">
					<span class="main">Hurley X Machina Gold</span>
				</p>
				<p class="price">
					€ 32,75
				</p>
				<div class="col-item">
					<p class="item-name">
						Stock
					</p>
					<p class="item-value stock">
						In stock
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						SKU
					</p>
					<p class="item-value">
						201907010012
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Date published
					</p>
					<p class="item-value">
						23/07/2019
					</p>
				</div>
			</div>
			<div class="content-col second">
				<div class="col-item">
					<p class="item-name">
						Category
					</p>
					<p class="item-value">
						Funny
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Colors
					</p>
					<p class="item-value">
						Red, Blue, Orange
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Tags
					</p>
					<p class="item-value">
						moonwalk, cow, pluto, colors
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'card-product-line',
	props:{

	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.card-product-line{
	width: 100%;
	height: 230px;
	display: flex;

}
.card-product-line img{
	width: 196px;
}
.card-content{
	width: 100%;
	padding: 20px;
	display: flex;
	position: relative;
}
.btn-edit{
	position: absolute;
	right: 20px;
}
.content-col{
	width: 50%;
}
.content-col.second{
	padding-top: 10px;
}
.card-title{
	display: flex;
	flex-direction: column;
}
.card-title .main{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
}
.price{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #F53F8A;

}
.col-item{
	display: flex;
	flex-direction: column;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	margin-top: 10px;
}
.col-item .item-value{
	font-weight: normal;
	font-size: 12px;
}
.col-item .item-value.stock{
	color: #44DC94;
	
}
</style>