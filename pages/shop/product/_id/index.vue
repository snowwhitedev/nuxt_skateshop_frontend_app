<template>
	<div class="rate-design-detail mb-6">
		<div class="design-detail">
			<carousel-product />
			<div class="design-content">
				<p class="mobile-only-1023 sub-title">
					Skateboard deck
				</p>
				<p class="design-title">
					Hurley X Machina Gold 
				</p>
				<p class="by">by <span><nuxt-link :to="`/shop/designer/1`"><textlink btnClass="textlink dark">Ben Jhamin</textlink></nuxt-link></span></p>
				<p class="design-text">
					Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum sed ullamcorper. Isscd nisl malesua Isscd nisl malesuada, quis porta nulla.
				</p>
				<card-product2-cart />
				<div class="product-details">
					<p>Product details</p>
					<ul>
						<li>100% hard rock Canadian maple</li>
						<li>Epoxy Resin superglue</li>
						<li>7-ply</li>
						<li>Popsicle shape</li>
						<li>D-2 concave</li>
					</ul>
					<p class="product-text">Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum sed ullamcorper. Isscd nisl malesua a nulla.</p>
				</div>
				<div class="tags">
					<tag v-for="tag in tags" :key="tag">{{tag}}</tag>
				</div>
				<social-links class="social-links-section" />
				
			</div>
		</div>
		<div class="comment-section">
			<div class="comments">
				<product-reviews />
			</div>
			<div class="contest">
				<banner-in />
				<div class="section">
					<div class="card-section-header">
						<div >
							<div class="card-section-title">
								Similar products <span v-if="!$device.isMobile">you might like</span>
							</div>
						</div>
						<div class="card-section-action">
							<btn-text btnClass="btn secondary sm">See more</btn-text> 
						</div>
					</div>
					<div class="card-container desktop-only-1024">
						<div class="card-item">
							<card-product :cardData="cardData" />
						</div>
						<div class="card-item">
							<card-product :cardData="cardData" />
						</div>
					</div>
					<div class="card-container desktop-only-1024">
						<div class="card-item">
							<card-product :cardData="cardData" />
						</div>
						<div class="card-item">
							<card-product :cardData="cardData" />
						</div>
					</div>
					<div class="card-container mobile-only-1023">
						<div v-for="idx in 4" class="card-item" :key="idx">
							<card-product :cardData="cardData" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section desktop-only-1024">
			<div class=" section-footer">
				<div class="card-section-header">
					<div >
						<div class="card-section-title">
							Best sellers
						</div>
						<div class="card-section-description">
							Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum
						</div>
					</div>
					<div class="card-section-action">
						<btn-text btnClass="btn secondary sm">See more</btn-text> 
					</div>
				</div>
				<div class="card-container">
					<div class="card-item" v-for="idx in 4" :key="idx">
						<card-product :cardData="cardData"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BtnRatinglevel2 from '@/components/Buttons/BtnRatinglevel2';
import CardPreorder from '@/components/Cards/CardPreorder.vue';
import PostComment from '@/components/Widgets/PostComment.vue';
import Comment from  '@/components/Widgets/Comment.vue';
import CardProduct2Cart from '@/components/Cards/CardProduct2Cart.vue';
import CarouselProduct from '@/components/Carousel/CarouselProduct.vue';
import ProductReviews from '@/components/Widgets/ProductReviews.vue';
import BannerIn from '@/components/Banners/BannerIn.vue';
export default {
    name:"rate-design-detail",
    // middleware: ['auth'],
    layout: 'layout_fullbanner',
    components:{
        BtnRatinglevel2, 
        CardPreorder,
        PostComment,
        Comment,
        CardProduct2Cart,
        CarouselProduct,
        ProductReviews,
        BannerIn
    },
    data(){
        return{
			tags:['skate', 'team', 'road trip', 'monster', 'funny', 'spacewalk', 'saturn', 'planet', 'colorful', 'rainbow', 'unicorn'],
			 cardData: {id: 1}
        }
    },
    created(){
        // console.log(this.$route.params);
		// console.log("[isMobile]", this.$device.isMobile);
       
    },
    methods:{
        showPopDesignOverlay(designId){
			this.popDesigns.forEach((item, key) =>{
				this.popDesigns[key].overlay = false;
				if (item.id === designId) {
					this.popDesigns[key].overlay = true;
				}
			})
		}
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.design-detail{
    display: flex;
	flex-direction: row;
	max-width: 1296px;
	padding: 0 10px;
	margin: 0 auto
}
.design-image{
    width: 736px;
    height: auto;
}
.design-content{
    padding: 20px;
}
.design-title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 46px;
    color: #283441;
}
.by{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #707780;
    margin-bottom: 10px;
}
.by span{
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 10px;
}
.design-text{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #707780; 
}
.product-details{
    margin-top: 40px;
}
.product-details p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #283441;
    margin-bottom: 10px;
}
.product-details ul{
    list-style-type: disc;
    list-style-position: inside;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    color: #283441;
}
.product-details p.product-text{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    color: #283441;
    margin-top: 30px;
}

.tags{
    margin-top: 15px;
    margin-bottom: 60px;
}
.tags button{
    margin-right:10px;
    margin-top: 10px;
}
.social-links-section{
	margin-top: 20px;
}
.comment-section{
    display: grid;
    grid-template-columns:50% 50%;
	margin: 0 auto;
    margin-top: 60px;
	padding: 0 10px;
	max-width: 1296px;
}
.comments{
    padding-right: 30px;
}
.contest p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #283441;
    margin-bottom: 20px;
}
.section-footer{
	padding-left: 10px;
	padding-right: 10px;
	max-width: 1296px;
	margin: 0 auto;
}
.card-section-header{
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 10px;
	padding:0 2px;
}
.card-section-title{
	font-size: $font-size-header-5;
	color:#283441;
	font-weight: $font-weight-bold;
	font-style: normal;
	font-family: $font-family-primary;
	line-height: 33px;
}
.card-section-description{
	font-size: $font-size-subtitle-2;
	color:#4C5561;
	font-weight: $font-weight-thin;
	font-style: normal;
	font-family: $font-family-primary;
	line-height: 180%;
	letter-spacing: 0.01em;
	mix-blend-mode: normal;
	margin-top:10px;
	margin-bottom: 0;
}
.card-container{
	display: flex;
	overflow:auto;
	padding: 10px 0;
}
.card-item{
	margin-right: 20px;
}
.card-item:last-child{
    margin-right: 0;;
}
.mobile-only-1023{
	display: none;
}
@media (max-width: 1023px){
	.design-detail{
		flex-direction: column;
	}
	.design-content{
		padding-left: 0px;
		padding-right: 0px;
	}
	.comment-section{
		display: block;
		margin-top: 30px;
	}
	.comments{
		padding-right: 0px;
		margin-bottom: 40px;
	}
	.desktop-only-1024{
		display: none;
	}
	.mobile-only-1023{
		display: flex;
	}
	.sub-title {
		display: block;
		font-family: $font-family-primary;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.03em;
		color: #707780;
		margin-bottom: 5px;
	}
}
@media (max-width: 767px){
	.design-detail{
		padding: 0;
	}
	.design-content{
		padding-left: 10px;
		padding-right: 10px;
	}
	.design-title{
		font-size: 24px;
		line-height: 33px;
	}
	.tags{
		margin-bottom: 0;
	}
	.card-item{
		margin-right: 10px;
	}
	.rate-design-detail{
		margin-bottom: 50px !important;
	}
}
</style>