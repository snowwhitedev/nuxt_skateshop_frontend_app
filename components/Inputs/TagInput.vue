<template>
	<b-taginput
		v-model="tags"
		attached>
	</b-taginput>

</template>

<script>
export default {
	data(){
		return{
				tags: [
					'Auckland',
				]
		}
	}
}
</script>

<style lang="scss">
@import "~assets/css/variable.scss";
.taginput .taginput-container.is-focusable {
	
	min-height: 50px !important;
	background: #FFFFFF;
	border: 1px solid #9399A0;
	box-sizing: border-box;
	border-radius: 3px;
	padding: 10px 20px;
	height: 50px !important;
}
.taginput .is-focused.taginput-container.is-focusable{
	border-color: #2E9BFF !important;
	box-shadow: none;
}

.taginput .taginput-container.is-focusable:active{
	border-color: #2E9BFF !important;
	box-shadow: none;
}
.taginput .taginput-container > .tags {
	margin: 0 ;
	margin-left: 5px;
	height: 24px;
	/* margin-left: 0.275rem; */
	/* margin-bottom: calc(0.275em - 1px); */
	// font-size: 0.9em;
	// height: 1.7em;
}
.taginput .taginput-container > .tags:first-child {
	margin-left: 0;
}
.tag:not(body){
	background-color: #2E9BFF;
	color: white;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 14px;
	letter-spacing: 0.03em;
	padding-left: 10px;
	padding-right: 5px;
}
.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {
	background-color: #2E9BFF;
}
.taginput .taginput-container > .tag .tag.is-delete, .taginput .taginput-container > .tags .tag.is-delete {
	width: 20px;
}
.taginput .taginput-container > .tag .tag, .taginput .taginput-container > .tags .tag {
	height: 24px;
}
.tag:not(body).is-delete::before {
	width: 10px;
}
.tag:not(body).is-delete::after {
	height: 10px;
}
</style>