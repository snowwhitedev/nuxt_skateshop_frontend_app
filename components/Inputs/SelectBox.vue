<template>
	<div class="select-box">
		<select class="select-place" name="griptape" id="griptape"> 
			<option value="" selected="selected">{{placeholder}}</option>
			<option v-for="item in items" :key="item.value" :value="item">{{item}}</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'select-box',
	props:{
		placeholder:{
			type: String,
			default: 'Select your...'
		},
		items:{
			type: Array,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.select-box{
	position: relative;
}
.select-place{
	background-color: #fff;
	background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAGAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+vrxV8Nf2jvAfi+X4UfBX4qaRpXwk+Nur6/rC+KPHN7rHiX4sfs2zmSTXPH1p8GotV0fX9C8faT4sS9nl+HmkfEnVrDTvgZ4kuru9tLf4lfDuDw38IvDPVGdGUfaVYN1KaS5Y2jTrdIe0s04OP23BN1Y6PknzVJc7hVjJxhNclRt3k250ne8vZ3TUlK/uqbtTevvwtTX01oHwD+GHh3QtF8P2ukavqFtoWk6bo1vf6/4v8X+INdvoNMs4bKK81rXtX1y71bW9WuY4Fm1LV9Uu7nUdSvHmvL24muZpZGxdWbbd0rtuyjFJXd9ElZLslolojVU4JJWvZWu223bu222+7bbe7P/Z");
	background-size: 10px 6px;
	background-repeat: no-repeat;
	background-position: 94% 50%;
	line-height: 1.1;
	height: 50px;
    border-radius: 3px;
    padding: 16px 20px;
    border-color: #9399A0;
    font-family: $font-family-primary;
    font-size: 14px;
    color: #000;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0.01em;
	background-clip: padding-box;
    border: 1px solid #9399A0;
	width: 100%;
}
select{
	cursor: pointer;
	-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-clip: border-box;
    margin: 0;
    outline: 0;
    vertical-align: top;
}
</style>