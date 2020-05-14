<template>
	<div>
		<div class="post-comment">
			<img class="avatar lg" src="https://www.nretnil.com/avatar/swag_25k.jpg" />
			<div class="comment-input">
				<input placeholder="Add a comment here..."/>
			</div>
		</div>
		<div class="post-btn">
			<btn-text btnClass="btn primary lg">Post a comment</btn-text>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
@import "~assets/css/variable.scss";
.post-comment{
	width: 100%;
	display: flex;
	align-items: center;
}
.comment-input{
	width: calc(100% - 60px);
	padding-left: 20px;
}
.comment-input input{
	width: 100%;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #283441;
	height: 60px;
}
.post-btn{
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;

}
</style>