<template>
	<div class="image-preview">
		<div class="image-default">
			<label class="container-label">Default</label>
			<div class="image-container">
				<img src="~assets/images/icons/icn-image.jpg" />
			</div>
		</div>
		<div class="image-hold">
			<label class="container-label">Preview</label>
			<div class="image-container">
				<img src="~assets/images/icons/icn-image.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "image-preview"
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.image-preview{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}
.image-default{
	width: 50%;
	padding-right: 10px;
}
.image-default label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #000000;
}
.image-container{
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	max-width: 220px;
	height: 328px;
}
.image-hold{
	width: 50%;
	padding-left: 10px;
}
.image-hold label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #000000;
}
</style>
