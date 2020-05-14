<template>
	<div>
		<div class="user-comment">
			<img class="avatar lg" src="https://www.nretnil.com/avatar/swag_25k.jpg" />
			<div class="comment-content">
				<p class="user-info">Gal Gadot <small> on January 30, 2017 at 13:26</small></p>
                <p class="comment-text">Sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Sed volutpat, ipsum sed ullamcorper tellus quis nisl malesuada, quis porta nulla commodo. Nisl malesuada, quis porta nulla commodo.</p>
			</div>
		</div>

	</div>
</template>

<script>
export default {
    name: 'user-comment'
}
</script>

<style  lang="scss" scoped>
@import "~assets/css/variable.scss";
.user-comment{
	width: 100%;
	display: flex;
}
.comment-content{
	width: calc(100% - 60px);
    padding-left: 20px;
    
}
.comment-content p{
    max-width: 100%;
}
p.user-info{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #283441;
}
p.user-info small{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #707780;
}
p.comment-text{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    color: #283441;
    margin-top: 10px;
}
</style>