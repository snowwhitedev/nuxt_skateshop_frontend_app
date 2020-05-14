<template>
	<div class="toggle-msg">
		<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.3334 0H2.66671C1.65562 0 0.833374 0.92 0.833374 2.05128V11.282C0.833374 12.4133 1.65562 13.3333 2.66671 13.3333H17.3334C18.3445 13.3333 19.1667 12.4133 19.1667 11.282V2.05128C19.1667 0.92 18.3445 0 17.3334 0ZM15.6036 2.05128L10 5.96923L4.39646 2.05128H15.6036ZM2.66671 11.282V3.26051L9.51421 8.04923C9.66271 8.15282 9.83137 8.20513 10 8.20513C10.1687 8.20513 10.3374 8.15282 10.4859 8.04923L17.3334 3.25949L17.3343 11.282H2.66671Z" 
				fill="#44DC94"/>
		</svg>
		<div class="badge" v-if="badge > 0">
			<span>{{badge}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		badge:{
			type: Number,
			default: 3
		}
	},
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";

.toggle-msg{
	position: relative;
	width:40px;
	height: 40px;
	min-width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background: #DAF8EA;
}
.toggle-msg:hover{
	cursor: pointer;
	background: #A1EDC9;
}
.toggle-msg:focus{
	background: #DAF8EA;
}
.toggle-msg:disabled{
	background: #DAF8EA;
}
.toggle-msg:active{
	background: #DAF8EA;
}

.badge{
    position: absolute;
    top: -6px;
    right: -6px;
    width: 16px;
    height: 16px;
    border-radius: 5px;
    background-color: $color-orange;
    color:$color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size-label;
    font-family: $font-family-primary;
    font-weight: $font-weight-bold;
}

</style>