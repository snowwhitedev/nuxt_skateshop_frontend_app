<template>
	<div class="filter-shop">
		<div class="filterby">
			<p>Filter by</p>
		</div>
		<ul>
			<li><textlink btnClass="textlink dark">Best sellers</textlink></li>
			<li><textlink btnClass="textlink dark">New products</textlink></li>
			<li><textlink btnClass="textlink red">Sale items</textlink></li>
			<li><dropdown-price label="Price range"/></li>
			<li class="select-box" v-if="designerFilter">
				<dropdown-filter label="Designer or Skateshop" caption="Select designer or skateshop" 
					:items="designershops" v-model="filteredShops"/>
			</li>
			<li class="select-box">
				<dropdown-select label="Design category" caption="Categories" :items="designCategories" v-model="filteredShops"/>
			</li>
			<li>
				<dropdown-color label="Design color" caption="Choose colors" :items="colors" v-model="filteredColors"></dropdown-color>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props:{
		designerFilter: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return{
			designershops:[
				{"value": "aaaa", "text":"Aaaa"},
				{"value": "aaab", "text":"Aaab"},
				{"value": "aaac", "text":"Aaac"},
				{"value": "aaad", "text":"Aaad"},
				{"value": "aaae", "text":"Aaae"},
				{"value": "bbb", "text":"Bbbbbb"},
				{"value": "ccc", "text":"Ccccc"}
			],
			designCategories:[
				{"value":"abstract", "text":"abstract"},
				{"value":"animals", "text":"animals"},
				{"value":"characters", "text":"characters"},
				{"value":"funny", "text":"funny"},
				{"value":"photography", "text":"photography"}
			],
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
			filteredShops: [],
			filteredDesigns: [],
			filteredColors: []
		}
	},
	created(){
		this.filteredDesigns = _.fill(Array(this.designCategories.length), false);
		this.filteredShops = _.fill(Array(this.designershops.length), false);
		this.filteredColors = _.fill(Array(this.colors.length), false);
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.filter-shop{
	padding: 20px 30px;
	background: #FAFAFB;
	border: 1px solid #F3F4F4;
	// border: 1px solid black;
	border-radius: 5px;
	width: 304px;
}
.filterby{
	margin-bottom: 20px;
}
.filterby p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}

.filter-shop ul li{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
	padding-bottom: 15px;
	cursor:pointer;

	
}
.filter-shop ul li:last-child{
	padding-bottom: 0px;
}

</style>