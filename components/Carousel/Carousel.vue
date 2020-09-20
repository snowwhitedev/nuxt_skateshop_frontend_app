<template>
<div class="carousel-container">
	<transition-group name="fade" tag="div">
		<div v-for="i in [currentIndex]" :key="i">
			<div style="position: relative;" class="fadeback">
				<img :src="currentImg" class="item" height="475" />
				<div class="title">
					<div class="title--1"><p>{{ titles[i] }}</p></div>
					<div class="title--2"><p>{{ subTitles[i] }}</p></div>
					<p class="title--3">{{ content[i] }}</p>
					<a class="btn white_btn button_large carousel-btn">View Contest</a>
				</div>
			</div>
		</div>
	</transition-group>
	<!-- <a class="cprev" @click="prev" href="#">&#10094;</a>
	<a class="cnext" @click="next" href="#">&#10095;</a> -->

	<ol class="carousel-indicators">
		<li
			v-for="i in totalImg"
			:key="i"
			data-target="#banner_slider"
			:data-slide-to="i"
			:class="{ active: currentIndex === i - 1 }"
			@click="setCustomIndex(i)"
		></li>
	</ol>
</div>
</template>
<script>
export default {
name: "Carousel",
data() {
	return {
		images: [
			"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
			"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
			"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
			"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
		],
		titles: ["Exclusive1", "Exclusive2", "Exclusive3", "Exclusive4"],
		subTitles: ["Our special King’s Day contest will be quite orange!", "Our special King’s Day contest will be quite orange!", "Our special King’s Day contest will be quite orange!", "Our special King’s Day contest will be quite orange!"],
		content: ["Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum and cut...1", "Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum and cut...2", "Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum and cut...3", "Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum and cut...4"],
		timer: null,
		currentIndex: 0
	};
},

mounted: function() {
	this.startSlide();
},

methods: {
	startSlide: function() {
		this.timer = setInterval(this.next, 1170000);
	},

	next: function() {
		this.currentIndex += 1;
		if (this.currentIndex >= this.totalImg) {
		this.currentIndex -= this.totalImg;
		}
	},
	prev: function() {
		this.currentIndex -= 1;
		if (this.currentIndex < 0) {
		this.currentIndex += this.totalImg;
		}
	},

	setCustomIndex: function(i) {
		this.currentIndex = i - 1;
	}
},

computed: {
	currentImg: function() {
		return this.images[this.currentIndex];
	},
	totalImg: function() {
		return this.images.length;
	}
}
};
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.carousel-container{
	width: 100%;
}
.carousel-container:after{
content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	max-width: 850px;
	height: 100%;
	opacity: 0.4;
	background: -webkit-linear-gradient(349.53deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
	background: -o-linear-gradient(349.53deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
	background: linear-gradient(100.47deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
	border-radius: 30px 0px 0px 30px;
}
.btn {
	-webkit-border-radius: 3px;
	border-radius: 3px;
	padding: 15px 25px;
	font-family: $font-family-primary;
	font-weight: 600;
	font-style: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.03em;
	color: #283441;
	border: 0;
	position: relative;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.carousel-btn{
	margin-top: 14px;
}
.btn:not(:disabled):not(.disabled) {
cursor: pointer;
}
.btn.button_large {
	height: 50px;
	padding: 15px 25px;
}
.btn.white_btn {
	background-color: #fafafb;
	color: #283441;
}
.title {
	z-index: 999;
	position: absolute;
	top: 50%;
	left: 60px;
	transform: translateY(-50%);
}

.title--1 {
	background-color: #EE91FB;
	height: 30px;
	width: 83px;
	border-radius: 5px;
	color: white;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	display: flex;
	align-items: center;
	justify-content: center;
}

.title--2{
	margin-top:20px;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: white;
	max-width: 477px;
}
.title--3 {
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: white;
	max-width: 386px;
	margin-top:10px;
	margin-bottom:14px;
}

.title--3 {
	text-align: left;
}

.carousel-container {
	position: relative;
	height: 475px;
}

.active {
	background-color: rgb(255, 255, 255) !important;
	width: 24px !important;
	border-radius: 10px !important;
}

.item {
	border-radius: 30px;
	height: 475px;
}

.carousel-indicators {
	display: flex;
	right: auto;
	bottom: 50px;
	left: 60px;
	padding-left: 0;
	position: absolute;
	list-style: none;
	z-index: 15;
	
}

.carousel-indicators li {
	border-radius: 100%;
	position: relative;
	-ms-flex: 0 1 auto;
	-webkit-box-flex: 0;
	flex: 0 1 auto;
	width: 8px;
	height: 8px;
	margin-right: 5px;
	margin-left: 5px;
	text-indent: -999px;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.5);
}

.fade-enter-active,
.fade-leave-active {
	animation: fadeIn ease 3s;
	transition: all 3s ease;
	overflow: hidden;
	position: relative;
	width: 100%;
	opacity: 1;
}

.fade-enter,
.fade-leave-to {
	animation: fadeOut ease 3s;
	transition: all 3s ease;
	display: none;
	width: 100%;
	opacity: 0;
}

@keyframes fadeIn {
0% {
	opacity: 0;
}
100% {
	opacity: 1;
}
}

@keyframes fadeOut {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

img {
	height: 600px;
	width: 100%;
}

.cprev,
.cnext {
	cursor: pointer;
	position: absolute;
	top: 40%;
	width: 90px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 44px;
	transition: 0.7s ease;
	border-radius: 50%;
	text-decoration: none;
	user-select: none;
}

.cnext {
	right: 10px;
}

.cprev {
	left: 10px;
}

.cprev:hover,
.cnext:hover {
	background-color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 767px){
	.carousel-container {
		height: 230px !important;
	}
	.item {
		height: 230px !important;
	}
	.title{
		left: 20px;
		top: 35px;
		transform: translateY(0%);
	}
	.title--2{
		font-size: 24px;
		line-height: 33px;
		margin-top: 10px;
	}
	.title--3 {
		font-size: 12px;
		line-height: 16px;
		color: white;
		max-width: 386px;
		margin-top:5px;
	}
	.carousel-btn{
		display: none;
	}
	.carousel-indicators{
		left: 20px;
		bottom: 20px;
	}
}
</style>
