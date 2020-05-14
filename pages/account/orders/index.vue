<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				My orders
			</p>
			<dropdown-input label="Sort by" :items="sortKeys"/>
		</div>
		<div class="content-body">
			<table>
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
					<tr v-for="order in orders" :key="order.id">
						<td><textlink>{{ order.order_num }}</textlink></td>
						<td class="order-date">{{ order.date }}</td>
						<td>
							<tag-status :status="order.status">{{ order.statusText }}</tag-status>
						</td>
						<td class="order-total">
							€&nbsp;{{ order.total }}
						</td>
						<td align="right">
							<nuxt-link :to="`/account/orders/1`"><btn-text btnClass="btn secondary sm">See details</btn-text></nuxt-link>
						</td>
					</tr>
				</tbody>
			</table>
			<pagination :totalPages="3" />
		</div>
	</div>
</template>

<script>
export default {
	layout:'layout_account',
	
	data(){
		return{
			sortKeys:[
				{"value": "relevance", text: "relevance"},
				{"value": "newness", text: "newness"},
				{"value": "popularity", text: "popularity"}
			],
			orders:[
				{id: 1, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
				{id: 2, order_num:"CA00991122", date:'04/09/2019', status:1, statusText:"In transit", total: '65,50'},
				{id: 3, order_num:"CA00991122", date:'04/09/2019', status:2, statusText:"Completed", total: '65,50'},
				{id: 4, order_num:"CA00991122", date:'04/09/2019', status:3, statusText:"Failed", total: '65,50'},
				{id: 5, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
				{id: 6, order_num:"CA00991122", date:'04/09/2019', status:0, statusText:"Pending payment", total: '65,50'},
				{id: 7, order_num:"CA00991122", date:'04/09/2019', status:1, statusText:"In transit", total: '65,50'},
			]
		}
	},
	methods:{
		
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
td.order-date{
	font-family: $font-family-primary;
	color: #283441;
}
td.order-total{
	font-weight: bold;
	color: #283441;
}

</style>