<template>
	<div class="checkout-form">
		<p class="checkout-title">
			Checkout
		</p>
		<div class="main-container">
			<div class="checkout-first-col">
				<nuxt-child />
			</div>
			<div class="checkout-second-col">
				<div class="section-title">
					<p>Order summary</p>
					<textlink btnClass="textlink blue">Edit</textlink>
				</div>
				<div class="horizontal-line"></div>
				
				<div v-for="prod in products" :key="prod.id" class="product-card-item">
					<card-productline-checkout />
				</div>
				<div class="horizontal-line"></div>
				<ul class="cart-summary">
					<li>
						<p>Subtotal</p>
						<p>€ 196,00</p>
					</li>
					<li>
						<p>Shipping costs (The Netherlands)</p>
						<p>€ 8,50</p>
					</li>
					<li>
						<p>Coupon (20% discount)&nbsp;&nbsp;<span class="remove-btn">remove</span></p>
						<p>-€ 39,20</p>
					</li>
				</ul>
				<div class="horizontal-line"></div>
				<div class="total">
					<p>Total price&nbsp;<small>(incl. VAT)</small></p>
					<p>€ 165,30</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	layout: 'layout_checkout',
	data(){
		return{
			products:[
				{id: 1},
				{id: 2},
				{id: 3},
				{id: 4}
			]
		}
	},
	created(){
		this.$router.push('/shop/checkout/step/step1');
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.checkout-form{
	// border: 1px solid black;
}
.checkout-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #283441;
	margin-bottom: 20px;
}
.main-container{
	display: flex;
	justify-content: space-between;
}
.checkout-first-col{
	width: 100%;
	max-width: 628px;
}
.checkout-second-col{
	width: 100%;
	max-width: 412px;
	border-radius: 5px;
	background: #FAFAFB;
	// background: #eee;
	padding: 0 30px 30px 30px;
}
.section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background: #E7E8EA;
	// background: black;
	margin-top: 20px;
}
.product-card-item{
	margin-top: 20px;
}
ul.cart-summary  li{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
ul.cart-summary li:last-child{
	margin-top: 30px;
}
.total{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
}
.total p small{
	font-weight: 300;
	font-size: 80%;
}
</style>