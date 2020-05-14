<template>
	<div class="layout-auth">
		<div class="login-image">
			<nuxt-link to="/">
				<Logo  class="logo" logoColor="white" logoSize="sm"/>
			</nuxt-link>
		</div>
		<div class="input-content">  
			<nuxt/>
		</div>
	</div>
</template>

<script>
import Logo from '../components/Navigation/Logo.vue';
export default {
	components: {
		Logo
	},
	data() {
		return {}

	},
	created(){
	}
}
</script>

<style lang="scss" scoped>
.login-image{
	width: 50%;
	height: 100vh;
	background-image: url('~assets/images/backgrounds/login_back.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.logo{
	position: absolute;
	left:38px;
	top: 38px;
}
.layout-auth{
	display: flex;
	align-items: center;
	// height: 100vh;
}
.input-content{
	padding-left: 128px;
	padding-right: 10px;
	width:50%;
	box-sizing: border-box;
}

@media only screen and (max-width: 1200px){
	.input-content{
		padding-left: 64px;
	}
}
@media only screen and (max-width: 1024px){
	.input-content{
		padding-left: 48px;
	}
}

@media only screen and (max-width: 768px){
	.layout-auth{
		justify-content: center;
	}
	.login-image{
		display: none;
	}
	.input-content{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 10px;
	}
}

</style>
