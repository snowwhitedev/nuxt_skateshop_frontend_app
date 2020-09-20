<template>
	<div>
		<div class="post-comment">
			<img class="avatar lg" src="https://www.nretnil.com/avatar/swag_25k.jpg" />
			<div class="comment-input">
				<input placeholder="Add comment..."/>
			</div>
            <btn-text btnClass="btn secondary reply">Reply</btn-text>
		</div>
		<div class="post-btn">
			
		</div>
	</div>
</template>

<script>
export default {
    name:'user-reply'
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
	width: calc(100% - 155px);
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
.btn.reply{
    height: 60px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
}
</style>