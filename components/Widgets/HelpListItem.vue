<template>
	<div class="help-listitem">
		<dropdown-panel :label="helpTopic" fontSize="16px">
			<div class="item-container">
				<div v-for="item in items" :key="item.id" class="article-item">
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
	// box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.5);
	height: 82px;
	padding: 30px 30px 30px 40px;
}
.item-container{
	display: flex;
	flex-wrap: wrap;
	padding-top: 20px;
}
.article-item{
	width: 50%;
	margin-bottom: 20px;
}
</style>