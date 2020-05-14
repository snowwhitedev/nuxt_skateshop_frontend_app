<template>
	<div class="card-product-line">
		<img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
		<div class="card-content">
			<div class="content-col">
				<p class="card-title">
					Redbull Moonwalk Cat<span class="amount">&nbsp;x1</span>
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

			</div>
			<div class="content-col">
                <p class="card-title">€ 49,00</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'card-product-line',
	props:{

	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.card-product-line{
    width: 100%;
    max-width: 352px;
	height: 86px;
	display: flex;

}
.card-product-line img{
    width: 65px;
    border-radius: 5px;
}
.card-content{
	width: 100%;
    display: flex;
    padding: 0;
    margin-left: 20px;
    justify-content: space-between;
}
.content-col{
}

.card-title{
	font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #283441;
}
.card-title .amount{
	color: #707780;
}
.product-setting{
    display: flex;
    flex-direction: column;
}
.col-item{
	display: flex;
	flex-direction: column;
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    color: #283441;
    margin-top: 5px;
}
.col-item .item-value{
	font-weight: normal;
}
</style>