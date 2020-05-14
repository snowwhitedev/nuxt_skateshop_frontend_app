<template>
	<div class="card-product-line">
		<img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
		<div class="card-content">
			<div class="content-col first">
				<p class="card-title">
					<span class="main">Hurley X Machina Gold</span>
					<span class="sub"><small>by</small>&nbsp;Little Joe</span>
				</p>
				<p class="price">
					€ 32,75
				</p>
				<tag-status :status="0">Pending shipment</tag-status>
			</div>
			<div class="content-col second">
				<div class="col-item">
					<p class="item-name">
						Deck size
					</p>
					<p class="item-value">
						8.25
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Griptape
					</p>
					<p class="item-value">
						Yes, and please grip it
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
	height: 183px;
	display: flex;

}
.card-product-line img{
	width: 196px;
}
.card-content{
	width: 100%;
	padding: 20px;
	display: flex;

}
.content-col{
	width: 50%;
}
.content-col.second{
	padding-top: 30px;
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
.card-title .sub{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #283441;
}
.price{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #F53F8A;
	padding-top: 20px;
	padding-bottom: 20px;
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
}
.col-item .item-value{
	font-weight: 300;
}
.col-item:first-child{
	margin-bottom: 10px;
}
</style>