<template>
	<div class="wrapper">
		<div class="more-loading">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.234 4.23392C5.216 3.24725 6.552 2.66659 8 2.66659C10.9407 2.66659 13.3333 5.05925 13.3333 7.99992H14.6667C14.6667 4.32325 11.676 1.33325 8 1.33325C6.19 1.33325 4.51933 2.05925 3.292 3.29192L2 1.99992V5.99992H6L4.234 4.23392Z" fill="#DBDDDF"/>
				<path d="M11.766 11.766C10.784 12.7527 9.44868 13.3333 8.00001 13.3333C5.05934 13.3333 2.66668 10.9407 2.66668 8H1.33334C1.33334 11.6767 4.32401 14.6667 8.00001 14.6667C9.81068 14.6667 11.4807 13.9407 12.708 12.708L14 14V10H10L11.766 11.766Z" fill="#DBDDDF"/>
			</svg>
			<p>
				&nbsp;&nbsp;Loading...
			</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.more-loading{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
}
.more-loading p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #DBDDDF;
}
</style>