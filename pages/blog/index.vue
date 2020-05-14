<template>
	<div class="blog-page">
		<div class="blog-carousel">
			<div ref="big" id="big">
				<div v-for="i in images.length" :key="i">
					<div class="carousel-cell">
						<img :src="images[i - 1]" class="item" />
						<div class="title">
							<p>Blog title</p>
						</div>
					</div>
				</div>
			</div>
			<div ref="small" id="small">
				<div class="carousel-small" style="display: flex" v-for="i in images.length" :key="i">
					
						<img :src="images[i - 1]" class="item-small" height="150" />
						<div style="color: white; align-self: center; padding: 20px;">
							<p style="margin: 0; padding: 10px;">Lorum ipsum</p>
							<a href="/" style="color: white" tabindex="-1">Read more
							<svg class="slides_link_svg" viewBox="0 0 18 9" fill="none">
								<path
									d="M14.0771 0.46967C13.7842 0.176777 13.3093 0.176777 13.0164 0.46967C12.7235 0.762563 12.7235 1.23744 13.0164 1.53033L14.0771 0.46967ZM17 4.45324L17.5303 4.98357C17.8232 4.69067 17.8232 4.2158 17.5303 3.92291L17 4.45324ZM13.0164 7.37614C12.7235 7.66904 12.7235 8.14391 13.0164 8.4368C13.3093 8.7297 13.7842 8.7297 14.0771 8.4368L13.0164 7.37614ZM1 3.70324C0.585786 3.70324 0.25 4.03902 0.25 4.45324C0.25 4.86745 0.585786 5.20324 1 5.20324V3.70324ZM13.0164 1.53033L16.4697 4.98357L17.5303 3.92291L14.0771 0.46967L13.0164 1.53033ZM16.4697 3.92291L13.0164 7.37614L14.0771 8.4368L17.5303 4.98357L16.4697 3.92291ZM17 3.70324H1V5.20324H17V3.70324Z"
									fill="white"
								></path>
							</svg>
							</a>
						</div>
					
				</div>
			</div>	
		</div> 
		
	</div>
</template>

<script>
let Flickity = {};
export default {
	name: 'blog-page',
	layout:'layout_fullbanner',
	data(){
		return{
			images: [
				"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
				"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
				"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
				"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
			],
			flickityOptions: {
				initialIndex: 3,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: true
				
				// any options from Flickity can be used
			}
		}
	},
	mounted: function () {
		if(process.browser){
			Flickity = require('flickity');
			require('flickity-sync');

			this.$flickity1 = new Flickity(this.$refs.big, {
				// autoPlay: 2000,
				autoPlay: 89000,
				wrapAround: true,
				prevNextButtons: false,
				sync: this.$refs.small
			});
			this.$flickity2 = new Flickity(this.$refs.small, {
				contain: true,
				pageDots: false,
				prevNextButtons: false,
				wrapAround: true
			});
		}
	}
}
</script>

<style src="flickity/dist/flickity.css"></style>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.blog-page{
	width: 100%;
}
.blog-carousel{
	margin-left: calc(50vw - 648px);
	height: 590px;
	position: relative;
}

#big {
  width: 100vw;
  height: 590px;
}
#big img{
	height: 590px;
}
#big .flickity-viewport{
	height: 590px !important;
}
.slides_link_svg {
  width: 15px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
}

.carousel-cell {
  width: 100vw;
//   background: gray;
	background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-small {
  width: 500px;
  height: 150px;
//   background: gray;
	background: none;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.carousel-small img{
	width: 196px;
}
.item-small {
  height: 100%;
  width: 55%;
}
.carousel-cell .title {
	z-index: 999;
	position: absolute;
	top: 35%;
	left: 60px;
	transform: translateY(-50%);
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #FFFFFF;
}
.carousel-container {
  position: relative;
  height: 590px;
}
#small {
	width: calc(100vw - 257px);
	left: 60px;
	background: #0A1520;
	padding: 50px 0 50px 45px;
	position: absolute;
	bottom: 0;
	width: 100%;
}

#small .flickity-slider {
	left: -400px !important;
}
.active {
  background-color: rgb(255, 255, 255) !important;
  width: 24px !important;
  border-radius: 10px !important;
}

.item {
  /* border-radius: 50px; */
  height: 546px;
}

.flickity-page-dots {
  bottom: 280px;
  left: 60px;
  width: fit-content;
}
/* white circles */
.flickity-page-dots .dot {
  width: 8px;
  height: 8px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 5px 0 0;
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: white;
  width: 24px;
  border-radius: 8px;
}

img {
  height: 600px;
  width: 100%;
}
</style>