<template>
	<div class="contest-upload">
		<form enctype="multipart/form-data">
			<div class="contest-form-container">
				<div class="left-column">
					<upload-image />
				</div>
				<div class="right-column">
					<submit-design @onCancel="cancelUpload" @onSubmit="uploadDesign"/>
				</div>
			</div>
		</form>
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
.contest-upload{
	max-width: 1060px;
	margin: 20px auto 60px;
}
.contest-form-container{
	display: grid;
	grid-template-columns: 50% 50%;
}
.left-column{
	padding-right: 10px;
}
.right-column{
	padding-left: 10px;

}
</style>