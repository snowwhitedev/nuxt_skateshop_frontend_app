<template>
	<div class="checkout-login">
		<p class="checkout-title">
			Checkout
		</p>
		<hr v-if="$device.isMobile" />
		<div class="checkout-main-container">
			<div class="col-first">
				<p class="col-label">Have an account already</p>
				<div class="main-content">
					<p class="col-text">Please login to your deckend account for an easier and faster checkout.</p>
					<input type="email" class="input-lg form-field" placeholder="Email address"/>
					<input type="password" class="input-lg form-field" placeholder="Password">
					<div class="remember-me form-field">
						<checkbox label="Remember me" />
						<nuxt-link to="/login/forgot"><textlink btnClass="textlink blue">Forgot password?</textlink></nuxt-link>
					</div>
				</div>
				<div class="form-action" v-if="$device.isMobile">
					<btn-append style="margin-top: 30px;">Login and checkout</btn-append>
					<social-auth style="margin-top:30px; margin-bottom: 30px;"/>
				</div>
			</div>
			<div class="col-second">
				<hr v-if="$device.isMobile"/>
				<p class="col-label">You are new here</p>
				<p class="col-text">Don’t worry, you can register a free deckend account during checkout.</p>
				<div class="form-action" style="margin-top: 20px;" v-if="$device.isMobile">
					<btn-append @onClick="()=>{$router.push(`/shop/checkout/step`)}">Checkout as a guest</btn-append>
				</div>
			</div>
		</div>
		<div class="checkout-main-container action" v-if="!$device.isMobile">
			<div class="col-first">
				<div class="form-action">
					<btn-append >Login and checkout</btn-append>
					<social-auth style="margin-top:30px;"/>
				</div>
			</div>
			<div class="col-second">
				<div class="form-action">
					<btn-append @onClick="()=>{$router.push(`/shop/checkout/step`)}">Checkout as a guest</btn-append>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialAuth from '@/components/Widgets/SocialAuth.vue';
export default {
	layout: 'layout_checkout_login',
	components:{
		SocialAuth
	}
}
</script>

<style lang="scss"scoped>
@import "~assets/css/variable.scss";
.checkout-login{
	width: 100%;
	max-width: 784px;
	margin: 0 auto 60px;
}
.checkout-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #283441;
}
.checkout-main-container{
	width: 100%;
	display: flex;
	flex-direction: row;
}
.col-first{
	width:50%;
}
.col-second{
	width: 50%;
	margin-left: 40px;
}
.col-label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
}
.main-content{
	padding-right: 40px;
	border-right: 1px solid #E7E8EA;
}
.col-text{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #4C5561;
}
.form-field{
	margin-top: 20px;
}
.remember-me{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.form-action{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.action{
	margin-top: 30px;
}
.action .col-first{
	padding-right: 40px;
}
.action .col-second{
	padding-right: 40px;
}

@media (max-width: 767px) {
	.checkout-title{
		font-size: 20px;
		line-height: 27px;
		margin-bottom: 0;
	}
	.checkout-main-container{
		flex-direction: column;
	}
	.main-content{
		border: none;
		padding-right: 0;
	}
	.col-first{
		width: 100%;
	}
	.col-second{
		width: 100%;
		margin-left: 0;
	}
	.input-lg{
		max-width: 100%;
	}
	.col-label{
		font-size: 20px;
		line-height: 27px;
		margin-bottom: 10px;
	}
}
</style>