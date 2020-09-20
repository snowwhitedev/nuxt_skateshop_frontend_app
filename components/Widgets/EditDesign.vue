<template>
	<div class="submit-design">
		<p class="form-title">Edit design details</p>
		<div class="design-description">
			<div class="desc-item">
				<p class="item-name">Submitted to contest</p>
				<p class="sub-text contest">Arizona - Pattern It!</p>
			</div>
			<div class="desc-item">
				<p class="item-name">Published on</p>
				<p class="sub-text">23/07/2019</p>
			</div>
		</div>
		<div class="form-input">
			<label>Title<small>(Pro tip: make it short, but catchy!)</small></label>
			<input type="text" class="input-lg" value="Through the forrest" placeholder="The title of your design"/>
		</div>
		<div class="form-input">
			<label>Description</label>
			<textarea placeholder="A short description of your design" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sum dolor sit.</textarea>
		</div>
		<div class="form-input">
			<label>Tags&nbsp;<small>(max. 10, seperated by commas)</small></label>
			<tag-input />
		</div>
		<div class="form-input">
			<label>Category</label>
			<select-box placeholder="Please select a category for your design" :items="categories"/>
		</div>
		<div class="form-input">
			<label>Colors&nbsp;<small>(Select max.3 colors that match your design)</small></label>
			<div class="color-panel">
				<div v-for="color in colors" :key="color.value" class="color-item">
					<checkbox-color :label="color.text" :val="color.value"/>
				</div>
			</div>
		</div>
		<div class="form-input">
			<label>Select your design preview</label>
			<image-preview />
		</div>
		<div class="form-input">
			<label>Submission terms</label>
			<p class="submission-terms">
				By clicking “Submit your design” you are confirming that you read, understand and agree to our Terms and Conditions and Privacy Policy.
			</p>
			<div class="form-actions">
				<btn-cancel class="form-action" @onClick="$emit('onCancel')"/>
				<btn-text btnClass="btn primary lg" @onClick="$emit('onSubmit')">Save information</btn-text>
			</div>
		</div>
	</div>
</template>

<script>
import ImagePreview from '@/components/Widgets/ImagePreview.vue';
export default {
	name: "submit-design",
	components:{
		ImagePreview
	},
	data(){
		return{
			categories : ["category1", "category2", "category3"],
			colors:[
                {"value": "#000000", "text": "black"},
                {"value": "#FFFFFF", "text": "white"},
                {"value": "#808080", "text": "grey"},
                {"value": "#ffff00", "text": "yellow"},
                {"value": "#008000", "text": "green"},
                {"value": "#ff0000", "text": "red"},
                {"value": "#ffc0cb", "text": "pink"},
                {"value": "#800080", "text": "purple"}
            ]
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.submit-design{
	padding:30px;
}
.form-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	padding-bottom: 20px;
	border-bottom: 1px solid #E7E8EA;
}
.form-input{
	margin-top: 20px;
}
.form-input label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	margin-top: 10px;
}
.form-input label small{
	font-size: 80%;
}
.color-panel{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
	margin-top: 20px;
}
.color-item{
    width: 25%;
    margin-bottom: 19px;
}
p.submission-terms{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #283441;
}
.form-actions{
	margin-top: 20px;
	display: flex;
}
.form-action{
	margin-right:20px;
}
.design-description{
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
.desc-item p.item-name{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}
.desc-item p.sub-text{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #283441;
}
.desc-item p.sub-text.contest{
	color: #F879AD;
}

@media (max-width: 1023px){
	.submit-design{
		padding: 20px;
	}
}
</style>