<template>
	<div class="auth-form">
		<div class="mobile-auth-header">
			<Logo />
			<div class="mobile-extra-action">
				<nuxt-link to="/login">
					<btn-text btnClass="btn primary lg">Login</btn-text>
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
			<btn-text btnClass="btn primary lg">Register now</btn-text>
			<div class="social-login">
				<button class="btn social" @click="fbLogin">
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="50" height="50" rx="3" fill="#CDE4FF"/>
						<path d="M30.0833 16H27.3333C26.1178 16 24.952 16.4829 24.0924 17.3424C23.2329 18.202 22.75 19.3678 22.75 20.5833V23.3333H20V27H22.75V34.3333H26.4167V27H29.1667L30.0833 23.3333H26.4167V20.5833C26.4167 20.3402 26.5132 20.1071 26.6852 19.9352C26.8571 19.7632 27.0902 19.6667 27.3333 19.6667H30.0833V16Z" fill="#5182FF"/>
					</svg>
				</button>
				<button class="btn social" @click="twitterLogin">
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="50" height="50" rx="3" fill="#DBF8FF"/>
					<path d="M35.1667 16.0092C34.2889 16.6284 33.3169 17.102 32.2883 17.4117C31.7363 16.7769 31.0026 16.327 30.1864 16.1228C29.3703 15.9186 28.5112 15.97 27.7252 16.27C26.9393 16.57 26.2644 17.1041 25.7919 17.8001C25.3194 18.4962 25.0721 19.3205 25.0833 20.1617V21.0784C23.4724 21.1202 21.8762 20.7629 20.4368 20.0384C18.9973 19.3139 17.7595 18.2446 16.8333 16.9259C16.8333 16.9259 13.1667 25.1759 21.4167 28.8426C19.5288 30.124 17.2799 30.7666 15 30.6759C23.25 35.2592 33.3333 30.6759 33.3333 20.1342C33.3325 19.8789 33.3079 19.6242 33.26 19.3734C34.1956 18.4508 34.8558 17.2859 35.1667 16.0092Z" fill="#33C9D2"/>
					</svg>	
				</button>
				<button class="btn social" @click="googleLogin">
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="50" height="50" rx="3" fill="#F9F9F9"/>
					<path d="M18.8757 26.2949L18.1099 29.1537L15.3109 29.2129C14.4745 27.6614 14 25.8863 14 24C14 22.1759 14.4436 20.4558 15.2299 18.9412H15.2305L17.7224 19.3981L18.814 21.8749C18.5855 22.541 18.461 23.256 18.461 24C18.4611 24.8075 18.6073 25.5811 18.8757 26.2949Z" fill="#FBBB00"/>
					<path d="M35.8079 21.9451C35.9342 22.6105 36.0001 23.2977 36.0001 24C36.0001 24.7875 35.9173 25.5557 35.7595 26.2967C35.224 28.8183 33.8248 31.0201 31.8866 32.5782L31.886 32.5776L28.7474 32.4175L28.3031 29.6445C29.5893 28.8902 30.5944 27.7098 31.1239 26.2967H25.2419V21.9451H31.2097H35.8079Z" fill="#518EF8"/>
					<path d="M31.8859 32.5776L31.8865 32.5782C30.0014 34.0934 27.6067 35 25 35C20.8109 35 17.1688 32.6586 15.3109 29.2129L18.8756 26.2949C19.8046 28.7741 22.1962 30.539 25 30.539C26.2051 30.539 27.3342 30.2132 28.303 29.6445L31.8859 32.5776Z" fill="#28B446"/>
					<path d="M32.0212 15.5324L28.4577 18.4498C27.455 17.8231 26.2698 17.461 25 17.461C22.1327 17.461 19.6964 19.3068 18.814 21.8749L15.2305 18.9412H15.2299C17.0606 15.4115 20.7487 13 25 13C27.669 13 30.1162 13.9507 32.0212 15.5324Z" fill="#F14336"/>
					</svg>
				</button>

			</div>
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
import Logo from '@/components/Navigation/Logo.vue';
export default {
	layout:'layout_auth',
	components:{
		Logo
	},
	methods:{
		closeLogin: function(){
			this.$router.go(-1);
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
.btn.social{
	margin-right:20px;
}
.btn.social:last-child{
	margin-right:0px;
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
@media only screen and (max-width: 768px){
    .mobile-auth-header{
		display: flex;
	}
	.form-title{
		margin-top: 20px;
	}
}
</style>