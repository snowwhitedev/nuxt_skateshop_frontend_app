<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				Contact details
			</p>
			<div class="horizontal-line"></div>
		</div>
		<div class="content-body">
			<div class="form-row">
				<div class="form-input">
					<label>Address line 1</label>
					<input type="text" class="input-md" value="" placeholder="South main street 467">
				</div>
				<div class="form-input">
					<label>Address line 2</label>
					<input type="text" class="input-md" value="" placeholder="Building 523, appartment 7B">
				</div>
			</div>
			<div class="form-row">
				<div class="form-input">
					<label>City</label>
					<input type="text" class="input-md" value="" placeholder="San Francisco">
				</div>
				<div class="form-input">
					<label>State / Province / Region</label>
					<input type="text" class="input-md" value="" placeholder="California">
				</div>
			</div>
			<div class="form-row" style="margin-top:20px;">
				<div class="form-input">
					<label>Zip code / Postal code</label>
					<input type="text" class="input-md" value="" placeholder="CA37485">
				</div>
				<div class="form-input">
					<label>Country</label>
					<select-box :items="countries" placeholder="Select your country" class="input-field"/>
				</div>
			</div>

			<div class="form-row">
				<div class="form-input" style="padding-left: 0; padding-right: 10px;">
					<label>Phone number&nbsp;<small>(Must include your country code e.g. +31)</small></label>
					<input type="text" class="input-md" value="" placeholder="+31612345687">
				</div>
			</div>
			<div class="horizontal-line sep" style=""></div>
			<div class="form-row">
				<div class="form-input">
					<label>Bank account number&nbsp;<small>(Your IBAN number)</small></label>
					<input type="text" class="input-md" value="" placeholder="NL83ABNA1029384648">
				</div>
				<div class="form-input">
					<label>Account holder name</label>
					<input type="text" class="input-md" value="" placeholder="Ben Jhamin">
				</div>
			</div>
			<div class="form-row">
				<div class="form-input">
					<label>Bank Name</label>
					<input type="text" class="input-md" value="" placeholder="Deutsche Bank">
				</div>
				<div class="form-input">
					<label>Bank country&nbsp;<small>(Where your bank account is registered)</small></label>
					<select-box :items="countries" placeholder="Select your country" class="input-field"/>
				</div>
			</div>
			<div class="horizontal-line sep-last" style=""></div>
			<div class="form-action">
				<btn-text btnClass="btn primary lg">Save information</btn-text>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout:'layout_account',
	data(){
		return{
			countries: ['Netherland', 'Belarus', 'Canada'],
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
	margin-bottom: 20px;
}
.content-header{
	margin-bottom: 30px;
}
.horizontal-line{
	// border: 1px solid #E7E8EA;
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.horizontal-line.sep{
	margin-top: 40px;
	margin-bottom: 40px;
}
.horizontal-line.sep-last{
	margin-top: 40px;
	margin-bottom: 0;
}
.form-row{
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 20px;
}
.form-row:first-child{
	margin-top: 0;
}
.form-input{
	width: 50%;
	padding-right: 10px;
}
.form-input:last-child{
	padding-left: 10px;
	padding-right: 0;
}
.form-input label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}
.form-input input{
	margin-top: 10px;
}
.form-input .input-field{
	margin-top: 10px;
}

.form-row textarea{
	margin-top: 10px;
}
.form-action{
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
	margin-bottom: 50px;
}
@media (max-width: 1023px){
	.form-row{
		flex-direction: column;
		align-items: flex-start;
		margin-top:20px;
		margin-bottom: 0;
	}
	
	.profile-picture{
		width: 100px;
		height: 100px;
	}
	.form-input{
		width: 100% !important;
		padding: 0px !important;
	}
	.input-md{
		max-width: 100%;
	}
	.form-input:last-child {
		padding-left: 0px !important;
		margin-top: 20px;
	}
	p.content-brand{
		font-size: 20px;
		line-height: 27px;
	}
	
}
</style>