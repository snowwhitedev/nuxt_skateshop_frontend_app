<template>
	<button class="btn primary lg append" @click="clickBtn" :disabled="disabled">
		<slot ></slot>
		<div class="append-icon">
			<svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.0771 0.46967C13.7842 0.176777 13.3093 0.176777 13.0164 0.46967C12.7235 0.762563 12.7235 1.23744 13.0164 1.53033L14.0771 0.46967ZM17 4.45324L17.5303 4.98357C17.671 4.84291 17.75 4.65215 17.75 4.45324C17.75 4.25432 17.671 4.06356 17.5303 3.92291L17 4.45324ZM13.0164 7.37614C12.7235 7.66903 12.7235 8.14391 13.0164 8.4368C13.3093 8.72969 13.7842 8.72969 14.0771 8.4368L13.0164 7.37614ZM1 3.70324C0.585786 3.70324 0.25 4.03902 0.25 4.45324C0.25 4.86745 0.585786 5.20324 1 5.20324V3.70324ZM13.0164 1.53033L16.4697 4.98357L17.5303 3.92291L14.0771 0.46967L13.0164 1.53033ZM16.4697 3.92291L13.0164 7.37614L14.0771 8.4368L17.5303 4.98357L16.4697 3.92291ZM17 3.70324H1V5.20324H17V3.70324Z"
				fill="url(#paint0_radial)"/>
				<defs>
				<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.0388 6.72296) rotate(22.0001) scale(17.2566 12.0149)">
				<stop stop-color="#357BFF"/>
				<stop offset="1" stop-color="#2FBBFF"/>
				</radialGradient>
				</defs>
			</svg>
		</div>
	</button>
</template>

<script>
export default {
	name: "btn-append",
	props:{
		appendType:{
			type: String,
			default: 'arrow'
		},
		disabled:{
			type: Boolean,
			default: false
		}
	},
	methods:{
		clickBtn:function(event){
			event.preventDefault();
			this.$emit('onClick');
		}
	}
}
</script>

<style lang="scss" scoped>
.btn.append{
	// position: relative;
	display: flex;
	align-items: center;
	padding-top:0;
	padding-bottom: 0;
	padding-right: 5px;
	// max-width: fit-content;
}
.append-icon{
	width: 40px;
	height: 40px;
	background: #FFFFFF;
	border-radius: 3px;
	margin-left: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>