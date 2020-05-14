<template>
	<div class="upload-image" @dragover.prevent @drop.prevent @dragleave="fileDragOut" @dragover="fileDragIn" @drop="handleFileDrop">
      <div class="file-select">
			<div class="file-wrapper">
				<input type="file" name="file-input" multiple="True" @change="handleFileInput" > 
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11 23C8.103 23 6 20.687 6 17.5V9C6 5.009 8.794 2 12.5 2C16.206 2 19 5.009 19 9V16H17V9C17 6.103 15.107 4 12.5 4C9.893 4 8 6.103 8 9V17.5C8 19.243 8.928 21 11 21C13.072 21 14 19.243 14 17.5V10C14 9.398 13.854 8 12.5 8C11.146 8 11 9.398 11 10V17H9V10C9 7.607 10.407 6 12.5 6C14.593 6 16 7.607 16 10V17.5C16 20.687 13.897 23 11 23Z" fill="#357BFF"/>
				</svg> 
				Browse file
			</div>
			<p> &nbsp; or drag & drop files here</p>
      </div>
		<p class="note">
			Please make sure your design is according to the specs below:
		</p>
		<ul class="remarks">
			<li>Dimensions: 2700 x 9900 px</li>
			<li>Resolution: 300 dpi</li>
			<li>Color mode: RGB</li>
			<li>File format: JPG</li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return{
			files:[]
		}
	}, 
	methods:{
		handleFileDrop(e) {
			let droppedFiles = e.dataTransfer.files;
			if(!droppedFiles) return;
			([...droppedFiles]).forEach(f => {
				// console.log("[uploadImage]", f);
				this.files.push(f);
			});
			this.color="#444444"
		},
		handleFileInput(e) {
			let files = e.target.files;
			files = e.target.files
			if(!files) return;
			([...files]).forEach(f => {
				this.files.push(f);
			});
		},
		removeFile(fileKey){
			this.files.splice(fileKey, 1)
		},
		fileDragIn(){
			this.color="white"
		},
		fileDragOut(){
			this.color="#444444"
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.upload-image{
	width:520px;
	height: 517px;
	border: 2px dashed #707780;
	box-sizing: border-box;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.file-select{
	display: flex;
	align-items: center;
}
.file-select p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
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
.note{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	text-align: center;
	color: #707780;
	margin-top: 40px;
	margin-bottom: 10px;
}
ul.remarks{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	color: #707780;
	list-style-type: disc;
	list-style-position: inside;
}
</style>