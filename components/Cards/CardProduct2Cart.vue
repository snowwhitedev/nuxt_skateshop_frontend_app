<template>
	<div class="card-product2cart">
		<div class="price">
			<p class="price-now">€ 49,00</p>
			<p class="price-old">€ 59,00</p>
			<vote-rate :rateVal="4.5"/>
			<p class="reviews">2 reviews</p>
		</div>
		<div class="check-stock">
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.5 6H13.5V11.25H15V5.25C15 5.24475 14.9977 5.241 14.997 5.2365C14.9955 5.14875 14.9775 5.064 14.946 4.98225C14.9377 4.96125 14.9272 4.9425 14.9175 4.92225C14.9025 4.89375 14.8935 4.86225 14.874 4.8345L11.874 0.3345C11.7345 0.12525 11.5012 0 11.25 0H3.75C3.4995 0 3.2655 0.12525 3.126 0.33375L0.126 4.83375C0.108 4.8615 0.0975 4.893 0.08325 4.92225C0.0735 4.9425 0.06225 4.96125 0.054 4.98225C0.0225 5.064 0.0045 5.14875 0.003 5.2365C0.003 5.241 0 5.24475 0 5.25V14.25C0 14.664 0.336 15 0.75 15H9.75V13.5H1.5V6ZM12.849 4.5H8.25V1.5H10.8487L12.849 4.5ZM4.15125 1.5H6.75V4.5H2.15175L4.15125 1.5Z" fill="#44DC94"/>
				<path d="M16.7197 12.2153L13.5 15.435L11.7802 13.7153L10.7197 14.7758L13.5 17.556L17.7802 13.2758L16.7197 12.2153Z" fill="#44DC94"/>
			</svg>
			<p>This product is in stock</p>
		</div>
		<div class="cart-values">
			<div class="select-box">
				<span class="inline-text">G</span>
				<select class="select-place" name="griptape" id="griptape" > 
					<option value="" selected="selected">Select griptape option</option>
					<option value="Grip it for me">Grip it for me</option>
					<option value="I'll grip it myself">I'll grip it myself</option>
				</select>
			</div>
			<div class="select-box">
				<span class="inline-text">S</span>
				<select class="select-place" name="griptape" id="griptape" > 
					<option value="" selected="selected">Select your deck size</option>
					<option value="1.5">1.5</option>
					<option value="2.5">2.5</option>
					<option value="3.5">3.5</option>
				</select>
			</div>
			<div class="add2cart">
				<input-quantity />
				<btn-append @onClick="()=>{this.$router.push(`/shop/cart`)}">Add to cart</btn-append>
			</div>
		</div>
		<div class="additional-link">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.8387 5.07244L10.3387 1.73911C10.1228 1.64328 9.87699 1.64328 9.66116 1.73911L2.16116 5.07244C1.86033 5.20661 1.66699 5.50494 1.66699 5.83328V14.1666C1.66699 14.4958 1.86033 14.7941 2.16199 14.9283L9.66199 18.2616C9.76949 18.3099 9.88449 18.3333 10.0003 18.3333C10.1162 18.3333 10.2312 18.3091 10.3387 18.2616L17.8387 14.9283C18.1403 14.7949 18.3337 14.4966 18.3337 14.1666V5.83328C18.3337 5.50494 18.1403 5.20661 17.8387 5.07244ZM10.0003 3.41244L15.4487 5.83328L13.9587 6.49578L8.51033 4.07494L10.0003 3.41244ZM10.0003 8.25578L4.55199 5.83328L6.45866 4.98578L11.907 7.40744L10.0003 8.25578ZM3.33366 7.11661L9.16699 9.70911V16.2191L3.33366 13.6266V7.11661ZM10.8337 16.2183V9.70828L16.667 7.11578V13.6249L10.8337 16.2183Z" fill="#44DC94"/>
			</svg>
			<p><a href="#">Free shipping </a>within Europe</p>
		</div>
		<div class="additional-link">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.33301 3.33331H11.6663C12.5863 3.33331 13.333 4.08165 13.333 4.99998V5.83331H14.9997C16.8372 5.83331 18.333 7.32831 18.333 9.16665V14.1666C18.333 14.6266 17.9605 15 17.4997 15H15.6788C15.3338 15.9683 14.418 16.6666 13.333 16.6666C12.248 16.6666 11.3322 15.9683 10.9863 15H8.17968C7.83467 15.9683 6.91801 16.6666 5.83384 16.6666C4.74967 16.6666 3.83301 15.9683 3.48717 15H2.49967C2.03884 15 1.66634 14.6266 1.66634 14.1666V4.99998C1.66634 4.08165 2.41301 3.33331 3.33301 3.33331ZM3.33301 4.99998V13.3333H3.48634C3.83218 12.365 4.74884 11.6666 5.83301 11.6666C6.91717 11.6666 7.83384 12.365 8.17968 13.3333H10.9855C11.1272 12.9383 11.3605 12.5925 11.6655 12.3175V4.99998H3.33301ZM16.6663 9.16665C16.6663 8.24748 15.9197 7.49998 14.9997 7.49998H13.333V11.6666C14.418 11.6666 15.3338 12.365 15.6797 13.3333H16.6663V9.16665ZM13.333 15C13.7922 15 14.1663 14.6266 14.1663 14.1666C14.1663 13.7075 13.7922 13.3333 13.333 13.3333C12.8738 13.3333 12.4997 13.7075 12.4997 14.1666C12.4997 14.6266 12.8738 15 13.333 15ZM5.83301 15C6.29217 15 6.66634 14.6266 6.66634 14.1666C6.66634 13.7075 6.29217 13.3333 5.83301 13.3333C5.37384 13.3333 4.99967 13.7075 4.99967 14.1666C4.99967 14.6266 5.37384 15 5.83301 15Z" fill="#44DC94"/>
				<path d="M14.1663 8.33331H15.833V9.99998H14.1663V8.33331Z" fill="#44DC94"/>
			</svg>
			<p><a href="#">Same day shipping </a><span v-if="!$device.isMobile">for orders placed</span> on business days before 18:00</p>
		</div>
		<div class="additional-link">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.167 6.17566H13.8307C14.169 5.9999 14.49 5.78434 14.7577 5.51545C15.6352 4.63741 15.6352 3.20807 14.7577 2.32929C13.9072 1.47829 12.4267 1.47829 11.5762 2.32929C10.3485 3.55883 10.182 5.87297 10.167 6.13285C10.152 5.87222 9.98549 3.55808 8.75774 2.32929C7.90724 1.47829 6.42524 1.47904 5.57624 2.32929C5.15174 2.75441 4.91699 3.32074 4.91699 3.92237C4.91699 4.524 5.15174 5.09032 5.57624 5.51545C5.84399 5.78434 6.16424 5.99915 6.50324 6.17566H4.16699C3.33899 6.17566 2.66699 6.8494 2.66699 7.67786V9.93115C2.66699 10.3458 3.00224 10.6823 3.41699 10.6823V15.1888C3.41699 16.0173 4.08899 16.691 4.91699 16.691H15.417C16.245 16.691 16.917 16.0173 16.917 15.1888V10.6823C17.3317 10.6823 17.667 10.3458 17.667 9.93115V7.67786C17.667 6.8494 16.995 6.17566 16.167 6.17566ZM7.16699 15.1888H4.91699V10.6823H7.16699V15.1888ZM7.16699 9.18005H4.16699V7.67786H7.16699V9.18005ZM6.63674 4.45339C6.49499 4.31143 6.41699 4.12291 6.41699 3.92237C6.41699 3.72182 6.49499 3.5333 6.63674 3.39134C6.77849 3.24938 6.96599 3.17202 7.16699 3.17202C7.36799 3.17202 7.55549 3.25013 7.69724 3.39209C8.13974 3.83449 8.39774 4.62915 8.53574 5.29237C7.87574 5.15342 7.07699 4.89504 6.63674 4.45339ZM11.667 15.1888H8.66699V10.6823H11.667V15.1888ZM11.667 9.18005H8.66699V7.67786H11.667V9.18005ZM12.6367 3.39209C12.7785 3.25013 12.966 3.17202 13.167 3.17202C13.368 3.17202 13.5555 3.25013 13.6972 3.39134C13.989 3.68502 13.9897 4.16046 13.6972 4.45339C13.254 4.89729 12.4597 5.15642 11.7975 5.29387C11.9355 4.63065 12.1942 3.83524 12.6367 3.39209ZM15.417 15.1888H13.167V10.6823H15.417V15.1888ZM16.167 9.18005H13.167V7.67786H16.167V9.18005Z" fill="#44DC94"/>
			</svg>
			<p><a href="#">Free stickers </a>with your order</p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.price{
	display: flex;
	align-items: center;
}
.price-now {
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 34px;
	line-height: 46px;
	color: #F53F8A;
	margin-right: 8px;
}
.price-old{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #283441;
	margin-right: 25px;
}
p.reviews{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #707780;
	margin-left: 10px;
}
.check-stock{
	display: flex;
	align-items: center;
	margin-top: 20px;
}
.check-stock p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 180%;
	letter-spacing: 0.01em;
	color: #44DC94;
	margin-left: 15px;
	margin-bottom: 3px;
}
.cart-values{
	max-width: 284px;
}
.select-box{
	position: relative;
	margin-bottom: 10px;
}
.inline-text{
	width: 50px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	font-size: 14px;
	line-height: 19px;
	color: #000;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
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
	padding-left: 50px!important;
	background-clip: padding-box;
    border: 1px solid #ced4da;
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
.add2cart{
	margin-top: 20px;
	margin-bottom: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
}
.additional-link{
	display: flex;
	align-items: center;
}
.additional-link p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 30px;
	color: #283441;
	margin-left: 12px;
}
.additional-link p a{
	color: #44DC94;
}

@media (max-width: 767px){
	.price-now {
		font-size: 24px;
		line-height: 33px;
	}
}
</style>