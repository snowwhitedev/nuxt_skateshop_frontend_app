<template>
	<div class="vote-rate">
      <vote-star-btn v-for="idx in 5" :star-value="starVals[idx-1]" :key="idx" @onhover="onOverStar(idx)"/>
	</div>
</template>

<script>
import VoteStar from '@/components/Widgets/VoteStar.vue';
export default {
	name: "vote-rate-btn",
	components:{
		VoteStar,
	},

	data(){
		return{
			starVals:[0, 0, 0, 0, 0]
		}
	},
	created(){
		
	},
	methods:{
		onOverStar: function(idx){
			this.starVals = new Array();
			for (let ii = 0; ii < idx; ii++ ){
				this.starVals[ii] = 1;
			}
			for(let ii = idx; ii < 5; ii++){
				this.starVals[ii] = 0;
			}
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