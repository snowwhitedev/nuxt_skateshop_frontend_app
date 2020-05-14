<template>
	<div class="custom_checkbox custom_color_checkbox">
		<label :class="labelClass">
			<input type="checkbox"  :value="val" @change="onCheck" :checked="value" :disabled="checkDisabled">
			<span class="check_text" :style="'background-color:'+ val"></span>
			{{label}}
		</label>
	</div>
</template>

<script>
export default {
	props:{
		label:{
			type: String,
			default: 'label',
		},
		val:{
			type: String,
			default: ''
		},
		value:{
			type: Boolean,
			default: false
		},
		checkDisabled:{
			type: Boolean,
			default: false
		}
	},
	data(){
		return{
			checkedOption: false,
			labelClass: ''
		}
	},
	methods:{
		onCheck: function(){
			this.checkedOption = !this.checkedOption;
			this.labelClass = (!this.value)? "checked": "";
			this.$emit('input', !this.value);
		}
	},
	watch:{
		value:{
			handler(){
					this.labelClass = (this.value)? "checked": "";
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
	text-transform: capitalize;
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
	position: relative;
	display: inline-block;
	margin: 0 10px 0 0;
	vertical-align: middle;
	border: 1px solid #9399A0;
	border-color: #2E9BFF;
	border-radius: 3px;
}
.custom_checkbox label.link_2 {
	font-weight: normal;
	letter-spacing: 0.02em;
}
.custom_checkbox label input[type=checkbox]:checked+.check_text {
	border: 1px solid #357BFF;
	background-color: transparent;
}
label.checked{
	font-weight: bold;
}
.custom_checkbox.custom_color_checkbox {
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	width: 100%;
}
.custom_checkbox.custom_color_checkbox label {
	width: 100%;
	margin-right: 0;
}
.custom_checkbox.custom_color_checkbox label input[type=checkbox]+.check_text {
	width: 16px;
	height: 16px;
	border-color: transparent;
	border: 1px solid transparent;
}
.custom_checkbox.custom_color_checkbox label input[type=checkbox]:checked+.check_text {
	border: 1px solid #fff;
}
.custom_checkbox.custom_color_checkbox label input[type=checkbox]:checked+.check_text {
	border-color: #357BFF;
}
.custom_checkbox.custom_color_checkbox label input[type=checkbox]:checked+.check_text:after {
	content: '';
	position: absolute;
	position: absolute;
	top: -3px;
	left: -3px;
	right: -3px;
	bottom: -3px;
	background-color: transparent;
	border: 1px solid #2e9bff;
	border-radius: 5px;
}
</style>