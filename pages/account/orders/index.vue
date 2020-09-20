<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				My orders
			</p>
			<dropdown-input label="Sort by" :items="sortKeys"/>
		</div>
		<div class="content-body">
			<table class="order-table">
				<thead>
					<tr>
						<th>Order number</th>
						<th>Order date</th>
						<th>Order status</th>
						<th>Order total</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="order in orders" :key="order.id" @click="goDetail(order.id)">
						<td>
							<p class="order-date mobile-only-1023">{{ order.date }}</p>
							<textlink>{{ order.order_num }}</textlink>
						</td>
						<td class="order-date desktop-only-1023">{{ order.date }}</td>
						<td>
							<tag-status :status="order.status">{{ order.statusText }}</tag-status>
						</td>
						<td class="order-total">
							€&nbsp;{{ order.total }}
						</td>
						<td align="right">
							<nuxt-link :to="`/account/orders/1`">
								<btn-text btnClass="btn secondary sm" class="desktop-only-1023">See details</btn-text>
								<span class="mobile-only-1023">
									<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.600098 10.8L5.4001 6L0.600097 1.2" stroke="#2D3748" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</span>
							</nuxt-link>
						</td>
					</tr>
				</tbody>
			</table>
			<mobile-loading v-if="showLoading"></mobile-loading>
			<pagination v-if="!$device.isMobile" :totalPages="3" />
		</div>
	</div>
</template>

<script>
export default {
	layout:'layout_account',
	scrollToTop: true,
	data(){
		return{
			sortKeys:[
				{"value": "relevance", text: "relevance"},
				{"value": "newness", text: "newness"},
				{"value": "popularity", text: "popularity"}
			],
			orders:[],
			showLoading: false,
			pageNum: 1,
			itemsPerPage: 7,
			fetching: false,
			fetchCompleted: false
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
	methods:{
		goDetail(idx) {
			this.$router.push(`/account/orders/${idx}`);
		},
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
					{id: 1, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
					{id: 2, order_num:"CA00991122", date:'04/09/2019', status:1, statusText:"In transit", total: '65,50'},
					{id: 3, order_num:"CA00991122", date:'04/09/2019', status:2, statusText:"Completed", total: '65,50'},
					{id: 4, order_num:"CA00991122", date:'04/09/2019', status:3, statusText:"Failed", total: '65,50'},
					{id: 5, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
					{id: 6, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
					{id: 7, order_num:"CA00991122", date:'04/09/2019', status:1, statusText:"In transit", total: '65,50'},
					{id: 8, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
					{id: 9, order_num:"CA00991122", date:'04/09/2019', status:1, statusText:"In transit", total: '65,50'},
					{id: 10, order_num:"CA00991122", date:'04/09/2019', status:2, statusText:"Completed", total: '65,50'},
					{id: 11, order_num:"CA00991122", date:'04/09/2019', status:3, statusText:"Failed", total: '65,50'},
					{id: 12, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
					{id: 13, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
					{id: 14, order_num:"CA00991122", date:'04/09/2019', status:1, statusText:"In transit", total: '65,50'},
				]
				if (!this.$device.isMobile){
					this.orders = fakeData;
					resolve();
				}
				if (this.$device.isMobile) {
					if (fakeData.length <= ( params.pageNum - 1) * params.itemsPerPage) {
						this.fetchCompleted =  true;
						resolve();
					} else {
						setTimeout(() => {
							this.orders = this.orders.concat(fakeData.slice((params.pageNum - 1) * params.itemsPerPage, params.pageNum * params.itemsPerPage));
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
@import "~assets/css/variable.scss";
.account-content-container{
	padding-top: 40px;
}
p.content-brand{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
}
.content-header{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
}
table{
	width: 100%;
}
table th{
	border-bottom: 1px solid #E7E8EA;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #707780;
	padding-bottom: 10px;
}
table tbody{
	padding-top: 30px;
}
tbody tr:first-child td{
	padding-top: 30px;
}
tbody tr td{
	padding-top: 30px;
	vertical-align: middle;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
}
.order-date{
	font-family: $font-family-primary;
	color: #283441;
}
td.order-total{
	font-weight: bold;
	color: #283441;
}
.content-body{
	margin-bottom: 50px;
}
.desktop-only-1023{
	display: table-cell;
}
.mobile-only-1023{
	display: none;
}
@media (max-width: 1023px){
	.content-header{
		margin-bottom: 0;
	}
	.order-table thead{
		display: none;
	}
	.desktop-only-1023{
		display: none;
	}
	.mobile-only-1023{
		display: block;
	}
	.order-date{
		font-size: 10px;
		line-height: 14px;
	}
}
</style>