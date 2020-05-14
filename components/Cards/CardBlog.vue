<template>
	<div class="card-blog" @click="onClick">
		<img :src="blogImg" class="card-blog-image" />
		<div class="blog_detail_content">
			<div class="design_date">07/01/2020</div>
			<div class="blog-title">Unleashed: Viva la Barcelona</div>
			<div class="designer">
					<p><span> by </span>{{designer}}</p>
			</div>
			<div class="blog-tags">
					<tag class="btn" style="margin-right:10px;">Skate</tag>
					<tag class="btn" style="margin-right:10px;">Team</tag>
					<tag class="btn" style="margin-right:10px;">Road Trip</tag>
			</div>
		</div>
	</div>
</template>

<script>
import Tag from '../Buttons/Tag.vue';
export default {
	props:{
		blogImg:{
			type: String,
			default: require('~/assets/images/blog/blog-img-photo1.jpg')
		},
		designer:{
			type: String,
			default: ''
		}
	},
	components:{
		Tag
	},
	methods:{
		onClick: function(){
			this.$router.push("/blog/");
		}
	}
}
</script>

<style lang='scss' scoped>
@import "~assets/css/variable.scss";

.card-blog{
    width: 304px;
    height: 300px;
    position: relative;
}
.card-blog:hover{
    cursor: pointer;
}
.card-blog::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 52, 65, 0.5);
    border-radius: 5px;
}
.card-blog-image{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.blog_detail_content{
    position: absolute;
    top: auto;
    bottom: 10px;
    left:20px;
    z-index: 999;
}
.design_date{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin-bottom:5px;
}
.blog-title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
}
.designer p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
}
.designer p span{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #B7BBC0;
}
.blog-tags{
    margin-top:15px;
}
</style>