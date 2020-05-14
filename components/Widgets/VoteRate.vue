<template>
	<div class="vote-rate">
		<vote-star :starValue="starVals[0]" :starSize="starSize" />
		<vote-star :starValue="starVals[1]" :starSize="starSize" />
		<vote-star :starValue="starVals[2]" :starSize="starSize" />
		<vote-star :starValue="starVals[3]" :starSize="starSize" />
		<vote-star :starValue="starVals[4]" :starSize="starSize" />
	</div>
</template>

<script>
import VoteStar from '@/components/Widgets/VoteStar.vue';
export default {
	name: "vote-rate",
	components:{
		VoteStar,
	},
	props:{
		rateVal:{
			type:Number,
			default: 0
		},
		starSize:{
			type: String,
			default: 'sm'
		}
	},
	data(){
		return{
			starVals:[]
		}
	},
	created(){
		const fullStars = ~~this.rateVal;
		for(let ii=0; ii < fullStars; ii++){
			this.starVals[ii] = 1;
		}
		this.starVals[fullStars] = this.rateVal - fullStars;
		for(let ii = fullStars+1; ii < 5; ii++){
			this.starVals[ii] = 0;
		}
	}
	
}
</script>

<style lang="scss" scoped>
.vote-rate{
	position: relative;
	display: flex;
}
</style>