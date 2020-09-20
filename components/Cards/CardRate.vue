<template>
	<div class="card-rate"  v-click-outside="closeOverlay">
		<div class="card-image">
			<transition name="fade">
				<div class="overlay" v-if="overlay" >
					<btn-ratinglevel v-for="rl in 5"  :ratingLevel="6 - rl" :key="rl"/>
					<div class="need-login" v-if="!$auth.loggedIn">
						<nuxt-link to="/login">
							<btn-text btnClass="btn primary sm">Please login to rate</btn-text>
						</nuxt-link>
					</div>
				</div>
			</transition>
			<figure class="image">
				<nuxt-link :to="`/rate/design/${cardData.id}`">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
				</nuxt-link>
			</figure>
		</div>
		<div class="card-content" :style="`display:${dispContent}`">
			<a class="contest"><p>Redbull Make it Count</p></a>
			<nuxt-link :to="`/rate/design/${cardData.id}`">
				<p class="title">Hurely X Machina Gold</p>
			</nuxt-link>
			<div class="rating">
				<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.8083 6.14487C16.6848 5.8458 16.3914 5.65016 16.0674 5.65016H11.7522L9.56812 1.28281C9.29631 0.739999 8.40552 0.739999 8.13372 1.28281L5.95044 5.65016H1.6352C1.31128 5.65016 1.01783 5.8458 0.89435 6.14487C0.770874 6.44394 0.839026 6.79031 1.06834 7.01882L4.74375 10.6942L3.27006 15.8537C3.17785 16.1769 3.29651 16.5232 3.56752 16.7213C3.84013 16.9201 4.20655 16.9273 4.48477 16.7405L8.85132 13.83L13.2171 16.7405C13.3518 16.8303 13.5065 16.8752 13.6621 16.8752C13.828 16.8752 13.994 16.8239 14.1351 16.7213C14.4061 16.5232 14.5248 16.1769 14.4326 15.8537L12.9589 10.6942L16.6343 7.01882C16.8636 6.79031 16.9318 6.44394 16.8083 6.14487Z" fill="#FFA057"/>
				</svg>
				<div style="margin-left: 10px;">
					<p class="rate-mark">
						4.7
						<small class="full-mark">/ 5 rating</small>
					</p>
				</div>
			</div>
			<div class="card-action">
				<btn-rate btnClass="btn primary sm rate" @onClick="onRate"/>
				<nuxt-link :to="`/rate/design/${cardData.id}`"><btn-textlink rightIcon="arrow">See details</btn-textlink></nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
import BtnRatinglevel from '../Buttons/BtnRatinglevel.vue';
import ClickOutside from 'vue-click-outside';
export default {
	components:{
		BtnRatinglevel
	},
	props: {
		cardData:{
			type: Object,
			default:null
		}
	},
	directives:{
		ClickOutside
	},
	data(){
		return{
			overlay: false,
			dispContent: 'block'
		}
	},
	methods:{
		onRate(){
			this.dispContent = 'none';
			this.overlay = true;
		},
		closeOverlay: function(){
			if(this.overlay) this.overlay = false;
			this.dispContent = 'block';
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.overlay{
	position: absolute;
	height: 100%;
	width: 100%;
	background: #283441;
	transition: 0.5s linear;
	padding: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	opacity: 0.8;
	z-index: 9;
	border-radius: 5px;
}
.need-login{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.card-rate{
	width: 304px;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	// box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.7);
	border-radius: 5px;
	// height: 554px;
	position: relative;
}
.card-image{
	width: 100%;
	height: 400px;
	border-radius: 5px 5px 0 0;
}
.card-image .image img{
	width: 100%;
	height: 400px;
	border-radius: 5px 5px 0 0;
}
.card-content{
	padding: 10px 20px 10px 20px;
}
.card-action{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.rate{
	margin-bottom: 0;
}
.contest{
	font-family: $font-family-primary;
	font-size: $font-size-label;
	color: #F879AD;
	line-height: 14px;
	letter-spacing: 0.03em;
}
.title{
	font-size: $font-size-header-6;
	color: #283441;
	font-weight: $font-weight-bold;
	line-height: 27px;
	font-style: normal;
	font-family: $font-family-primary;
	margin-top:10px;
	margin-bottom: 10px;
}
.title:hover{
	color: #357BFF;
}
.displayNone{
	display:none;
}
.rating{
	display:flex;
	margin-bottom:10px;
}
.rate-mark{
	font-weight: $font-weight-bold;
	font-size: $font-size-subtitle-1;
	font-family: $font-family-primary;
	font-style: normal;
	color: #283441;
	line-height: 22px;
}
.full-mark{
	font-size: 80%;
	font-weight: normal;
	$font-family: $font-family-primary;
	color: #4C5561;
}
</style>
