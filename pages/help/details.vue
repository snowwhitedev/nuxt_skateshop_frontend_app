<template>
	<div class="page-section help-detail">
		<help-topics-nav @selectHelpTopic="getHelpArtilces" class="desktop-only-767"/>
		<help-topics-nav-mobile @selectHelpTopic="getHelpArtilces" class="mobile-only-767"/>
		<div class="page-content" >
			<p class="help-topic">
				{{helpTopic}}
			</p>
			<ul class="help-articles">
				<li v-for="(article, index) in articles" :key="index" @click="viewArticleDetails(article)">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.2734 1.33333H3.9974C3.26206 1.33333 2.66406 1.93199 2.66406 2.66666V13.3333C2.66406 14.0687 3.26206 14.6667 3.9974 14.6667H11.9974C12.7327 14.6667 13.3307 14.0687 13.3307 13.3333V4.39066L10.2734 1.33333ZM11.9981 13.3333H3.9974V2.66666H9.33073V5.33333H11.9974L11.9981 13.3333Z" fill="#357BFF"/>
						<path d="M9.33203 7.33333H5.33203V8.66666H9.33203V7.33333Z" fill="#357BFF"/>
						<path d="M10.6654 9.99999H5.33203V11.3333H10.6654V9.99999Z" fill="#357BFF"/>
					</svg>
					<p class="article-title">{{article.title}}</p>
					<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z" fill="#357BFF"/>
					</svg>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import HelpTopicsNav from '../../components/Navigation/HelpTopicsNav.vue';
import HelpTopicsNavMobile from '../../components/Navigation/HelpTopicsNavMobile.vue';
export default {
	name: "help-detials",
	components:{
		HelpTopicsNav,
		HelpTopicsNavMobile
	},
	data(){
		return{
			articles:[
				{index: 0, title: "Getting started on deckend 1"},
				{index: 1, title: "Getting started on deckend 2"},
				{index: 2, title: "Getting started on deckend 3"},
				{index: 3, title: "Getting started on deckend 4"},
				{index: 4, title: "Getting started on deckend 5"},
				{index: 5, title: "Getting started on deckend 6"},
			],
			helpTopic: "Frequently read articles (1)",
		}
	},
	methods:{
		getHelpArtilces(value){
			this.helpTopic = value.title;
		},
		viewArticleDetails(article){
			this.$router.push({path: "/help/article", query: {topic:this.helpTopic, articleId:article.index}});
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.page-section{
	margin-bottom: 60px;
}
.help-detail{
	display: flex;
	flex-direction: row;
}
.page-content{
	padding: 40px;
	margin-left: 20px;
}
.help-topic{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #283441;
	margin-bottom: 20px;
}
ul.help-articles li{
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
ul.help-articles li:hover{
	cursor: pointer;
}
ul.help-articles li:last-child{
	margin-bottom: 0px;
}
ul.help-articles li p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #357BFF;
	margin-left: 12px;
	margin-right: 5px;
	
}
.desktop-only-767{
	display: block;
}
.mobile-only-767{
	display: none;
}
@media (max-width: 1023px){
	.help-topic{
		font-size: 20px;
		line-height: 27px;
	}
}
@media (max-width: 767px){
	.help-detail{
		flex-direction: column;
	}

	.desktop-only-767{
		display: none;
	}
	.mobile-only-767{
		display: block;
	}
	.page-content{
		padding: 10px;
		padding-top: 20px;
		margin-left: 0;
	}
}
</style>