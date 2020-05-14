<template>
	<div class="account-dashboard">
		<div class="filter-row">
			<dropdown-input label="View" :items="sortView"/>
			<dropdown-input label="Period" :items="sortPeriod"/>
		</div>
		<div class="content-row">
			<div class="status-item" v-for="st in shopStatus" :key="st.label">
				<card-status :label="st.label" :content="st.content" :intend="st.intend" :text="st.text"/>
			</div>
		</div>
		<div class="content-row">
			<div class="graph-section">this is graph section</div>
			<div class="sales-data">
				<p class="section-title">
					Sales per product
				</p>
				<ul>
					<li v-for="(sd, idx) in salesData" :key="idx">
						<p>{{idx+1}}.&nbsp;<span class="product-name">{{sd.product}}</span></p>
						<p class="product-value">{{sd.value}}</p>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
import CardStatus from '@/components/Cards/CardStatus.vue';
export default {
	components:{
		CardStatus
	},
	data(){
		return{
			sortView:[
				{ "value": "january", text: "January" },
				{ "value": "february", text: "February" },
				{ "value": "march", text: "March" },
				{ "value": "april", text: "April" }
			],
			sortPeriod:[
				{ "value": "january", text: "January" },
				{ "value": "february", text: "February" },
				{ "value": "march", text: "March" },
				{ "value": "april", text: "April" }
			],
			shopStatus:[
				{label:'total earnings', content: '€ 120,00', intend: 1, text: ' 23,0% increased' },
				{label:'total orders', content: '12', intend: -1, text: '2.0% decreased' },
				{label:'average order sale', content: '€ 62,13', intend: 1, text: '1.7% increased' },
				{label:'outpayment', content: '3 days', intend: 0, text: 'Until next payment' }
			],
			salesData:[
				{ product:'Hurley X Machina Gold', value: 4},
				{ product:'Moonwalk', value: 3},
				{ product:'Dog in Box', value: 2},
				{ product:'Black and White', value: 1},
				{ product:'Redbull Masters', value: 1},
				{ product:'Heart of Gold', value: 1}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.filter-row{
	display: flex;
	justify-content: flex-end;
}
.filter-row .dropdown-input:first-child{
	margin-right: 40px;
}
.content-row{
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.status-item{
	width: calc(25% - 15px);
}
.graph-section{
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	// border: 1px solid black;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
	width: 520px;
	height: 262px;
}
.sales-data{
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
	width: 304px;
	padding: 20px;
}
.sales-data .section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #283441;
	margin-bottom: 20px;
}
.sales-data ul li{
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
}
.sales-data ul li:last-child{
	margin-bottom: 0;
}
.sales-data ul li p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
}
.sales-data ul li p span.product-name{
	font-weight: bold;
	color:#357BFF;
}
.sales-data ul li p.product-value{
	font-weight: 600;
}
</style>