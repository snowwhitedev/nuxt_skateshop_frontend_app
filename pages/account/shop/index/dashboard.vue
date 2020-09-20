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
			<div class="flow-container">
				<div class="graph-section">
					<p>Sales</p>
					<div class="graph-container" id="chartcontainter">
						<canvas id="sales-chart" style="padding: 0 20px 20px 10px; width: 520px; height: 210px;"></canvas>
					</div>
				</div>
			</div>
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
import Chart from 'chart.js';
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
				{label:'Total earnings', content: '€ 120,00', intend: 1, text: ' 23,0% increased' },
				{label:'Total orders', content: '12', intend: -1, text: '2.0% decreased' },
				{label:'Average order sale', content: '€ 62,13', intend: 1, text: '1.7% increased' },
				{label:'Outpayment', content: '3 days', intend: 0, text: 'Until next payment' }
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
	},
	mounted(){
		const dailyLabel = [];
		const dailyValue = [];
		for(let i =1; i<=31; i++){
			dailyLabel.push(i);
			dailyValue.push(Math.floor(Math.random() * 3));
		}
		const salesChartData = {
			type: 'bar',
			data: {
				datasets: [{
					label: "Sales",
					backgroundColor: "#357BFF",
					data: [0,1,2,0,0],
					// barThickness: 7,
					categoryPercentage: 1,
					barPercentage: 0.6,
				}]
			},
			options: {
				legend: { display: false },
				title: {
					display: false,
				},
				
				scales: {
					xAxes: [{
						display: true,
						labels: dailyLabel,
						gridLines:{
							display: false
						},
						ticks:{
							fontFamily: "Nunito",
							fontSize : 8,
							fontColor:  "#707780",
							padding: 0,
							tickMarkLength: 8
						}

					}],
					yAxes: [{
						display: true,
						gridLines:{
							display: false
						},
						ticks:{
							callback: function(value, index, values) {
								const intVal = parseInt(value);
								return (intVal === value)? intVal : '';  
							}
						}
					}]
				}
			}
		}
		this.createSalesChart('sales-chart', salesChartData);
	},
	methods:{
		createSalesChart(chartId, chartData){
			if(process.client) {
				const ctx = document.getElementById(chartId);
				const salesChart = new Chart(ctx, {
					type: chartData.type,
					data: chartData.data,
					options: chartData.options,
				});
			}
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
	flex-wrap: wrap;
}
.status-item{
	width: calc(25% - 15px);
}
.graph-section{
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
	width: 520px;
	// width: 600px;
	height: 262px;
}
.graph-section p{
	padding: 20px 20px 10px 20px;
	font-family: $font-family-primary;
	font-size: 16px;
	font-weight: bold;
}
.sales-data{
	background: #FFFFFF;
	border: 1px solid #F3F4F4;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
	width: 304px;
	padding: 20px;
	margin-bottom: 50px;
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

@media (max-width: 1297px){
	.status-item{
		width: calc(50% - 10px);
		margin-bottom: 10px;
	}
	.flow-container{
		width: 520px;
		overflow-x: auto;
		overflow-y: hidden;
	}
	.sales-data{
		margin-top: 30px;
	}
}
@media (max-width: 767px){
	.status-item{
		width: calc(50% - 5px);
	}
}
</style>