<template>
	<div class="help-topic-nav">
        <div class="dropdown-input" v-click-outside="closePanel">
			<div class="dropdown-input-trigger" >
				<span :class="selectTextClass" @click="onShowOptions">{{topics[activeTopicIdx].title}}</span>
			</div>
			<div style="position:relative;">
				<div class="dropdown-options" v-if="showOptions">
					<ul class="help-topics">
                        <li v-for="(tp, index) in topics" :key="index">
                            <span :class="{activeTopic:isActiveTopic(index)}" @click="selectTopic(index)">{{tp.title}}</span>
                        </li>
                    </ul>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
    name: "help-topic-nav-mobile",
    directives:{
		ClickOutside
	},
    data(){
        return{
            topics:[
                {"index": 0, "topic":"Frequently read articles (1)", "title": "Frequently read articles (1)" },
                {"index": 1, "topic":"Frequently read articles (2)", "title": "Frequently read articles (2)" },
                {"index": 2, "topic":"Frequently read articles (3)", "title": "Frequently read articles (3)" },
                {"index": 3, "topic":"Frequently read articles (4)", "title": "Frequently read articles (4)" },
                {"index": 4, "topic":"Frequently read articles (5)", "title": "Frequently read articles (5)" },
                {"index": 5, "topic":"Frequently read articles (6)", "title": "Frequently read articles (6)" },
                {"index": 6, "topic":"Frequently read articles (7)", "title": "Frequently read articles (7)" }
            ],
            activeTopicIdx: 0,
            showOptions: false,
			selectTextClass: "select-text",
        }
    },
    methods:{
        isActiveTopic(idx){
            return idx === this.activeTopicIdx;
        },
        selectTopic(idx){
            this.activeTopicIdx = idx;
            this.$emit("selectHelpTopic", this.topics[idx]);
            this.showOptions =  false;
        },
        onShowOptions(){
			this.showOptions = !this.showOptions;
			this.selectTextClass = (this.showOptions)? "select-text open":"select-text";
        },
        closePanel: function(){
            if(this.showOptions) this.showOptions = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
@import "~assets/css/dropdowninput.scss";
ul.help-topics li{
    margin-bottom: 30px;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #283441;
}
ul.help-topics li:last-child{
    margin-bottom: 0px;
}
ul.help-topics li span:hover{
    color: #357BFF;
    cursor: pointer;
}
.activeTopic{
    color: #357BFF;
}

.dropdown-input{
	padding: 10px;
	border: 1px solid #9399A0;
	box-sizing: border-box;
	border-radius: 3px;
}
.dropdown-options{
	width: 100%;
	padding: 10px 30px;
}
</style>