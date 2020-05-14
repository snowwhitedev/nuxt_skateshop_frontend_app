<template>
  <div class="account-shop-settings">
	<div class="banner-image-setting">
		<img src="https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg">
		<div class="file-wrapper">
			<input type="file" name="file-input" @change="handleFileInput" > 
			<svg class="icn-camera" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="40" height="40" rx="10" fill="#357BFF"/>
				<path d="M19.9993 15.3324C17.4721 15.3324 15.416 17.3885 15.416 19.9157C15.416 22.4439 17.4721 24.4991 19.9993 24.4991C22.5266 24.4991 24.5827 22.4439 24.5827 19.9157C24.5827 17.3876 22.5266 15.3324 19.9993 15.3324ZM19.9993 22.6657C18.4832 22.6657 17.2493 21.4319 17.2493 19.9157C17.2493 18.3996 18.4832 17.1657 19.9993 17.1657C21.5155 17.1657 22.7493 18.3996 22.7493 19.9157C22.7493 21.4319 21.5155 22.6657 19.9993 22.6657Z" fill="white"/>
				<path d="M27.334 13.4991H24.1577L22.8689 11.5658C22.5279 11.0543 21.9577 10.7491 21.3436 10.7491H18.6577C18.0436 10.7491 17.4734 11.0543 17.1324 11.5658L15.8436 13.4991H12.6673C11.6562 13.4991 10.834 14.3213 10.834 15.3324V25.4158C10.834 26.4268 11.6562 27.2491 12.6673 27.2491H27.334C28.3451 27.2491 29.1673 26.4268 29.1673 25.4158V15.3324C29.1673 14.3213 28.3451 13.4991 27.334 13.4991ZM12.6673 25.4158V15.3324H16.8244L18.6577 12.5824H21.3436L23.1769 15.3324H27.334L27.3349 25.4158H12.6673Z" fill="white"/>
			</svg>
		</div>
	</div>
	<div class="shop-setting">
		<div class="shop-logo">
			<img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
			<div class="file-wrapper">
				<input type="file" name="file-input" @change="handleFileInput" > 
				<svg class="icn-camera" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="40" height="40" rx="10" fill="#357BFF"/>
					<path d="M19.9993 15.3324C17.4721 15.3324 15.416 17.3885 15.416 19.9157C15.416 22.4439 17.4721 24.4991 19.9993 24.4991C22.5266 24.4991 24.5827 22.4439 24.5827 19.9157C24.5827 17.3876 22.5266 15.3324 19.9993 15.3324ZM19.9993 22.6657C18.4832 22.6657 17.2493 21.4319 17.2493 19.9157C17.2493 18.3996 18.4832 17.1657 19.9993 17.1657C21.5155 17.1657 22.7493 18.3996 22.7493 19.9157C22.7493 21.4319 21.5155 22.6657 19.9993 22.6657Z" fill="white"/>
					<path d="M27.334 13.4991H24.1577L22.8689 11.5658C22.5279 11.0543 21.9577 10.7491 21.3436 10.7491H18.6577C18.0436 10.7491 17.4734 11.0543 17.1324 11.5658L15.8436 13.4991H12.6673C11.6562 13.4991 10.834 14.3213 10.834 15.3324V25.4158C10.834 26.4268 11.6562 27.2491 12.6673 27.2491H27.334C28.3451 27.2491 29.1673 26.4268 29.1673 25.4158V15.3324C29.1673 14.3213 28.3451 13.4991 27.334 13.4991ZM12.6673 25.4158V15.3324H16.8244L18.6577 12.5824H21.3436L23.1769 15.3324H27.334L27.3349 25.4158H12.6673Z" fill="white"/>
				</svg>
			</div>
		</div>
		<div class="setting-detail">
			<div class="form-input">
				<label>Skateshop name</label>
				<input class="input-md" />
			</div>
			<div class="form-input">
				<label>Description</label>
				<textarea class="input-field"></textarea>
			</div>
			<div class="form-input url">
				<label>Your skateshop URL&nbsp;<small>(A way to make it easy for people to find you)</small></label>
				<div class="shop-url">
					<p>https://www.deckend.com/s/&nbsp;</p>
					<input class="input-md" />
				</div>
			</div>
			<div class="horizontal-line"></div>
			<div class="form-action">
				<btn-text btnClass="btn primary lg">Save information</btn-text>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
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
.banner-image-setting{
	width: 100%;
	height: 150px;
	position: relative
}
.banner-image-setting img{
	width: 100%;
	height: 150px;
}
.file-wrapper{
	text-align: center;
	display: table-cell;
	position: absolute;
	right: -8px;
	bottom: -8px;
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
.icn-camera:hover{
	cursor: pointer;
}
.shop-setting{
	margin-top: 40px;
	display: flex;
}
.shop-logo{
	width: 150px;
	min-width: 150px;
	height: 150px;
	position: relative;
	margin-right: 60px;
}
.shop-logo img{
	width: 150px;
	min-width: 150px;
	height: 150px;
	border-radius: 35px;
}
.setting-detail{
	width: 100%;
}
.form-input{
	display: flex;
	flex-direction: column;
	max-width: 411px;
	margin-bottom: 20px;
}
.form-input label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	margin-bottom: 10px;
}
label small{
	font-weight: normal;
}
.shop-url{
	display: flex;
	align-items: center;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #707780;
}
.form-input.url{
	margin-top: 40px;
	margin-bottom: 40px;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.form-action{
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}
</style>