<template>
	<div class="custom_checkbox">
		<label :class="labelClass">
				<input type="checkbox"  :value="value" v-model="checkedOption" >
				<span class="check_text"></span>
				{{label}}
		</label>
	</div>
</template>

<script>
export default {
	name:'checkbox',
	props:{
		label:{
				type: String,
				default: 'label',
		},
		value:{
				type: String,
				default: ''
		}
	},
	data(){
		return{
				checkedOption: false,
				labelClass: ''
		}
	},
	watch:{
		checkedOption:{
				handler(){
					// this.labelClass = (this.checkedOption)? "checked": "";
				}
		}
	}
}
</script>

<style lang="scss" scoped>
.custom_checkbox label{
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	font-family: "Nunito", sans-serif;
	font-style: normal;
	font-weight: 300;
	letter-spacing: 0.01em;

	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	cursor: pointer;

	margin-bottom: 0;
}

.custom_checkbox label input[type=checkbox]{
	position: absolute;
	left: -99999px;
	opacity: 0;
	pointer-events: none;
}
.custom_checkbox label input[type=checkbox]+.check_text {
	width: 20px;
	height: 20px;
	min-width: 20px;
	min-height: 20px;
	position: relative;
	display: inline-block;
	margin: 0 10px 0 0;
	vertical-align: middle;
	border: 1px solid #283441;
	border-radius: 3px;
}

.custom_checkbox label input[type=checkbox]+.check_text:before {
	width: 6px;
	height: 12px;
	top: 1px;
	left: 6px;
	border-width: 1px;
}
.custom_checkbox label input[type=checkbox]+.check_text:before {
	content: '';
	position: absolute;
	background-color: transparent;
	border-style: solid;
	border-color: transparent;
	border-right-color: white;
	border-bottom-color: white;
	opacity: 0;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}

.custom_checkbox label.link_2 {
	font-weight: normal;
	letter-spacing: 0.02em;
}

.custom_checkbox label input[type=checkbox]:checked+.check_text {
	border: 1px solid #2E9BFF;
	background-color: #2E9BFF;
}
.custom_checkbox label input[type=checkbox]:checked+.check_text:before {
	opacity: 1;
}
label.checked{
	font-weight: bold;
}
</style>