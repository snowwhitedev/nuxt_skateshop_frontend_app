<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				Personal information
			</p>
			<div class="horizontal-line"></div>
		</div>
		<div class="content-body">
			<div class="form-row">
				<div class="form-input">
					<label>First name</label>
					<input type="text" class="input-md" value="Ben" >
				</div>
				<div class="form-input">
					<label>Last name</label>
					<input type="text" class="input-md" value="Jhamin">
				</div>
			</div>
			<div class="form-row" style="margin-top:20px;">
				<div class="form-input">
					<label>Gender</label>
					<radio-box class="input-field" :items="genders"/>
				</div>
				<div class="form-input">
					<label>Date of birth</label>
					<div class="input-field">
						<select-box :items="selDates" class="sel-date" placeholder="Day"/>
						<select-box :items="selMonths" class="sel-month" placeholder="Month"/>
						<select-box :items="selYears" class="sel-year" placeholder="Year"/>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-input" style="padding-left: 0">
					<label>Biography</label>
					<textarea placeholder="Tell us a little bit about yourself"></textarea>
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
			files: [],
			selDates:[1,2,3,4],
			selMonths: ['Jan', 'Feb', 'Mar'],
			selYears: [2018, 2019, 2020],
			genders:[
				{value: 'male', 'label':'Male', checked: true},
				{value: 'female', 'label':'Female', checked: false},
				{value: 'secret', 'label':"It's a secret", checked: false}
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
.horizontal-line.sep-last{
	margin-top: 40px;
	margin-bottom: 0;
}
.form-row{
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 30px;
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
	display: flex;
	height: 50px;
	align-items: center;
}
.sel-date{
	width: 100px;
	margin-right: 10px;
}
.sel-month{
	width:185px;
	margin-right: 10px;
}
.sel-year{
	width: 106px;
}
.form-row textarea{
	margin-top: 10px;
}
.form-action{
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}
</style>