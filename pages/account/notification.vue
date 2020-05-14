<template>
	<div class="account-content-container">
		<div class="content-header">
			<p class="content-brand">
				Notification settings
			</p>
			<div class="horizontal-line"></div>
		</div>
		<div class="content-body">
			<div class="form-row">
				<div class="column">
					<p class="section-label">
						General news and updates
					</p>
					<ul>
						<li>
							<checkbox-fill label="Receive our newsletter" value="1" />
						</li>
					</ul>
				</div>
				<div class="column">
					<p class="section-label">
						Auto follow designers/shops
					</p>
					<ul>
						<li>
							<checkbox-fill label="When I rated their design with a 5" value="1" />
						</li>
						<li>
							<checkbox-fill label="When I purchased one of their products" value="2" />
						</li>
					</ul>
				</div>
			</div>
			<div class="form-row">
				<div class="column">
					<p class="section-label">
						General news and updates
					</p>
					<ul>
						<li v-for="ems in emailSettings" :key="ems">
							<checkbox-fill :label="ems" value="1" />
						</li>
					</ul>
				</div>
			</div>
			<div class="horizontal-line sep-last" style=""></div>
			<div class="form-action">
				<btn-text btnClass="btn primary lg">Save information</btn-text>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout:'layout_account',
	data(){
		return{
			emailSettings: [
				"Someone started following me",
				"Someone commented on my design",
				"A design I rated gets produced",
				"A design by a designer/shop I follow gets produced",
				"A designer I follow uploads a new design"
			]
		}
	},
	methods:{
		
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
	margin-bottom: 20px;
}
.content-header{
	margin-bottom: 30px;
}
.horizontal-line{
	// border: 1px solid #E7E8EA;
	width: 100%;
	height: 1px;
	background:#E7E8EA;
}
.horizontal-line.sep{
	margin-top: 40px;
	margin-bottom: 40px;
}
.horizontal-line.sep-last{
	margin-top: 40px;
	margin-bottom: 0;
}
.form-row{
	display: flex;

}
p.section-label{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	color: #283441;
}
.form-action{
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}
ul li{
	margin-top: 20px;
}
.column{
	padding: 0;
}
</style>