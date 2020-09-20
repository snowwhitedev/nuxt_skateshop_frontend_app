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
@import "~assets/css/dropdowninput.scss";
</style>