<template>
	<div class="account-content-container">
        <nuxt-link to="/account/shop/designs"><btn-textlink btnClass="btn textlink thin" leftIcon='arrow'>Back to my designs</btn-textlink></nuxt-link>
		<div class="content-header">
			<p class="content-brand">
				Through the Forrest
			</p>
            <div class="design-rate">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8087 7.14487C18.6852 6.8458 18.3917 6.65016 18.0678 6.65016H13.7526L11.5685 2.28281C11.2967 1.74 10.4059 1.74 10.1341 2.28281L7.95081 6.65016H3.63557C3.31165 6.65016 3.01819 6.8458 2.89472 7.14487C2.77124 7.44394 2.83939 7.79031 3.0687 8.01882L6.74411 11.6942L5.27042 16.8537C5.17822 17.1769 5.29688 17.5232 5.56789 17.7213C5.84049 17.9201 6.20691 17.9273 6.48513 17.7405L10.8517 14.83L15.2174 17.7405C15.3521 17.8303 15.5069 17.8752 15.6624 17.8752C15.8284 17.8752 15.9944 17.8239 16.1355 17.7213C16.4065 17.5232 16.5252 17.1769 16.433 16.8537L14.9593 11.6942L18.6347 8.01882C18.864 7.79031 18.9321 7.44394 18.8087 7.14487Z" fill="#FFA057"/>
                </svg>
                <p class="rate-mark">4.7&nbsp;<small>/&nbsp;5 rating</small></p>
            </div>
		</div>
		<div class="content-body">
			<div class="left-col"></div>
            <div class="right-col">
                <edit-design />
            </div>
		</div>
	</div>
</template>

<script>
import EditDesign from '@/components/Widgets/EditDesign.vue';
export default {
    layout:'layout_account',
    components:{
        EditDesign
    },
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
	margin-right: 20px;
}
.content-header{
    margin-top: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.design-rate{
	display: flex;
	align-items: center;
}
p.rate-mark{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 1;
	color: #283441;
	margin-left: 10px;
}
p.rate-mark small{
	font-weight: 300;
	font-size: 80%;
}
.content-body{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}
.left-col{
    width: 304px;
    height: 1114px;
    background: gray;
    margin-left:40px;
}
.right-col{
    width:412px;
    background: #FAFAFB;
    // background: #cccccc;
    border-radius: 5px;
    // height: 100px;
}
</style>