<template>
	<div class="card-design-line">
		<img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
		<div class="card-content">
			<nuxt-link :to="`/account/shop/designs/1/edit`" ><textlink btnClass="textlink blue" class="btn-edit">Edit</textlink></nuxt-link>
			<div class="content-col first">
				<p class="card-title">
					<span class="main">Hurley X Machina Gold</span>
				</p>
				<div class="design-rate">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.8087 7.14487C18.6852 6.8458 18.3917 6.65016 18.0678 6.65016H13.7526L11.5685 2.28281C11.2967 1.74 10.4059 1.74 10.1341 2.28281L7.95081 6.65016H3.63557C3.31165 6.65016 3.01819 6.8458 2.89472 7.14487C2.77124 7.44394 2.83939 7.79031 3.0687 8.01882L6.74411 11.6942L5.27042 16.8537C5.17822 17.1769 5.29688 17.5232 5.56789 17.7213C5.84049 17.9201 6.20691 17.9273 6.48513 17.7405L10.8517 14.83L15.2174 17.7405C15.3521 17.8303 15.5069 17.8752 15.6624 17.8752C15.8284 17.8752 15.9944 17.8239 16.1355 17.7213C16.4065 17.5232 16.5252 17.1769 16.433 16.8537L14.9593 11.6942L18.6347 8.01882C18.864 7.79031 18.9321 7.44394 18.8087 7.14487Z" fill="#FFA057"/>
					</svg>
					<p class="rate-mark">4.7&nbsp;<small>/&nbsp;5 rating</small></p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Contest
					</p>
					<p class="item-value">
						Redbull - Make it Count
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Date published
					</p>
					<p class="item-value">
						23/07/2019
					</p>
				</div>
			</div>
			<div class="content-col second">
				<div class="col-item">
					<p class="item-name">
						Category
					</p>
					<p class="item-value">
						Funny
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Colors
					</p>
					<p class="item-value">
						Red, Blue, Orange
					</p>
				</div>
				<div class="col-item">
					<p class="item-name">
						Tags
					</p>
					<p class="item-value">
						moonwalk, cow, pluto, colors
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'card-design-line',
	props:{

	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.card-design-line{
	width: 100%;
	display: flex;
	flex-direction: row;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	border-radius: 5px;
}
.card-design-line img{
	width: 196px;
	height: 214px;
}
.card-content{
	width: 100%;
	padding: 20px;
	display: flex;
	position: relative;
	flex-direction: row;
}
.btn-edit{
	position: absolute;
	right: 20px;
	top: 24px;
}
.content-col{
	width: 50%;
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
.content-col.second{
	padding-top: 10px;
}
.card-title{
	display: flex;
	flex-direction: column;
}
.card-title .main{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
}

.col-item{
	display: flex;
	flex-direction: column;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
	margin-top: 10px;
}
.col-item .item-value{
	font-weight: normal;
	font-size: 12px;
}

@media (max-width: 1023px){
	.card-design-line{
		flex-direction: column;
		width: 335px;
	}
	.card-design-line img{
		width: 335px;
		height: 335px;
	}
	.card-content{
		flex-direction: column;
	}
	.content-col{
		width: 100%;
	}
}
</style>