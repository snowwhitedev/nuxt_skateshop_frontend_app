<template>
	<div class="submit-design">
		<p class="form-title">Submit your design</p>
		<div class="form-input">
			<p>Title<small>(Pro tip: make it short, but catchy!)</small></p>
			<input type="text" class="input-lg" placeholder="The title of your design"/>
		</div>
		<div class="form-input">
			<p>Description</p>
			<textarea placeholder="A short description of your design"></textarea>
		</div>
		<div class="form-input">
			<p>Tags&nbsp;<small>(max. 10, seperated by commas)</small></p>
			<tag-input />
		</div>
		<div class="form-input">
			<p>Category</p>
			<select-box placeholder="Please select a category for your design" :items="categories"/>
		</div>
		<div class="form-input">
			<p>Colors&nbsp;<small>(Select max.3 colors that match your design)</small></p>
			<div class="color-panel">
				<div v-for="(color, idx) in colors" :key="idx" class="color-item">
					<checkbox-color :label="color.text" :val="color.value" v-model="colorChecked[idx]" :checkDisabled="colorDisabled[idx]"/>
				</div>
			</div>
		</div>
		<div class="form-input">
			<p>Select your design preview</p>
			<image-preview />
		</div>
		<div class="form-input">
			<label>Submission terms</label>
			<p class="submission-terms">
				By clicking “Submit your design” you are confirming that you read, understand and agree to our Terms and Conditions and Privacy Policy.
			</p>
			<div class="form-actions">
				<btn-cancel class="form-action" @onClick="$emit('onCancel')"/>
				<btn-append @onClick="$emit('onSubmit')">Submit your design</btn-append>
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
			],
			colorChecked:[],
			colorDisabled:[]
		}
	},
	created(){
		this.colorChecked = _.fill(Array(this.colors.length), false);
		this.colorDisabled = _.fill(Array(this.colors.length), false);
	},
	methods:{
		
	},
	watch:{
		colorChecked:{
			deep: true,
			handler(){
				console.log("[colorchecked]", this.colorChecked);
				const checkedColors = _.filter(this.colorChecked, function(o) {if (o) return o; })
				// const checkedColors = _.keys(_.pickBy(this.colorChecked, true))
				// console.log("[colorchecked]", checkedColors);
				this.colorDisabled = _.fill(Array(this.colors.length), false);
				if(checkedColors.length === 3) {
					this.colorDisabled = _.fill(Array(this.colors.length), false);
					for(let ii = 0; ii < this.colors.length; ii++){
						if (!this.colorChecked[ii]){
							this.colorDisabled[ii] = true;
						}
					}
				} 
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.submit-design{
	padding:30px;
	background: #FAFAFB;
	border-radius: 5px;
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
.form-input p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	margin-bottom: 10px;
}
.form-input p small{
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
	margin-top: 10px;
	display: flex;
}
.form-action{
	margin-right:20px;
}
</style>