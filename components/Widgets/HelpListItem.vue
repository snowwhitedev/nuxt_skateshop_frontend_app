<template>
	<div class="help-listitem">
		<dropdown-panel :label="helpTopic" fontSize="16px">
			<div class="item-container">
				<div v-for="item in items" :key="item.id" class="article-item">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.2734 1.33333H3.9974C3.26206 1.33333 2.66406 1.93199 2.66406 2.66666V13.3333C2.66406 14.0687 3.26206 14.6667 3.9974 14.6667H11.9974C12.7327 14.6667 13.3307 14.0687 13.3307 13.3333V4.39066L10.2734 1.33333ZM11.9981 13.3333H3.9974V2.66666H9.33073V5.33333H11.9974L11.9981 13.3333Z" fill="#357BFF"/>
						<path d="M9.33203 7.33333H5.33203V8.66666H9.33203V7.33333Z" fill="#357BFF"/>
						<path d="M10.6654 9.99999H5.33203V11.3333H10.6654V9.99999Z" fill="#357BFF"/>
					</svg>
					<btn-textlink rightIcon="arrow" btnClass="btn textlink thin">{{ item.title }}</btn-textlink>
				</div>
			</div>
		</dropdown-panel>
	</div>
</template>

<script>
export default {
	props:{
		helpTopic:{
			type: String,
			default: null
		},
		items:{
			type:Array,
			default: []
		}
	}
}
</script>

<style lang="scss" scoped>
.help-listitem{
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
	padding: 30px 30px 30px 40px;
}
.item-container{
	display: flex;
	flex-wrap: wrap;
	padding-top: 20px;
	flex-direction: row;
}
.article-item{
	width: 50%;
	margin-bottom: 20px;
	display: flex;
}
.article-item svg{
	margin-right: 10px;
}
@media (max-width: 767px) {
	.help-listitem{
		padding: 20px 10px 20px 20px;
	}
	.item-container{
		flex-direction: column;
	}
	.article-item{
		width: 100%;
	}
}
</style>