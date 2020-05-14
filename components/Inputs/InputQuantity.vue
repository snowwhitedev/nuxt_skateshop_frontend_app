<template>
	<div class="quantity">
		<input type="number" min="1" max="9" step="1" v-model="quantity" name="quantity">
		<div class="quantity-nav">
			<div class="quantity-button quantity-down" @click="quantityDown">-</div>
			<div class="quantity-button quantity-up" @click="quantityUp">+</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			quantity: 1
		}
	},
	methods:{
		quantityUp(){
			if (this.quantity < 9) this.quantity++;
		},
		quantityDown(){
			if (this.quantity > 1) this.quantity--;
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";

.quantity {
	position: relative;
	background-color: #FAFAFB;
	border-radius: 3px;
	overflow: hidden;
	height: 50px;
	width: 97px;
}
.quantity input {
	width: 97px;
	height: 50px;
	line-height: 1.65;
	float: left;
	display: block;
	margin: 0;
	padding: 0 40px;
	border: 0;
	z-index: 9;
	position: relative;
	background-color: #FAFAFB;
	border-radius: 3px;
	overflow: visible;
}
input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-clip: border-box;
	margin: 0;
	outline: 0;
	vertical-align: top;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.quantity-nav {
    position: relative;
    height: 100%;
}
.quantity-button.quantity-down {
	position: absolute;
	bottom: -1px;
	height: 100%;
	left: 0;
	z-index: 9;
}
.quantity-button {
	cursor: pointer;
	width: 40px;
	text-align: center;
	line-height: 1.7;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	font-size: 14px;
	line-height: 19px;
	color: #000;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
}
.quantity-button.quantity-up {
	position: absolute;
	height: 100%;
	top: 0;
	right: 0;
	z-index: 9;
}
.quantity-button {
	cursor: pointer;
	width: 40px;
	text-align: center;
	line-height: 1.7;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	font-size: 14px;
	line-height: 19px;
	color: #000;
	font-family: "Nunito", sans-serif;
	font-style: normal;
	font-weight: 600;
}
</style>