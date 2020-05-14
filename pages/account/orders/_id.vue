<template>
	<div class="order-details">
		<nuxt-link to="/account/orders"><btn-textlink btnClass="btn textlink thin" leftIcon='arrow'>Back to my orders</btn-textlink></nuxt-link>
		<div class="content-header">
			<p class="content-brand">
				Order details (CA00991122)
			</p>
			<div class="horizontal-line"></div>
			<div class="col-space"></div>
			<div class="form-row">
				<div class="col order">
					<div class="col-item">
						<p class="col-title">
							Order number
						</p>
						<div class="col-content">
							CA00991122
						</div>
					</div>
					<div class="col-space"></div>
					<div class="col-item">
						<p class="col-title">
							Order date
						</p>
						<div class="col-content">
							04 September 2019
						</div>
					</div>
				</div>
				<div class="col address">
					<div class="col-item">
						<p class="col-title">
							Shipping address
						</p>
						<div class="col-content">
							<ul>
								<li>Mr. Leon Steneker</li>
								<li>Westerwold 4</li>
								<li>9637 EJ WILDERVANK</li>
								<li>The Netherlands</li>
							</ul>
						</div>
					</div>
					<div class="col-space"></div>
					<div class="col-item">
						<p class="col-title">
							Shipping address
						</p>
						<div class="col-content">
							<ul>
								<li>Mr. Leon Steneker</li>
								<li>Westerwold 4</li>
								<li>9637 EJ WILDERVANK</li>
								<li>The Netherlands</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col summary">
					<div class="col-item">
						<p class="col-title">
							Order summary
						</p>
						<div class="col-content">
							<table>
								<tbody>
									<tr>
										<td width="40%">Total itmes (2)</td>
										<td width="60%" align="right">€ 65,50</td>
									</tr>
									<tr>
										<td width="40%">Discount (20%)</td>
										<td width="60%" align="right">-€ 13,10</td>
									</tr>
									<tr>
										<td width="40%" >Shipping</td>
										<td width="60%" align="right">€ 8,50</td>
									</tr>
									<tr>
										<td width="40%">&nbsp;</td>
										<td width="60%" align="right" style="vertical-align:middle;"><div class="horizontal-line"></div></td>
									</tr>
									<tr>
										<td width="40%">Total</td>
										<td width="60%" align="right">€ 60,40</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="col-space"></div>
					<div class="col-item">
						<p class="col-title">
							Payment method
						</p>
						<div class="col-content">
							<table>
								<tbody>
									<tr>
										<td width="40%">Creditcard (Mastercard)</td>
										<td width="60%" align="right">€ 60,40</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="col-space"></div>
					<div class="col-item">
						<p class="col-title">
							Shipping method
						</p>
						<div class="col-content">
							<table>
								<tbody>
									<tr>
										<td width="40%">Standard shipping - EU</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>			
				</div>
			</div>
			<div class="col-space"></div>
			<div class="col-space"></div>
			<div class="form-row">
				<table class="invoice">
					<thead>
						<tr>
							<th>Invoice number</th>
							<th>Invoice date</th>
							<th>Invoice status</th>
							<th>Order total</th>
							<th>&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="bold">20190004658292</td>
							<td class="bold">04/09/2019</td>
							<td><tag-status :status="2">Paid</tag-status></td>
							<td class="bold">€ 60,40</td>
							<td align="right"><btn-text btnClass="btn gray sm">Download</btn-text></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="products">
				<card-productline-simpe class="product-item"/>
				<card-productline-simpe class="product-item"/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
layout:'layout_account',
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";

p.content-brand{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	margin-bottom: 20px;
	margin-top: 20px;
}
.content-header{
	margin-bottom: 30px;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.form-row{
	width: 100%;
	display: flex;
}
.col{
	display:flex;
	flex-direction: column;
}
.col.order{
	width: 25%;
}
.col.address{
	width: 25%;
}
.col.summary{
	width: 50%;
	padding-right: 5%;
}
.col-space{
	width: 100%;
	height: 30px;
}
.col-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}
.col-content{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #283441;
}
table{
	width: 100%;
}
.invoice thead th{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #707780;
	border-bottom: 1px solid #E7E8EA;
	padding-bottom: 10px;
}
.invoice tbody td{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #283441;
	padding-top: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E7E8EA;
	vertical-align: middle;
}
.invoice tbody td.bold{
	font-weight: bold;
}
.product-item{
	margin-top: 20px;
}
</style>