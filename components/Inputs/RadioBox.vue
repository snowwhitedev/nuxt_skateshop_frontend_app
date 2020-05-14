<template>
	<div class="custom_radio">
        <label v-for="item in items" :key="item.value">
            <input type="radio" name="radio" :value="item.value" :checked="item.checked">
			<span class="check_text"></span>
			<p>{{item.label}}</p>
        </label>
		<!-- <label>
			<input type="radio" name="radio" id="male" value="male" checked="">
			<span class="check_text"></span>
			<p>Male</p>
		</label>
		<label>
			<input type="radio" name="radio" id="female" value="female">
			<span class="check_text"></span>
			<p>Female</p>
		</label>
		<label>
			<input type="radio" name="radio" id="secret" value="secret">
			<span class="check_text"></span>
			<p>It’s a secret</p>
		</label> -->
	</div>
</template>

<script>
export default {
    name: 'radio-box',
    props:{
        radioClass:{
            type: String,
            default: 'custom_radio'
        },
        items:{
            type: Array,
            default: null // [ {value:'val1', label:'label1', checked:true}, {value:'val2', label:'label2', checked: false} ]
        }
    }
    
}
</script>

<style lang="scss" scoped>
.custom_radio{
	display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.custom_radio.column{
    flex-direction: column;
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
	margin-right: 20px;
	font-size: 16px;
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
    margin-right: 10px;
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