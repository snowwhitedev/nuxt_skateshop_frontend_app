<template>
	<div class="custom_radio">
		<label >
			<input type="radio" :name="radioName" :value="value" :checked="checked" @click="$emit('onCheck')">
			<span class="check_text"></span>
			<p>
				<span class="main">{{ text }}</span>
				<span class="sub">{{ description }}</span>
			</p>
		</label>
	</div>
</template>

<script>
export default {
	props:{
		radioName:{
			type: String,
			default:null
		},
		value:{
			type: String,
			default: null
		},
		checked:{
			type: Boolean,
			default: false
		},
		text:{
			type: String,
			default: null
		},
		description:{
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.custom_radio{
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
}

.custom_radio label{
	display: flex;
	font-weight: normal;
	cursor: pointer;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	font-size: 16px;
}
.custom_radio label p{
	display: flex;
	flex-direction: column;
}
.custom_radio label p .main{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #283441;
}
.custom_radio label p .sub{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #707780;
}
.custom_radio label input[type=radio] {
    position: absolute;
    left: -99999px;
    opacity: 0;
    pointer-events: none;
}
.custom_radio label input[type=radio]+.check_text {
	width: 24px;
	height: 24px;
	border: 1px solid #283441;
	position: relative;
	-webkit-border-radius: 100%;
	border-radius: 100%;
	display: inline-block;
	margin: -2px 5px 0 0;
	-webkit-transition: all 0.3s ease-in-out 0s;
	-o-transition: all 0.3s ease-in-out 0s;
	transition: all 0.3s ease-in-out 0s;
	vertical-align: middle;
	margin-right: 30px;
}

.custom_radio label input[type=radio]+.check_text:before {
    width: 12px;
    height: 12px;
    top: 5px;
    left: 5px;
    background-color: #357BFF;
}
.custom_radio label input[type=radio]+.check_text:before {
    content: '';
    position: absolute;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}
.custom_radio label input[type=radio]:checked+.check_text {
	border-color: #357BFF;
	border: 1px solid #357BFF
}
.custom_radio label input[type=radio]:checked+.check_text:before {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}
</style>