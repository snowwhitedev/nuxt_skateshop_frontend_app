<template>
	<div class="carousel-product">
		<div class="view-product">
			<img :src="images[currentIndex]" />
		</div>
		<div class="thumbnails">
			<img v-for="ii in images.length" :key="ii" :src="images[ii-1]" class="thumbnail" @click="selectImage(ii)"/>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
				images: [
					"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
					"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
					"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
					"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
				],
				currentIndex: 0
		}
	},
	methods:{
		selectImage: function(idx){
			this.currentIndex = idx - 1;
			console.log("[carousel produce]", idx);
		}
	}
}
</script>

<style lang="scss" scoped>
.carousel-product{
	// width: 736px;
	display:flex;
	flex-direction: column;
}
.view-product{
	width: 736px;
	height: 800px;
}
.view-product img{
	width: 736px;
	height: 800px;
}
.thumbnails{
	margin-top:10px;
	display: flex;

}
img.thumbnail{
	width: 112px;
	height: 112px;
	margin-right:10px;
	cursor: pointer;
}
img.thumbnail:last-child{
	margin-right: 0;
}
img.thumbnail:hover{
	border: 3px solid #357BFF;
}
</style>