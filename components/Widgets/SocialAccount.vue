<template>
	<div class="social-account">
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M9.88979 1.20069C9.92647 1.20024 9.96321 1.20001 10 1.20001C10.0581 1.20001 10.116 1.20059 10.1738 1.20173C14.6116 1.28854 18.2549 4.67686 18.7435 9.00659C18.7808 9.33263 18.8 9.66407 18.8 10C18.8 14.8308 14.8872 18.765 10.0644 18.7998C10.0427 18.7999 10.021 18.8 9.99922 18.8C5.1469 18.8 1.19922 14.8523 1.19922 10C1.19922 5.18423 5.08769 1.25951 9.88979 1.20069ZM16.087 6.48001C15.4693 5.4161 14.5831 4.52994 13.5192 3.91218V6.48001H13.52L16.087 6.48001ZM13.52 16.0878C14.5839 15.4701 15.4701 14.5839 16.0878 13.52H13.52V16.0878ZM8.24 13.52H11.7592V16.8077C11.2195 16.9475 10.658 17.0325 10.0779 17.0395C10.052 17.0399 10.026 17.04 10 17.04C9.39192 17.04 8.80408 16.9538 8.24 16.8077V13.52ZM3.91216 13.52H6.47922V16.0874C5.41565 15.4697 4.52977 14.5837 3.91216 13.52ZM13.52 8.24002H16.8069C16.953 8.8041 17.0392 9.39194 17.0392 10C17.0392 10.6081 16.953 11.1959 16.8069 11.76H13.52L13.52 8.24002ZM8.24 8.24002H11.7592V11.76H8.24L8.24 8.24002ZM3.19232 8.24002H6.47922V11.76H3.19232C3.04624 11.1959 2.96 10.6081 2.96 10C2.96 9.39193 3.04624 8.8041 3.19232 8.24002ZM6.47922 3.91263C5.41565 4.53037 4.52977 5.41635 3.91216 6.48001L6.47922 6.48001V3.91263ZM9.92133 2.96049C9.94726 2.96018 9.97322 2.96002 9.99922 2.96002C10.6073 2.96002 11.1951 3.04626 11.7592 3.19234V6.48001H8.24V3.19233C8.77972 3.05256 9.34119 2.96757 9.92133 2.96049Z" fill="#707780"/>
		</svg>
		<p :class="{active: isActive}">
			{{link}}
		</p>
	</div>
</template>

<script>
export default {
	props:{
		socialType:{
			type: String,
			default: null
		},
		link:{
			type: String,
			default: null
		},
		isActive: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
@import "~assets/css/variable.scss";
.social-account{
	width: 100%;
	height: 50px;
	padding: 10px 15px;
	border: 1px solid #9399A0;
	box-sizing: border-box;
	border-radius: 3px;
	display: flex;
	align-items: center;
}
.social-account p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #9399A0;
	margin-left: 15px;
}
.social-account p.actuve{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #9399A0;
	margin-left: 15px;
}
</style>