<template>
	<div class="">
		<btn-textlink btnClass="btn textlink thin" leftIcon="arrow" @onClick="()=>{$router.go(-1)}">Continue shopping</btn-textlink> 
		<div class="shopping-cart">
			<div class="cart-col-first">
				<p class="section-title first">
					Shopping cart
				</p>
				<div class="horizontal-line"></div>
				<div v-for="prod in cartProducts" :key="prod.id" class="cart-col-item">
					<card-productline-cart />
					<svg @click="removeProduct(prod)" class="btn-remove" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="20" height="20" rx="3" fill="#F3F4F4"/>
						<path d="M6.82837 7.17157L12.4852 12.8284" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M6.82837 12.8284L12.4852 7.17158" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			<div class="col-second">
				<p class="section-title">
					Order summary
				</p>
				<div class="horizontal-line"></div>
				<ul>
					<li class="order-item">
						<p>Total items</p>
						<p>4</p>
					</li>
					<li class="order-item">
						<p>Subtotal</p>
						<p>€ 196,00</p>
					</li>
				</ul>
				<div class="form-input">
					<div class="order-item form-input-label">
						<p>Shipping costs&nbsp;<small>(estimation)</small></p>
						<p>€ 8,50</p>
					</div>
					<select-box placeholder="Select country" :items="countries" />
				</div>
				<div class="form-input">
					<dropdown-panel label="Do you have a discount coupon?">
						<div class="order-item">
							<input class="input-md" />
							<btn-text btnClass="btn dark lg" style="margin-left: 5px;">Apply</btn-text>
						</div>
					</dropdown-panel>
				</div>
				<div class="horizontal-line sep"></div>
				<div class="order-item form-input-label">
					<p>Total price&nbsp;<small>(inc. VAT)</small></p>
					<p>€ 204,50</p>
				</div>
				<div class="order-action">
					<btn-append @onClick="()=>{$router.push(`/shop/checkout/login`)}">Proceed to checkout</btn-append>
				</div>
			</div>
		</div>
		<btn-textlink btnClass="btn textlink thin" leftIcon="arrow" class="bottom-back" v-if="!$device.isMobile">Continue shopping</btn-textlink>
		<div class="section bottom">
			<div class="card-section-header">
				<div >
					<div class="card-section-title">
						<span v-if="!$device.isMobile">Best sellers</span>
						<span v-else>Similar products</span>
					</div>
					<div class="card-section-description" v-if="!$device.isMobile">
						Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum
					</div>
				</div>
				<div class="card-section-action">
					<btn-text btnClass="btn secondary sm">See more</btn-text> 
				</div>
			</div>
			<div class="card-container">
				<div class="card-item"><card-product :cardData="cardData" /></div>
				<div class="card-item"><card-product :cardData="cardData" /></div>
				<div class="card-item"><card-product :cardData="cardData" /></div>
				<div class="card-item"><card-product :cardData="cardData" /></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			cartProducts:[
				{id: 1},
				{id: 2},
				{id: 3}
			],
			countries: [
				"Netherlands", "United States", "United Kingdom"
			],
			cardData: {id: 1}
		}
	},
	methods:{
		removeProduct(prod){
			this.cartProducts.splice(this.cartProducts.indexOf(prod), 1);
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.shopping-cart{
	display: flex;
	justify-content: space-between;
	flex-direction: row;
}
.cart-col-first{
	width: 884px;
}
.cart-col-item{
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.col-second{
	width: 324px;
	background: #FAFAFB;
	// background: #eee;
	border-radius: 5px;
	padding: 30px;
	padding-top: 10px;
	min-width: 320px;
	height: fit-content;
}
.btn-remove:hover{
	cursor: pointer;
}
.section-title.first{
	margin-top: 10px;
}
.section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.horizontal-line.sep{
	margin-top:30px;
	margin-bottom: 30px;
}
.order-item{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.order-item{
	font-family: $font-family-primary;;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}
ul li{
	margin-top: 20px;
}
.form-input{
	margin-top: 30px;
}
.form-input .form-input-label{
	margin-bottom: 10px;
}
.order-action{
	margin-top: 30px;
}
.card-section-header{
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 10px;
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
	// overflow-x:auto;
	overflow:auto;
	padding: 10px 0;
    // padding: 1px 2px;
}
.card-item{
	margin-right: 20px;
}
.bottom-back{
	margin-top: 40px;
}
.section.bottom{
	margin-bottom: 60px;
}
@media (max-width: 1023px){
	.section-title{
		font-size: 20px;
		line-height: 27px;
	}
	.btn-remove{
		display: none;
	}
	
}
@media (max-width: 767px){
	.shopping-cart{
		flex-direction: column;
	}
	.cart-col-first{
		width: 100%;
	}
	.col-second{
		margin-top: 30px;
		width: 100%;
		min-width: 100%;
		margin: 30px auto 0px;
	}
	.section.bottom{
		margin-bottom: 50px;
	}
}
</style>