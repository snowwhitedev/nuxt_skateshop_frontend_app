<template>
	<div class="help-topic-nav">
        <input-search placeHolder="Search article" class="input-normal"/>
        <p class="nav-title">Topics</p>
        <ul class="help-topics">
            <li v-for="(tp, index) in topics" :key="index">
                <span :class="{activeTopic:isActiveTopic(index)}" @click="selectTopic(index)">{{tp.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "help-topic-nav",
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
            activeTopicIdx: 0
        }
    },
    methods:{
        isActiveTopic(idx){
            return idx === this.activeTopicIdx;
        },
        selectTopic(idx){
            this.activeTopicIdx = idx;
            this.$emit("selectHelpTopic", this.topics[idx]);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.help-topic-nav{
    width: 372px;
    min-width: 300px;
    padding: 40px;
    background: #FFFFFF;
    border: 1px solid #F3F4F4;
    box-sizing: border-box;
    box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
    border-radius: 15px;
    height: fit-content;
}
.nav-title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #283441;
    margin-top: 40px;
    margin-bottom: 40px;
}
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
</style>