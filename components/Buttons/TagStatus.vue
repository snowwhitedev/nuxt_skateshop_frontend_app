<template>
	<div :class="tagClass[status]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:{
		status:{
			type: Number,
			default: 0
		}
	},
	data(){
		return{
			tagClass: [ "order pending", "order hold", "order completed", "order failed"]
		}
		
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.order{
	height: 30px;
	padding:6px 10px;
	width: fit-content;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	border-radius: 3px;
}
.order.pending{
	background: #E7E8EA;
	color: #707780;
}
.order.hold{
	background: #FFECDD;
	color: #FFA057;
}
.order.completed{
	background: #DAF8EA;
	color: #44DC94;
}
.order.failed{
	background: #FDD9DB;
	color: #F5404C;
}
</style>