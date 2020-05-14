<template>
	<div class="account-products">
		<card-productline-edit v-for="idx in 3" :key="idx" class="account-product"/>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account-product{
	margin-top: 20px;
}
</style>