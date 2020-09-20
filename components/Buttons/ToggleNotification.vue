<template>
	<div class="toggle-msg" @click="$emit('onClick')">
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.84204 17.4165C8.47729 18.5073 9.64696 19.2498 11 19.2498C12.353 19.2498 13.5226 18.5073 14.1579 17.4165H7.84204Z"
                fill="#EE91FB"/>
            <path d="M19.25 16.5H2.75V14.0058L3.377 13.7977C4.64658 13.3733 5.5 12.1898 5.5 10.8515V8.25C5.5 5.21675 7.96675 2.75 11 2.75C14.0332 2.75 16.5 5.21675 16.5 8.25V10.8515C16.5 12.1898 17.3534 13.3733 18.623 13.7977L19.25 14.0058V16.5ZM5.53208 14.6667H16.4688C15.3496 13.7482 14.6667 12.3622 14.6667 10.8515V8.25C14.6667 6.22783 13.0222 4.58333 11 4.58333C8.97783 4.58333 7.33333 6.22783 7.33333 8.25V10.8515C7.33333 12.3622 6.65042 13.7482 5.53208 14.6667Z" 
                fill="#EE91FB"/>
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
	background: #FCE9FE;
}
.toggle-msg:hover{
	cursor: pointer;
	background: #F6C8FD;
}
.toggle-msg:focus{
	background: #FCE9FE;
}
.toggle-msg:disabled{
	background: #FCE9FE;
}
.toggle-msg:active{
	background: #FCE9FE;
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