<template>
	<div class="filter-rate" v-click-outside="closeFilterPanel">
		<btn-filter @onClick="showFilterOptions"/>
		<div class="filter-panel">
			<div class="filter-rate-panel" v-if="showFilterPanel">
				<div class="clear-all"  v-show="hasCheckedFilter">
					<textlink btnClass="textlink blue" @onClick="clearFilterAll" >Clear all filters</textlink>
				</div>
                <ul>
                    <li><textlink btnClass="textlink dark">Best sellers</textlink></li>
                    <li><textlink btnClass="textlink dark">New products</textlink></li>
                    <li><textlink btnClass="textlink red">Sale items</textlink></li>
                    <li><dropdown-price label="Price range"/></li>
                    <li class="select-box" v-if="designerFilter">
                        <dropdown-filter label="Designer or Skateshop" caption="Select designer or skateshop" 
                            :items="designershops" v-model="filteredShops"
                            @clearFilter="() => { this.filteredShops = new Array();}" />
                    </li>
                    <li class="select-box">
                        <dropdown-select label="Design category" caption="Categories" :items="designCategories" v-model="filteredDesigns"
                            @clearFilter="() => { this.filteredDesigns = new Array();}" />
                    </li>
                    <li>
                        <dropdown-color label="Design color" caption="Choose colors" :items="colors" v-model="filteredColors" 
                            @clearFilter="() => { this.filteredColors = new Array();}" />
                    </li>
                </ul>
			</div>
			<div class="mobile-backdrop" @click="showFilterPanel = false"></div>
		</div>
	</div>
</template>
<script>
import ClickOutside from 'vue-click-outside';
export default {
    name: "filter-shop-mobile",
	directives:{
		ClickOutside
    },
    props:{
		designerFilter: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return{
			showFilterPanel: false,
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
		showFilterOptions(){
            console.log("show");
			this.showFilterPanel = !this.showFilterPanel;
		},
		clearFilterAll: function(){
			this.filteredDesigns = new Array();
			this.filteredShops = new Array();
			this.filteredColors = new Array();
			_.fill( this.filteredDesigns, false);
			_.fill( this.filteredShops, false);
			_.fill( this.filteredColors, false);
        },
        closeFilterPanel: function(){
           this.showFilterPanel = false;
        }
	},

	computed:{
		hasCheckedFilter(){
			if(_.findIndex(this.filteredDesigns, function(it){ return it == true} ) != -1){
				return true; 
			}

			if(_.findIndex(this.filteredShops, function(it){ return it == true} ) != -1){
				return true; 
			}

			if(_.findIndex(this.filteredColors, function(it){ return it == true} ) != -1){
				return true; 
			}
			return false;
		}
	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.filter-rate-panel{
	padding: 20px 30px;
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
	width: 274px;
}
.filter-panel{
	position: absolute;
	top: 50px;
	z-index: 999;
}
.clear-all{
	margin-bottom: 10px;
	width: 100%;
	display: flex;
	justify-content: flex-end
}
.clear-all a{
	text-align:right;
}
.filter-rate-panel ul li{
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
.filter-rate-panel ul li:last-child{
	padding-bottom: 0px;
}
@media (max-width: 767px){
	.filter-panel {
		width: 100vw;
		left: 0px;
		top: 20px;
		display: flex;
	}
	.mobile-backdrop {
		width: calc(100vw - 274px);
		background-color: rgba(0, 0, 0, 0.2);
	}
}
</style>