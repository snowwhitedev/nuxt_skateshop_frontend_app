<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				Account settings
			</p>
			<div class="horizontal-line"></div>
		</div>
		<div class="content-body">
			<div class="profile-picture">
				<img src="https://www.nretnil.com/avatar/swag_25k.jpg">
				<div class="file-wrapper">
					<input type="file" name="file-input" multiple="True" @change="handleFileInput" > 
					<svg class="icn-camera" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="40" height="40" rx="10" fill="#357BFF"/>
						<path d="M19.9993 15.3324C17.4721 15.3324 15.416 17.3885 15.416 19.9157C15.416 22.4439 17.4721 24.4991 19.9993 24.4991C22.5266 24.4991 24.5827 22.4439 24.5827 19.9157C24.5827 17.3876 22.5266 15.3324 19.9993 15.3324ZM19.9993 22.6657C18.4832 22.6657 17.2493 21.4319 17.2493 19.9157C17.2493 18.3996 18.4832 17.1657 19.9993 17.1657C21.5155 17.1657 22.7493 18.3996 22.7493 19.9157C22.7493 21.4319 21.5155 22.6657 19.9993 22.6657Z" fill="white"/>
						<path d="M27.334 13.4991H24.1577L22.8689 11.5658C22.5279 11.0543 21.9577 10.7491 21.3436 10.7491H18.6577C18.0436 10.7491 17.4734 11.0543 17.1324 11.5658L15.8436 13.4991H12.6673C11.6562 13.4991 10.834 14.3213 10.834 15.3324V25.4158C10.834 26.4268 11.6562 27.2491 12.6673 27.2491H27.334C28.3451 27.2491 29.1673 26.4268 29.1673 25.4158V15.3324C29.1673 14.3213 28.3451 13.4991 27.334 13.4991ZM12.6673 25.4158V15.3324H16.8244L18.6577 12.5824H21.3436L23.1769 15.3324H27.334L27.3349 25.4158H12.6673Z" fill="white"/>
					</svg>
				</div>
			</div>
			<div class="form-row">
				<div class="form-input">
					<label>Username&nbsp;<small>(This can not be changed)</small></label>
					<input type="text" class="input-md" value="davearts" readonly>
				</div>
				<div class="form-input">
					<label>Email address</label>
					<input type="email" class="input-md" value="ben_jhamin85@gmail.com">
				</div>
			</div>
			<div class="horizontal-line" style=""></div>
			<div class="form-row">
				<div class="form-input" style="padding-left:0;">
					<label>Current password</label>
					<input type="password" class="input-md" placeholder="Type your current password">
				</div>
			</div>
			<div class="form-row">
				<div class="form-input">
					<label>New password&nbsp;<small>(This can not be changed)</small></label>
					<input type="password" class="input-md" placeholder="Type your new password">
				</div>
				<div class="form-input">
					<label>Repeat new password</label>
					<input type="password" class="input-md" placeholder="Repeat your new password">
				</div>
			</div>
			<div class="horizontal-line" style=""></div>
			<div class="form-action">
				<btn-text btnClass="btn danger lg">Deactivate my account</btn-text>
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
			files: []
		}
	},
	methods:{
		handleFileInput(e) {
			let files = e.target.files;
			files = e.target.files
			if(!files) return;
			([...files]).forEach(f => {
				this.files.push(f);
			});
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
.profile-picture{
	width: 150px;
	height: 150px;
	border-radius: 35px;
	position:relative;
}
.profile-picture img{
	width: 100%;
	height: 100%;
	border-radius: 35px;
}
.file-wrapper{
	text-align: center;
	display: table-cell;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #357BFF;
}
.file-wrapper:hover{
	cursor: pointer;
}
.file-wrapper input{
	position: absolute;
	top: 0;
	right: 0;
	opacity: 0;
	cursor: pointer;
}
.profile-picture .file-wrapper{
	position: absolute;
	bottom:-8px;
	right: -8px;
}
.profile-picture .icn-camera:hover{
	cursor: pointer;
}
.form-row{
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
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
.form-action{
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
</style>