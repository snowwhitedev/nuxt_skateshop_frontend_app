<template>
	<div class="account-products">
		<card-productline-edit v-for="idx in 3" :key="idx" class="account-product"/>
		<mobile-loading v-if="$device.isMobile"></mobile-loading>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account-products{
	margin-bottom: 60px;
}
.account-product{
	margin: 20px auto 0;
}

@media (max-width: 1023px){
	.account-products{
		margin-bottom: 50px;
	}
}
@media (max-width: 767px){
	.account-products{
		margin-bottom: 20px;
	}
}
</style>