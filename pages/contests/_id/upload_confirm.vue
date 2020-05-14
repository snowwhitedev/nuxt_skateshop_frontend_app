<template>
	<div class="contest-upload">
		<p class="header-text">
			Awesome, we received your design!
		</p>
		<figure class="success-image">
			<img src="~assets/images/backgrounds/upload_success.jpg" />
			<figcaption>
				<p>Our team will now review your design before it’s being published. We just want to make sure everything is working fine. This shouldn’t take long!</p>
				<br />
				<p>While waiting, you can rate some of the other designs and make some friends!</p>
				
			</figcaption>
		</figure>
		<div class="view-action">
			<nuxt-link to="/contests/"><btn-text btnClass="btn primary lg">View other designs</btn-text></nuxt-link>
		</div>
	</div>
</template>

<script>
import UploadImage from '@/components/Widgets/UploadImage.vue';
import SubmitDesign from '@/components/Widgets/SubmitDesign.vue';
export default {
	components:{
		UploadImage,
		SubmitDesign
	},
	methods:{
		cancelUpload: function(){
			this.$router.go(-1);
		},
		uploadDesign: function(){
			this.$router.push(`/contests/1/upload_confirm`);
		}
	}
	
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.contest-upload{
	max-width: 1060px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.header-text{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	text-align: center;
	color: #283441;
	margin-bottom: 20px;
}
.success-image{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.success-image figcaption{
	width: 100%;
	max-width: 532px;
	text-align: center;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	text-align: center;
	letter-spacing: 0.01em;
	color: #283441;
	margin-top: 10px;
	margin-bottom: 10px;
}
.view-action{
	margin-bottom: 60px;
}
</style>