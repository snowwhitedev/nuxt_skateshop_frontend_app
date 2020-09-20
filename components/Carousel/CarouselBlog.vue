<template>
    <div class="carousel-blog">
        <div class="carousel-blog-header">
            <div class="carousel-blog-header-text">
                <span class="carousel-blog-title" style="margin-right:20px;">
                    Blog posts
                </span>
                <span class="carousel-blog-description">
                    Sed ullamcorper tellus quis nisl.
                </span>
            </div>
            <div class="carousel-blog-action">
                <btn-prev @onClick="prevItem" :btnDisabled="!(currentFirst > 0)"/>
                <div style="width:20px;"></div>
                <btn-next @onClick="nextItem" :btnDisabled="!(currentFirst < cardCnt - 1)"/>
            </div>
        </div>
        <div style="width: 100%; overflow:hidden;">
            <div class="carousel-blog-container" :style="{'margin-left':containerLeftStr}">
                <div v-for="idx in cardCnt" :key="idx" class="blog-item">
                    <card-blog designer="Designer1" :blogImg="require(`~/assets/images/blog/blog-img-photo${idx % 2 + 1}.jpg`)" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CarouselBlog',
    data(){
        return{
            containerLeft: 0,
            containerLeftStr: '0px',
            prevDisabled: true,
            nextDisabled: false,
            cardCnt: 6,
            currentFirst: 0
        }
    },
    methods: {
        prevItem(){
            this.containerLeft += 324; //this is the width of the card blog
            this.containerLeftStr = this.containerLeft + 'px';
            this.currentFirst--;
            // this.nextDisabled = false;

        },
        nextItem(){
            this.containerLeft -= 324; //this is the width of the card blog
            this.containerLeftStr = this.containerLeft + 'px';
            this.currentFirst++;
            // if(this.currentFirst === this.cardCnt - 1){
            //     this.nextDisabled = true;
            // }
            // this.prevDisabled = false;
        }
    }
}
</script>


<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.carousel-blog-header{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
//   padding:0 2px;
}
.carousel-blog-title{
  font-size: $font-size-header-5;
  color:#283441;
  font-weight: $font-weight-bold;
  font-style: normal;
  font-family: $font-family-primary;
  line-height: 33px;
}
.carousel-blog-description{
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
.carousel-blog-container{
    display: flex;
	// overflow-x:auto;
	// overflow:auto;
    // padding: 1px 2px;
}
.carousel-blog-action{
    display: flex;
    align-items: flex-end;
}
.blog-item{
    margin-right:20px;
}
.carousel-blog-header-text{
    display: block;
}
@media (max-width: 767px){
    .carousel-blog-header-text{
        display: flex;
        flex-direction: column;
    }
    .carousel-blog-title{
        font-size: 20px;
		line-height: 27px;
    }
    .carousel-blog-description{
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.03em;
		mix-blend-mode: normal;
    }
}
</style>