<template>
	<div class="card-status">
		<p class="label">{{ label }}</p>
		<p class="content">{{ content }}</p>
		<div class="card-bottom">
			<svg v-if="intend==1" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.53033 3.28633C6.82322 3.57922 6.82322 4.0541 6.53033 4.34699C6.23744 4.63988 5.76256 4.63988 5.46967 4.34699L6.53033 3.28633ZM3.5 1.31666L2.96967 0.786331C3.26256 0.493438 3.73744 0.493438 4.03033 0.786331L3.5 1.31666ZM1.53033 4.34699C1.23744 4.63988 0.762563 4.63988 0.46967 4.34699C0.176777 4.0541 0.176777 3.57922 0.46967 3.28633L1.53033 4.34699ZM4.25 12.9C4.25 13.3142 3.91421 13.65 3.5 13.65C3.08579 13.65 2.75 13.3142 2.75 12.9L4.25 12.9ZM5.46967 4.34699L2.96967 1.84699L4.03033 0.786331L6.53033 3.28633L5.46967 4.34699ZM4.03033 1.84699L1.53033 4.34699L0.46967 3.28633L2.96967 0.786331L4.03033 1.84699ZM4.25 1.31666L4.25 12.9L2.75 12.9L2.75 1.31666L4.25 1.31666Z" fill="#44DC94"/>
			</svg>
			<svg v-else-if="intend==-1" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.46967 10.9303C0.176776 10.6374 0.176776 10.1626 0.46967 9.86966C0.762563 9.57677 1.23744 9.57677 1.53033 9.86966L0.46967 10.9303ZM3.5 12.9L4.03033 13.4303C3.73744 13.7232 3.26256 13.7232 2.96967 13.4303L3.5 12.9ZM5.46967 9.86966C5.76256 9.57677 6.23744 9.57677 6.53033 9.86966C6.82322 10.1626 6.82322 10.6374 6.53033 10.9303L5.46967 9.86966ZM2.75 1.31666C2.75 0.902445 3.08579 0.566658 3.5 0.566658C3.91421 0.566658 4.25 0.902445 4.25 1.31666L2.75 1.31666ZM1.53033 9.86966L4.03033 12.3697L2.96967 13.4303L0.46967 10.9303L1.53033 9.86966ZM2.96967 12.3697L5.46967 9.86966L6.53033 10.9303L4.03033 13.4303L2.96967 12.3697ZM2.75 12.9L2.75 1.31666L4.25 1.31666L4.25 12.9L2.75 12.9Z" fill="#F5404C"/>
			</svg>
			<p class="text">{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		label:{
			type: String,
			default: null
		},
		content:{
			type: String,
			default: null
		},
		intend:{
			type: Number,
			default: null  //1: increase, -1: decrease  0: no icon 
		},
		text:{
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.card-status{
	width: 100%;
	padding: 20px 0px 10px 15px;
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
}
p.label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #283441;
	text-transform: capitalize;
	text-align: left;
	margin: 0;
}
p.content{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color:  #357BFF;
	margin: 10px 0px;
}
.card-bottom{
	display: flex;
	align-items: center;
}
p.text{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #707780;
	margin-left: 10px;
}
@media (max-width: 1023px){
	p.content{
		font-size: 24px;
		line-height: 33px;
	}
}
</style>