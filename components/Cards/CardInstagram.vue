<template>
	<div class="instagram-card">
		<div class="instagram-remarks">
			<div class="instagram-remark">
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.33333 4.66748C11.193 4.66748 12.915 5.64398 14 7.09415C15.085 5.64398 16.807 4.66748 18.6667 4.66748C21.8832 4.66748 24.5 7.28431 24.5 10.5008C24.5 16.907 15.022 22.9048 14.6172 23.1568C14.4282 23.2746 14.2135 23.3341 14 23.3341C13.7865 23.3341 13.5718 23.2746 13.3828 23.1568C12.978 22.9048 3.5 16.907 3.5 10.5008C3.5 7.28431 6.11683 4.66748 9.33333 4.66748Z" fill="white"/>
				</svg>
				<p>12.9K</p>
			</div>
			<div class="instagram-remark">
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.0022 3.5C20.4352 3.5 25.6689 8.20983 25.6689 14C25.6689 16.0242 25.0377 17.9573 23.8337 19.642C26.8356 24.5 26.8356 24.5 26.8356 24.5C26.8356 24.5 19.1554 24.5 14.0022 24.5C7.56924 24.5 2.33557 19.7902 2.33557 14C2.33557 8.20983 7.56924 3.5 14.0022 3.5Z" fill="white"/>
				</svg>
				<p>143</p>
			</div>	
		</div>
		<div class="instagram-content">
			<p class="instagram-text">
				Are you a creative? Do you love art? And skateboarding? Share us your unique creations for a change to get featured! 
			</p>
			<p class="instagram-text-mobile">
				Are you a creative? Do you love art? And skateboarding? Share us your unique creations for a change... 
			</p>
			<p class="instagram-tags">
				#ove #art #skateboarding
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "card-instagram"

}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.instagram-card{
	width: 288px;
	min-width: 288px;
	height: 288px;
	background: #283441;
	opacity: 0.8;
	padding: 40px 30px;
}
.instagram-remarks{
	display: flex;
	justify-content: center;
	margin-top: 40px;
}
.instagram-remark{
	display: flex;
	align-items: center;
}
.instagram-remark:first-child{
	margin-right: 30px;
}
.instagram-remark p{
	margin-left: 5px;
}
p{
	font-family: $font-family-primary;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #FFFFFF;
}
.instagram-content{
	margin-top: 30px;
}
.instagram-text{
	display: block;
}
.instagram-text-mobile{
	display: none;
}
.instagram-tags{
	display: block;
}
@media (max-width: 767px){
	.instagram-card{
		width: 188px;
		min-width: 188px;
		height: 188px;
		padding: 20px 10px;
	}
	p{
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		text-align: center;
		letter-spacing: 0.03em;
	}
	.instagram-content{
		margin-top: 15px;
	}
	.instagram-tags{
		display: none;
	}
	.instagram-text{
		display: none;
	}
	.instagram-text-mobile{
		display: block;
	}
}
</style>