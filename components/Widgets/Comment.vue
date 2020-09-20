<template>
	<div class="comment">
		<user-comment />
		<div class="other-comments">
			<user-comment style="margin-bottom:40px;"/>
			<user-reply />
		</div>
	</div>
</template>

<script>
import UserComment from '@/components/Widgets/UserComment.vue';
import UserReply from '@/components/Widgets/UserReply.vue';
export default {
	components:{
		UserComment,
		UserReply
	}
}
</script>

<style lang="scss" scoped>
.other-comments{
	// width:calc(100% - 60px - 20px);
	// width: 100%;
	margin-left: 80px;
	margin-top: 20px;
	padding: 24px 20px, 20px, 30px;
	box-sizing: border-box;
}
@media (max-width: 1023px){
	.other-comments{
		margin-left: 20px;
	}
}
</style>