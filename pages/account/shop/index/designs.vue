<template>
	<div class="account-designs">
		<card-designline v-for="item in data" :key="item.id" class="account-design"/>
		<mobile-loading v-if="showLoading"></mobile-loading>
	</div>
</template>

<script>
export default {
	scrollToTop: true,
	data() {
		return {
			showLoading: false,
			pageNum: 1,
			itemsPerPage: 4,
			fetching: false,
			fetchCompleted: false,
			data: []
		}
	},
	async created() {
		if(process.client) {
			window.addEventListener('scroll', this.handleScroll);
		}
		if (this.$device.isMobile) {
			await this.$store.dispatch('uiprops/setShowMobileFooter', false)
		}
		await this.getData({ pageNum: this.pageNum, itemsPerPage: this.itemsPerPage })
		this.pageNum++;
	},
	methods: {
		async handleScroll(event) {
			if (!this.$device.isMobile) return;
			if ( this.fetchCompleted ) {
				this.$store.dispatch('uiprops/setShowMobileFooter', true);
				return;
			}
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				if( this.fetching ) return;
				this.showLoading = true;
				this.fetching = true;
				await this.getData( { pageNum: this.pageNum, itemsPerPage: this.itemsPerPage })
				this.showLoading = false;
				this.fetching = false;
				this.pageNum++;
			}
		},
		getData(params) {
			return new Promise((resolve, reject) => {
				const fakeData= [
					{id: 1},
					{id: 2},
					{id: 3},
					{id: 4},
					{id: 5},
					{id: 6},
					{id: 7},
					{id: 8},
					{id: 9},
					{id: 10},
					{id: 11},
					{id: 12},
				]
				if (!this.$device.isMobile){
					this.data = fakeData;
					resolve();
				}
				if (this.$device.isMobile) {
					if (fakeData.length <= ( params.pageNum - 1) * params.itemsPerPage) {
						this.fetchCompleted =  true;
						resolve();
					} else {
						setTimeout(() => {
							this.data = this.data.concat(fakeData.slice((params.pageNum - 1) * params.itemsPerPage, params.pageNum * params.itemsPerPage));
							resolve();
						}, 800)
					} 
				}
				
			})
			
		}
	}
}
</script>

<style lang="scss" scoped>
.account-design{
	margin: 20px auto 0;
}
@media (min-width: 768px){
	.account-designs{
		margin-bottom: 60px;
	}
}

</style>