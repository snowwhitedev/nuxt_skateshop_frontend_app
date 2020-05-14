<template>
	<button class="btn lg cancel" @click="clickBtn">Cancel</button>
</template>

<script>
export default {
	methods:{
		clickBtn: function(event){
			event.preventDefault();
			console.log("clickBtn");
			this.$emit('onClick');
		}
	}
}
</script>

<style lang="scss" scoped>
.btn.cancel{
	background: white;
	border: 1px solid #707780;
	box-sizing: border-box;
	border-radius: 3px;
	
	color: #707780;
}
</style>