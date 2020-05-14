<template>
	<div class="dropdown-select">
		<div class="trigger-container">
			<div class="dropdown-select-trigger" >
				<span :class="dropdownLabel" @click="onShowOptions">{{label}}</span>
				<textlink v-if="hasCheckedItem==true" btnClass="textlink blue" @onClick="clearAll">Clear</textlink>
			</div>
		</div>
		<transition name="slide">
			<div class="dropdown-options" v-if="showOptions">
				<div class="options-caption">{{caption}}</div>
				<input-search class="input-normal" style="margin-bottom:15px;"/>
				<perfect-scrollbar>
					<div class="filter-panel" >
						<ul >
							<li v-for="(item, idx) in items" :key="item.value">
								<checkbox :label="item.text" :val="item.value" v-model="checkedItem[idx]"/>
							</li>
						</ul>
					</div>
				</perfect-scrollbar>
			</div>
		</transition>
	</div>
</template>
<script>
// import PerfectScrollbar from 'vue2-perfect-scrollbar';
export default {
	name:'DropdownSelect',
	components: {
		// PerfectScrollbar
	},
	props:{
		label:{
			type: String,
			default:'label'
		},
		caption:{
			type: String,
			default: 'caption'
		},
		items:{
			type: Array,
			default: []
		}
	},
	data(){
		return{
			dropdownLabel: "dropdown-label",
			showOptions: false,
			scrollSettings: {
				maxScrollbarLength: 60
			},
			checkedItem: [],
			hasCheckedItem: false
		}
	},
	methods:{
		onShowOptions(){
			this.showOptions = !this.showOptions;
			this.dropdownLabel = (this.showOptions)? "dropdown-label open":"dropdown-label";
		},
		clearAll: function(){
			_.fill(this.checkedItem, false);
			this.hasCheckedItem = false;
		}
	},
	created(){
		this.checkedItem= _.fill(Array(this.items.length), false);

	},
	watch:{
		checkedItem:{
			handler(){
				if(_.findIndex(this.checkedItem, function(it){ return it == true} ) === -1){
					this.hasCheckedItem = false; 
				}else{
					this.hasCheckedItem = true;
				}
			}
		}
	}

}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
// @import "";
.ps {
height: 180px;
}
.dropdown-select{
	position: relative;
}
.trigger-container{
	padding-bottom: 10px;
	// border-bottom: 1px solid black;
	border-bottom: 1px solid #F3F4F4;
}
.dropdown-select-trigger{
	display:flex;
	align-items: center;
	position: relative;
	height: 26px;
	padding-right: 28px;
	justify-content: space-between;
}

.dropdown-label{
	padding:0;
	margin: 0;
	margin-right: 5px;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	text-align: right;
	letter-spacing: 0.01em;
	color: #2D3748;
	cursor:pointer;
}

.dropdown-label::after{
	position: absolute;
	display: block;
	content: '';
	width: 8px;
	height: 8px;
	top: 50%;
	right: 0;
	margin-top: -2px;
	border-bottom: 1px solid #2D3748;
	border-right: 1px solid #2D3748;
	-webkit-transform: rotate(45deg) translateY(-50%);
	-ms-transform: rotate(45deg) translateY(-50%);
	transform: rotate(45deg) translateY(-50%);
	-webkit-transition: all .4s ease-in-out;
	-o-transition: all .4s ease-in-out;
	transition: all .4s ease-in-out;
	-webkit-transform-origin: 50% 0;
	-ms-transform-origin: 50% 0;
	transform-origin: 50% 0;
}
.dropdown-label.open::after{
	margin-top: 3px;
	-webkit-transform: rotate(-135deg) translateY(-50%);
	-ms-transform: rotate(-135deg) translateY(-50%);
	transform: rotate(-135deg) translateY(-50%);
}
.filter-panel{
	padding-top: 10px;
	height: 180px;
}


.options-caption{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 14px;
	letter-spacing: 0.03em;
	/* Graytones/Gray 60 */
	color: #707780;
	margin-bottom: 10px;
}
.dropdown-options ul li{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
	text-transform: capitalize;
	padding:0;
	margin-bottom: 15px;
	cursor: pointer;
}
.dropdown-options ul:last-child{
	margin-bottom: 0px;
}
.dropdown-options ul li.active{
	font-weight: bold;
}

.dropdown-options{
	// position: absolute;
	width: 100%;
	margin-top:10px;
	// z-index: 9;
}


.slide-enter-active {
-moz-transition-duration: 0.3s;
-webkit-transition-duration: 0.3s;
-o-transition-duration: 0.3s;
transition-duration: 0.3s;
}

.slide-leave-active {
-moz-transition-duration: 0.3s;
-webkit-transition-duration: 0.3s;
-o-transition-duration: 0.3s;
transition-duration: 0.3s;
}

.slide-enter-to, .slide-leave {
max-height: 300px;
overflow: hidden;
margin-top:10px;
}

.slide-enter, .slide-leave-to {
overflow: hidden;
max-height: 0;
margin-top:0px;
}
</style>