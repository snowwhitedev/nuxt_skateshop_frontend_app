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
				<tag-status class="desktop-only-1023" :status="0">Pending shipment</tag-status>
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
				<div class="col-item">
					<tag-status class="mobile-only-1023" :status="0">Pending shipment</tag-status>
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
	display: flex;
	flex-direction: row;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
}
.card-product-line img{
	width: 196px;
	border-radius: 5px;
}
.card-content{
	width: 100%;
	padding: 20px;
	display: flex;
	flex-direction: row;
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
.desktop-only-1023{
	display: block;
}
.mobile-only-1023{
	display: none;
}
@media (max-width: 1023px){
	.card-product-line{
		flex-direction:column; 
	}
	.card-product-line img{
		width: 100%;
		height: auto;
	}
	.card-content{
		flex-direction: column;
	}
	.content-col{
		width: 100%;
	}
	.content-col.content-col.second{
		padding-top: 0px;
	}
	.price{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.col-item{
		flex-direction: row;
		margin-bottom: 10px;
	}
	.col-item:last-child{
		margin-bottom: 0;
	}
	.item-name{
		width: 30%;
	}
	.desktop-only-1023{
		display: none;
	}
	.mobile-only-1023{
		display: block;
	}
}
@media (max-width: 767px){
	.card-product-line img{
		width: 100%;
		max-width: 355px;
		height: calc(100vw - 20px);
		max-height: 355px;
		border-bottom-left-radius: 0;
    	border-bottom-right-radius: 0
	}
}
</style>