<template>
    <div class="dropdown-select">
        <div class="trigger-container">
            <div class="dropdown-select-trigger" >
                <span :class="dropdownLabel" :style="`font-size:${fontSize};`" @click="onShowOptions">{{label}}</span>
            </div>
        </div>
        <transition name="slide">
            <div class="dropdown-options" v-if="showOptions">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
	name:'DropdownPanel',
	props:{
		label:{
			type: String,
			default:'label'
		},
		fontSize:{
			type: String,
			default: '14px'
		}
	},
	data(){
		return{
			dropdownLabel: "dropdown-label",
			showOptions: false,
		}
	},
	methods:{
		onShowOptions(){
			this.showOptions = !this.showOptions;
			this.dropdownLabel = (this.showOptions)? "dropdown-label open":"dropdown-label";
		}
	},
	computed:{
	
	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.dropdown-select{
    position: relative;
}
.trigger-container{
    margin-bottom: 0px;
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
    font-weight: 600;
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
.options-caption{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #707780;
    margin-bottom: 10px;
}

.dropdown-options{
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
   max-height: 100vh;
   overflow: hidden;
//    margin-top:10px;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0px;
//    margin-top: 10px;
}
</style>