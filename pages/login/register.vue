<template>
	<div class="auth-form">
		<div class="mobile-auth-header">
			<Logo />
			<div class="mobile-extra-action">
				<nuxt-link to="/login">
					<btn-text btnClass="btn primary sm">Login</btn-text>
				</nuxt-link>
				<div class="close-btn-mobile" @click="closeLogin">
					<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.07111 7.24265L21.2132 21.3848" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M7.07111 21.3848L21.2132 7.24266" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
		</div>
		<div class="close-btn desktop-only" @click="closeLogin">
			<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.07111 7.24265L21.2132 21.3848" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M7.07111 21.3848L21.2132 7.24266" stroke="#283441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
		<p class="form-title">Get started with a free deckend account.</p>
		<p class="form-text">Signing up will just take a minute. Super easy.</p>
        <input class="auth-input-text" placeholder="Username (Can not be changed later)" />
		<input type="email" class="auth-input-email" placeholder="Email address"/>
		<input type="password" class="auth-input-password" placeholder="Password">
        <input type="password" class="auth-input-password" placeholder="Repeat Password">

		<div class="auth-action">
			<btn-text btnClass="btn primary lg login">Register now</btn-text>
			<social-auth />
		</div>
        <div class="register-note">
            <p>By registering on deckend.com you agree to our terms and conditions and privacy policy.</p>
        </div>
		<div class="additional-note">
			<span>Already have an account? </span>
			<nuxt-link to="/login"><textlink >Please login here</textlink></nuxt-link>
		</div>
	</div>
</template>

<script>
import SocialAuth from '@/components/Widgets/SocialAuth.vue';
import Logo from '@/components/Navigation/Logo.vue';
export default {
	layout:'layout_auth',
	components:{
		Logo,
		SocialAuth
	},
	methods:{
		closeLogin: function(){
			this.$router.push('/');
		},
		googleLogin(){
			this.$auth.loginWith('google')
		},
		twitterLogin(){

		},
		fbLogin(){

		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.auth-form{
	display:flex;
	flex-direction:column;
	width: 100%;
    max-width: 412px;
}
.mobile-extra-action{
	display: flex;
	align-items: center;
}
.close-btn-mobile{
	line-height: 1;
	margin-left: 15px;
	display: flex;
	align-items: center;
}
.close-btn{
	position: absolute;
	right: 30px;
	top: 30px;
}
.close-btn:hover{
	cursor: pointer;
}
.form-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
    color: #283441;
   	max-width: 412px;

}
.form-text{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #4C5561;
	margin-top:10px;
	margin-bottom: 20px;
	max-width: 412px;
}
.auth-form input{
	width: 100%;
	max-width: 412px;
	height: 50px;
	padding-left: 20px;
	margin-bottom: 20px;
}

.auth-action{
	margin-top: 20px;
	display:flex;
	align-items: center;
	justify-content: space-between;
}
.social-login{
	line-height: 1;
}

.register-note{
    margin-top:10px;
}
.register-note p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #283441;
    max-width: 412px;
}
.additional-note{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	margin-top:20px;
}

.mobile-auth-header{
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
	padding-bottom: 10px;
	display: none;
}
.btn.login {
	height: 50px !important;
}
@media only screen and (max-width: 768px){
    .mobile-auth-header{
		display: flex;
	}
	.form-title{
		margin-top: 20px;
	}
}
</style>