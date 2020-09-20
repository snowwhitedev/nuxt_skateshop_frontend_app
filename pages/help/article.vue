<template>
	<div class="page-section help-detail">
		<help-topics-nav @selectHelpTopic="getHelpArtilces" class="desktop-only-767"/>
		<help-topics-nav-mobile @selectHelpTopic="getHelpArtilces" class="mobile-only-767"/>
		<div class="page-content">
			<div class="breadcrumb">
				<span>Help</span>
				<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 9L5 5L1 1" stroke="#283441" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<span>{{helpTopic}}</span>
			</div>
			<div class="article-content">
				<div class="article-header">
					<p class="article-title">
						Getting started on deckend
					</p>
					<p class="updated-info">
						Last updated on 23 January, 2019
					</p>
				</div>
				<div class="article-body" v-html="articleBody">
					
				</div>
			</div>
			<div class="content-action">
				<p class="action-description">Did this article answer your questions? Still need help, please contact us directly.</p>
				<btn-text btnClass="btn primary lg">Contact us</btn-text>
			</div>
		</div>
	</div>
</template>


<script>
import HelpTopicsNav from '../../components/Navigation/HelpTopicsNav.vue';
import HelpTopicsNavMobile from '../../components/Navigation/HelpTopicsNavMobile.vue';
export default {
	name: "help-article-detail",
	components:{
		HelpTopicsNav,
		HelpTopicsNavMobile
	},
	data(){
		return{
			articleId: '',
			helpTopic: '',
			articleBody: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae iaculis arcu. In bibendum augue vel ante imperdiet tincidunt. Nunc quis tortor congue, pellentesque sem non, blandit nunc. Etiam consectetur vitae risus vitae ornare. Duis eros neque, mattis a lacus eu, finibus ultrices augue.</p>
					<img src="https://miro.medium.com/max/3882/1*Iqxx3u7xOM9tlSA2TXPQPQ.jpeg" style="margin: 20px 0 30px;"/>`
		}
	},
	created(){
		this.articleId = this.$route.query.articleId;
		this.helpTopic =  this.$route.query.topic
	},
	methods:{
		getHelpArtilces(value){
			// this.helpTopic = value.title;
		},
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
	margin-left: 60px;
   max-width: 844px;
}
.breadcrumb span{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #357BFF;
	margin-bottom: 20px;
}
.breadcrumb span:hover{
	cursor: pointer;
}
.article-header{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.article-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #283441;
	margin-bottom: 20px;
}
.updated-info{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	text-align: right;
	letter-spacing: 0.03em;
	color: #707780;
}
.article-body p{
	max-width: 100%;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #283441;
}
.article-body img{
	width: 844px;
	height: 538px;
	margin: 20px 0 30px;
}
.content-action{
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.action-description{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #707780;
	margin-bottom: 20px;
}

.desktop-only-767{
	display: block;
}
.mobile-only-767{
	display: none;
}

@media (max-width: 1023px){
	.article-header{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 45px;
	}
	.article-title{
		font-size: 20px;
		line-height: 27px;
		margin-bottom: 5px;
	}
	.page-content{
		margin-left: 30px;
	}
	.page-section{
		margin-bottom: 50px;
	}
}

@media (max-width: 767px){
	.desktop-only-767{
		display: none;
	}
	.mobile-only-767{
		display: block;
	}
	.help-detail{
		flex-direction: column;	
	}
	.page-content{
		padding: 10px;
		padding-top: 20px;
		margin-left: 0;
	}
	.content-action{
		margin-top: 60px;
	}
}
</style>