<template>
	<div class="account-content-container">
		<nuxt-link to="/account/shop/products"><btn-textlink btnClass="btn textlink thin" leftIcon='arrow'>Back to my products</btn-textlink></nuxt-link>
		<div class="content-header">
			<p class="content-brand">
				Skate or Die 
			</p>
			<div class="horizontal-line"></div>
		</div>
		<div class="content-body">
			<div class="form-row">
				<div class="form-input">
					<label>Product title&nbsp;<small>(Pro tip: make it short, but catchy!)</small></label>
					<input type="text" class="input-md" value="Skate or Die">
				</div>
				<div class="form-input">
					<label>SKU</label>
					<input type="text" class="input-md" value="201907010012" readonly>
				</div>
			</div>
			<div class="form-row">
				<div class="form-input">
					<label>Description</label>
					<textarea class="input-field">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sum dolor sit amet.</textarea>
				</div>
				<div class="form-input">
					<label>Category</label>
					<select-box :items="categories" placeholder="Select your country" class="input-field"/>
				</div>
			</div>
			<div class="form-row">
				<div class="form-input">
					<label>Tags</label>
					<tag-input class="input-field"/>
				</div>
				<div class="form-input">
					<label>Colors&nbsp;<small>(Select max.3 colors that match your design)</small></label>
					<div class="color-panel">
						<div v-for="color in colors" :key="color.value" class="color-item">
							<checkbox-color :label="color.text" :val="color.value"/>
						</div>
					</div>
				</div>
			</div>
			<div class="horizontal-line sep"></div>
			<div class="form-row">
				<div class="form-input">
					<label>Price</label>
					<input type="text" class="input-md" value="€ 59,00" readonly>
				</div>
				<div class="form-input">
					<label>Discount price&nbsp;<small>(Option available 1 month after publish date)</small></label>
					<select-box :items="dicountPrices" placeholder="Select your discount price" class="input-field"/>
				</div>
			</div>
			<div class="horizontal-line sep"></div>
			<div class="form-row">
				<div class="full-width">
					<p class="widget-label">Product images&nbsp;<small>(Max. 7 images. Drag to change order)</small></p>
					<edit-image />
				</div>
			</div>
			<div class="horizontal-line"></div>
			<div class="form-action">
				<btn-text btnClass="btn primary lg">Save information</btn-text>
			</div>
		</div>
	</div>
</template>

<script>
import EditImage from '@/components/Widgets/EditImage.vue';
export default {
	layout:'layout_account',
	components:{
		EditImage
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
			dicountPrices:[
                {"value": "49", "text": "€ 49,00 (recommended)"},
                {"value": "51", "text": "€ 51,00 (recommended)"},
                {"value": "59", "text": "€ 59,00 (recommended)"},
			],
			
			files: []
		}
	},
	methods:{
		handleFileInput(e) {
			let files = e.target.files;
			files = e.target.files
			if(!files) return;
			([...files]).forEach(f => {
				this.files.push(f);
			});
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.account-content-container{
	padding-top: 40px;
}
p.content-brand{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
}
.content-header{
	margin-top: 20px;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.horizontal-line.sep{
	margin-top:30px;
	margin-bottom: 30px;
}
.form-row{
	display: flex;
	width: 100%;
	margin-top: 20px;
}
.form-input{
	width: 50%;
	padding-right: 10px;
}
.form-input .input-field{
	margin-top: 10px;
}

.form-input:last-child{
	padding-left: 10px;
	padding-right: 0;
}
p.widget-label, 
.form-input label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}
p.widget-label{
	margin-bottom: 20px;
}
.form-input input{
	margin-top: 10px;
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
.full-width{
	width: 100%;
}
.form-action{
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}
</style>