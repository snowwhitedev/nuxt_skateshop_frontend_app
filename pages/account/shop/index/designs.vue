<template>
	<div class="account-designs">
		<card-designline v-for="idx in 5" :key="idx" class="account-design"/>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account-design{
	margin-top: 20px;
}
</style>