<template>
	<div class="page-section">
		<banner-help />
		<div class="app-container">
			<div class="help-list-container">
				
				<p class="help-title">Help center</p>
				<div class="topic-list">
					<ul>
						<li v-for="topic in helpTopics" :key="topic.id">
							<help-list-item :helpTopic="topic.topic" :items="helpArticles"/>
						</li>
					</ul>
				</div>
				<div class="vertical-line"></div>
				
			</div>
			<p class="text-description">
				If you still have questions please contact us directly, we’d love to help.
			</p>
			<div class="contact-btn">
				<btn-text btnClass="btn primary lg">Contact us</btn-text>
			</div>
		</div>
	</div>
</template>

<script>
import BannerHelp from '@/components/Banners/BannerHelp.vue';
import HelpListItem from '@/components/Widgets/HelpListItem.vue';
export default {
	components:{
		BannerHelp,
		HelpListItem
	},
	layout:'layout_fullbanner',
	data(){
		return{
			helpTopics:[
				{id: 1, topic: 'Frequently read articles (8 articles)'},
				{id: 2, topic: 'Frequently read articles (8 articles)'},
				{id: 3, topic: 'Frequently read articles (8 articles)'},
				{id: 4, topic: 'Frequently read articles (8 articles)'}
			],
			helpArticles:[
				{id: 1, title: 'Getting started on deckend'},
				{id: 2, title: 'Getting started on deckend'},
				{id: 3, title: 'Getting started on deckend'},
				{id: 4, title: 'Getting started on deckend'},
				{id: 5, title: 'Getting started on deckend'},
			]
		}
	}
	
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.vertical-line{
	width: 2px;
	height: 100%;
	background: #DBDDDF;
	position: absolute;
	top: 0;
	z-index: -1;
}
.help-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	text-align: center;
	margin-bottom: 40px;
	background: white;
}
.help-list-container{
	margin: 20px auto 0px;
	width: 100%;
	max-width: 844px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 100px;
	position: relative;
}
.topic-list{
	width: 100%;
}
.topic-list ul li{
	margin-bottom: 10px;
}
.topic-list ul li:last-child{
	margin-bottom: 0px;
}
.text-description{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #707780;
}
.contact-btn{
	margin: 20px auto 100px;
	display: flex;
	justify-content: center;
}

@media (max-width: 767px){
	.help-list-container{
		padding-bottom: 70px;
	}
	.contact-btn{
		margin-bottom: 50px;
	}
}
</style>