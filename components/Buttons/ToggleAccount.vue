<template>
	<div class="toggle-account" style="background-image:" @click="$emit('onClick')">
		<img class="design-image" :src="authUserImg" alt="User">
	</div>
</template>

<script>
export default {
	computed:{
		authUserImg(){
			return this.$auth.$storage.getUniversal("authUserImg");
		},
		authUserName(){
			return this.$auth.$storage.getUniversal("authUserName");
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";

.toggle-account{
	position: relative;
	width:40px;
	height: 40px;
	min-width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
}
.toggle-account:hover{
	cursor: pointer;
}
.toggle-account img{
	width: 40px;
	height: 40px;
	border-radius: 15px;
}

</style>