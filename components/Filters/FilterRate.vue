<template>
	<div class="filter-rate">
		<btn-filter @onClick="showFilterOptions"/>
		<div style="position:relative;">
			<div class="filter-rate-panel" v-if="showFilterPanel">
				<div class="clear-all">
					<textlink v-if="hasCheckedFilter" btnClass="textlink blue" @onClick="clearFilterAll" >Clear all filters</textlink>
				</div>
				<ul>
					<li><textlink btnClass="textlink dark">Top rated designs</textlink></li>
					<li><textlink btnClass="textlink dark">New designs</textlink></li>
					<li><textlink btnClass="textlink dark">Rising talent</textlink></li>
					<li class="select-box"><dropdown-select label="Design category" caption="Categories" :items="designCategories" v-model="filteredDesigns" 
						@clearFilter="() => { this.filteredDesigns = new Array();}"/></li>
					<li class="select-box"><dropdown-select label="Design contest" caption="Contests" :items="designContests" v-model="filteredContests" 
						@clearFilter="() => { this.designContests = new Array(); }"/></li>
					<li class="select-box"><dropdown-select label="Rating time" caption="Deadline" :items="ratingTimes" v-model="filteredTimes" 
						@clearFilter=" () => {this.filteredTimes = new Array();} "/></li>
					<li><dropdown-color label="Design Color" caption="Choose colors" :items="colors" v-model="filteredColors"
						@clearFilter=" () => {this.filteredColors = new Array();} "></dropdown-color></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			showFilterPanel: false,
			designCategories:[
				{"value":"abstract", "text":"abstract"},
				{"value":"animals", "text":"animals"},
				{"value":"characters", "text":"characters"},
				{"value":"funny", "text":"funny"},
				{"value":"photography", "text":"photography"}
			],
			designContests:[
				{"value":'deckend', "text":"deckend"},
				{"value":'redbull', "text":"Redbull"},
				{"value":'arizona', "text":"Arizona"}
			],
			ratingTimes:[
				{"value": "today", "text":"Today"},
				{"value": "thisweek", "text":"This week"},
				{"value": "thismonth", "text":"This month"}
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
			filteredDesigns: [],
			filteredContests: [],
			filteredTimes: [],
			filteredColors: [],
		}
	},
	created(){
		this.filteredDesigns = _.fill(Array(this.designCategories.length), false);
		this.filteredContests = _.fill(Array(this.designContests.length), false);
		this.filteredTimes = _.fill(Array(this.ratingTimes.length), false);
		this.filteredColors = _.fill(Array(this.colors.length), false);
	},
	methods:{
		showFilterOptions(){
			this.showFilterPanel = !this.showFilterPanel;
		},
		clearFilterAll: function(){
			this.filteredDesigns = new Array();
			this.filteredContests = new Array();
			this.filteredTimes = new Array();
			this.filteredColors = new Array();
			_.fill( this.filteredDesigns, false);
			_.fill( this.filteredContests, false);
			_.fill( this.filteredTimes, false);
			_.fill( this.filteredColors, false);
		}
	},
	// watch:{
	// 	filteredDesigns:{
	// 		handler(){
	// 			console.log("filter watch");
	// 			// if(_.findIndex(this.filteredDesigns, function(it){ return it == true} ) == -1){
	// 			// 	this.hasCheckedFilter = false;
	// 			// 	return;
	// 			// } 
	// 			// this.hasCheckedFilter = true;
	// 		},
	// 		deep: true
	// 	}
	// },
	computed:{
		hasCheckedFilter(){
			if(_.findIndex(this.filteredDesigns, function(it){ return it == true} ) != -1){
				return true; 
			}

			if(_.findIndex(this.filteredContests, function(it){ return it == true} ) != -1){
				return true; 
			}

			if(_.findIndex(this.filteredTimes, function(it){ return it == true} ) != -1){
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
	position: absolute;
	top: 10px;
	padding: 20px 30px;
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	// border: 1px solid black;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
	width: 274px;
	z-index: 9999;
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

</style>