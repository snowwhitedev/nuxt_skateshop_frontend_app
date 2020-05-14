<template>
    <div class="dropdown-input" v-click-outside="closePanel">
        <div class="dropdown-input-trigger" >
            <label class="label">{{label}}:</label>
            <span :class="selectTextClass" @click="onShowOptions">{{selItem.text}}</span>
        </div>
        <div style="position:relative;">
            <div class="dropdown-options" v-if="showOptions">
                <ul >
                    <li v-for="item in items" :key="item.value"  @click="selectOption(item)">
                        <span v-if="selItem.value==item.value" class="active">{{item.text}}</span>
                        <span v-else>{{item.text}}</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside';
export default {
    props:{
        label:{
            type: String,
            default:'label'
        },
        items:{
            type: Array,
            default: []
        }
    },
    directives:{
		ClickOutside
	},
    data(){
        return{
            selectTextClass: "select-text",
            showOptions: false,
            selItem:this.items[0]
        }
    },
    methods:{
        onShowOptions(){
            this.showOptions = !this.showOptions;
            this.selectTextClass = (this.showOptions)? "select-text open":"select-text";
        },
        selectOption(item){
            this.showOptions = false;
            this.selectTextClass = "select-text";
            this.selItem = item;
        },
        closePanel: function(){
            if(this.showOptions) this.showOptions = false;
        }
    },
    computed:{
    
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.dropdown-input{
    position: relative;
}
.dropdown-input-trigger{
    display:flex;
    align-items: center;
    position: relative;
    height: 26px;
}

.label{
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
    // text-transform: capitalize;
}

.select-text{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #2D3748;
    cursor: pointer;
    padding-right: 24px;
    text-transform: capitalize;
}
.select-text::after{
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
.select-text.open::after{
    margin-top: 3px;
    -webkit-transform: rotate(-135deg) translateY(-50%);
    -ms-transform: rotate(-135deg) translateY(-50%);
    transform: rotate(-135deg) translateY(-50%);
}
.dropdown-options{
    position: absolute;
    width: 167px;
    background: #FFFFFF;
    border: 1px solid #F3F4F4;
    box-sizing: border-box;
    box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
    border-radius: 5px;
    padding:20px 30px;
    top:10px;
    z-index: 99;
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
.dropdown-options ul li:last-child{
    margin-bottom: 0px;
}
.dropdown-options ul li span.active{
    font-weight: bold;
}
</style>