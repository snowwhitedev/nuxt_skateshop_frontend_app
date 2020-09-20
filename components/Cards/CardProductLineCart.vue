<template>
	<div class="card-product-line-cart">
		<img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
		<div class="card-content">
			<div class="content-col first">
				<p class="card-title">
					<span class="main">Into the Forrest</span>
					<span class="sub"><small>by</small>&nbsp;FatFrankTank</span>
				</p>
				<div class="product-setting">
                    <div class="col-item">
                        <p class="item-name">
                            Deck size
                        </p>
                        <p class="item-value">
                            8.25
                        </p>
                    </div>
                    <div class="col-item">
                        <p class="item-name">
                            Griptape
                        </p>
                        <p class="item-value">
                            Yes, and please grip it
                        </p>
                    </div>
                </div>
                <input-quantity class="mobile-only-1023"/>
                <div class="product-ship">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.49221 3.33334H12.2205C13.1841 3.33334 13.9662 4.08168 13.9662 5.00001V5.83334H15.7118C17.6364 5.83334 19.2031 7.32834 19.2031 9.16667V14.1667C19.2031 14.6267 18.813 15 18.3303 15H16.4232C16.0618 15.9683 15.1026 16.6667 13.9662 16.6667C12.8297 16.6667 11.8705 15.9683 11.5083 15H8.56858C8.20723 15.9683 7.24712 16.6667 6.11157 16.6667C4.97602 16.6667 4.01591 15.9683 3.65368 15H2.61938C2.13671 15 1.74655 14.6267 1.74655 14.1667V5.00001C1.74655 4.08168 2.52861 3.33334 3.49221 3.33334ZM3.49221 5.00001V13.3333H3.65281C4.01503 12.365 4.97515 11.6667 6.11069 11.6667C7.24625 11.6667 8.20636 12.365 8.56858 13.3333H11.5074C11.6558 12.9383 11.9002 12.5925 12.2196 12.3175V5.00001H3.49221ZM17.4575 9.16667C17.4575 8.24751 16.6754 7.50001 15.7118 7.50001H13.9662V11.6667C15.1026 11.6667 16.0618 12.365 16.424 13.3333H17.4575V9.16667ZM13.9662 15C14.4471 15 14.839 14.6267 14.839 14.1667C14.839 13.7075 14.4471 13.3333 13.9662 13.3333C13.4852 13.3333 13.0933 13.7075 13.0933 14.1667C13.0933 14.6267 13.4852 15 13.9662 15ZM6.11069 15C6.59162 15 6.98352 14.6267 6.98352 14.1667C6.98352 13.7075 6.59162 13.3333 6.11069 13.3333C5.62977 13.3333 5.23787 13.7075 5.23787 14.1667C5.23787 14.6267 5.62977 15 6.11069 15Z" fill="#44DC94"/>
                        <path d="M14.8402 8.33334H16.5859V10H14.8402V8.33334Z" fill="#44DC94"/>
                    </svg>
                    <p style="color:#44DC94">
                        Delivery in 1-2 days
                    </p>
                </div>
			</div>
			<div class="content-col second">
				<input-quantity class="desktop-only-1023"/>
                <p class="cart-price">€ 49,00</p>
                <p class="remove-btn mobile-only-1023"><span>remove</span></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'card-product-line-cart',
	props:{

	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.card-product-line-cart{
    width: 100%;
    max-width: 844px;
	// height: 178px;
	display: flex;
    background: #FFFFFF;
    box-shadow: 0px 15px 40px rgba(45, 55, 72, 0.05);
    border-radius: 5px;
}
.card-product-line-cart img{
	width: 196px;
}
.card-content{
	width: 100%;
	padding: 20px;
	display: flex;
    position: relative;
}
.content-col{
	width: 50%;
}
.content-col.second{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.card-title{
	display: flex;
	flex-direction: column;
}
.card-title .main{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 27px;
	color: #283441;
}
.card-title .sub{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.03em;
	color: #283441;
}
.product-setting{
    display: flex;
    margin-top: 20px;
    flex-direction: row;
}
.col-item{
	display: flex;
	flex-direction: column;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
    color: #283441;
    margin-right: 40px;
}
.col-item:last-child{
    margin-right: 0;
}
.col-item .item-value{
	font-weight: 300;
}
.col-item:first-child{
	margin-bottom: 10px;
}
.product-ship{
    display: flex;
    align-items: center;
}
.product-ship p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    margin-left: 15px;
}
.cart-price{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #283441;
}

.desktop-only-1023{
    display: block;
}
.mobile-only-1023{
    display: none;
}
@media (max-width: 1023px){
    .card-product-line-cart{
        padding: 10px;
    }
    .card-product-line-cart img{
        width: 80px;
        height: 100px;
    }
    .card-title .main{
        font-size: 16px;
        line-height: 22px;
    }
    .card-content{
        padding: 5px 10px;
    }
    .product-setting{
        flex-direction: column;
    }
    .desktop-only-1023{
        display: none;
    }
    .mobile-only-1023{
        display: block;
    }
    .content-col{
        width: 100%;
    }
    .content-col.second[data-v-42058cfc] {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        position: absolute;
        right: 10px;
    }
    .remove-btn{
        font-family: $font-family-primary;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        text-align: right;
        letter-spacing: 0.02em;
        color: #F5404C;
    }
}
</style>