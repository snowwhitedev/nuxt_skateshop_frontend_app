<template>
	<div class="social-login">
		<button class="btn social" @click="fbLogin">
			<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="50" height="50" rx="3" fill="#CDE4FF"/>
				<path d="M30.0833 16H27.3333C26.1178 16 24.952 16.4829 24.0924 17.3424C23.2329 18.202 22.75 19.3678 22.75 20.5833V23.3333H20V27H22.75V34.3333H26.4167V27H29.1667L30.0833 23.3333H26.4167V20.5833C26.4167 20.3402 26.5132 20.1071 26.6852 19.9352C26.8571 19.7632 27.0902 19.6667 27.3333 19.6667H30.0833V16Z" fill="#5182FF"/>
			</svg>
		</button>
		<!-- <facebook-login class="button"
			:appId="fbAppId"
			@login="fbLogin"
			@logout="fbLogin"
			@get-initial-status="getUserData"
			@sdk-loaded="sdkLoaded" /> -->
		
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
</template>

<script>
export default {
	data(){
		return{
			isConnected: false, //for facebook login
			FB: undefined,
			fbAppId: process.env.FB_APP_ID
		}
	},

	methods:{
		googleLogin(){
			this.$gapi.getGapiClient()
				.then(gapi => {
					let gAuth = gapi.auth2.getAuthInstance();
					gAuth.signIn()
						.then(user => {
							const userInfo = {
								firstName: user.Pt.pW,
								lastName: user.Pt.qU,
								email: user.Pt.yu,
								image: user.Pt.QK
							}
							this.$store.dispatch('authentication/googleLogIn', userInfo)
								.then(response => {
									this.$auth.$storage.setUniversal("authLoggedIn", true, true);
									this.$auth.$storage.setUniversal("authUserId", response.id, true);
									this.$auth.$storage.setUniversal("authUserName", response.username, true);
									this.$auth.$storage.setUniversal("authUserEmail", response.email, true);
									this.$auth.$storage.setUniversal("authUserImg", response.image, true);
									this.$auth.$storage.setUniversal("authUserToken", response.token, true);
									this.$router.push("/");
								})
								.catch(error => {
									console.log("login", error);
								})
						})
						.catch(error => {
							console.log("[error]", error)
						});
				})
			// this.$gapi.signIn()
			// .then(user => {
			// 	console.log("[sign in]", user)
			// })
			// .catch(err => {
			// 	console.log("sign in error", err);
			// });
		},

		twitterLogin(){
			
		},
		fbLogin(){

		},
		getUserData(){
			this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
				user => {
					console.log("FBUSER", user);
					const personalID = user.id;
					const email = user.email;
					const name = user.name;
					const picture = user.picture.data.url;
				}
			)
		},
		sdkLoaded(payload) {
			this.isConnected = payload.isConnected
			this.FB = payload.FB
			if (this.isConnected) this.getUserData()
		}

	}
}
</script>

<style lang="scss" scoped>
.social-login{
	line-height: 1;
	display: flex;
	max-width: fit-content;
}
.btn.social{
	margin-right:20px;
}
.btn.social:last-child{
	margin-right:0px;
}

@media only screen and (max-width: 374px){
    .btn.social{
		margin-right:0px;
	}
}
</style>