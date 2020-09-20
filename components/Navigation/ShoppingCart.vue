<template>
	<div class="shopping-cart"  v-click-outside="closeEvent" >
        <btn-shopping-cart @onClick="onShowCart"/>
        <div class="cart-panel" v-if="showCart" >
            <div class="cart-items" v-if="cartItems.length!=0">
               <ul>
                   <li v-for="item in cartItems" :key="item.index">
                        <img class="item-img" :src="item.img" />
                        <div class="cartitem-content">
                            <p class="item-name">{{ item.name }}</p>
                            <p class="item-label">Deck size</p>
                            <p class="item-value">{{ item.deck }}</p>
                            <p class="item-label">Griptape</p>
                            <p class="item-value">{{ item.deck }}</p>
                        </div>
                        <p class="item-price">{{item.price}}</p>
                   </li>
               </ul>
               <div class="total">
                   <p class="total-label">Total price<small>(excl. shipping)</small></p>
                   <p class="item-price">€ 113,00</p>
               </div>
               <button class="goto-cart">Go to shopping cart</button>
            </div>
            <div v-else class="empty-cart-wrap">
                <img src="~assets/images/empty_cart.jpg" alt="empty-shop.png"> 
                <p>It looks like you haven’t made your choice yet.</p>
                <nuxt-link to="/shop">
                    <btn-text btnClass="btn primary lg" style="margin-top:10px;">Start shopping</btn-text>
                </nuxt-link>
            </div>
         </div>
	</div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
    directives:{
		ClickOutside
	},
    created(){
        for (let i =0; i < 3; i++){
            this.cartItems.push(
                { 
                    index: i, 
                    img: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
                    name: "Just Another board",
                    deck: 8.0,
                    grip: 'No, thanks',
                    price: '€ 59,00'
                }
            );
        }
    },
    data(){
		return{
            showCart: false,
            cartItems: []
		}
	},
	methods:{
		onShowCart(){
			this.showCart = !this.showCart;
		},
		closeEvent: function (event) {
			if(this.showCart) this.showCart = false;
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.shopping-cart{
    position: relative;
}
.cart-panel{
    position: absolute;
    width: 400px;
    background: #FFFFFF;
    border: 1px solid rgba(35, 48, 73, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 10px 50px rgba(35, 48, 73, 0.05);
    border-radius: 5px;
    right: -20px;
    margin-top: 20px;
    padding: 0;
    position: absolute;
    top: 100%;
    z-index: 9999;
}
.cart-panel:before{
    content: '';
    width: 16px;
    height: 16px;
    background: #C4C4C4;
    -webkit-transform: matrix(0.71, -0.67, 0.74, 0.71, 0, 0);
    -ms-transform: matrix(0.71, -0.67, 0.74, 0.71, 0, 0);
    transform: matrix(0.71, -0.67, 0.74, 0.71, 0, 0);
    display: block;
    position: absolute;
    top: -8px;
    right: 30px;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-top-color: rgba(35, 48, 73, 0.1);
    border-right-color: rgba(35, 48, 73, 0.1);
}
.empty-cart-wrap{
    padding: 30px;
    text-align: center;
}
.empty-cart-wrap p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    letter-spacing: 0.01em;
    color: #283441;
}
.cart-items ul li{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: 1px solid #E7E8EA;
}
img.item-img{
    width: 65px;
    height: 85px;
    border-radius: 5px;
    margin-right: 20px;
}
.item-name{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #283441;
}
.item-label{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #283441;
}
.item-value{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #707780;
}
.item-price{
    position: absolute;
    top:20px;
    right: 20px;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: #283441;
}
.total{
    position: relative;
    padding: 20px;
}
.total-label{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #283441;
}
.goto-cart{
    width:100%;
    background: #E7E8EA;
    padding: 13px;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #283441;
    border: none;
}
.goto-cart:hover{
    cursor: pointer;
}
.total-label small{
    font-weight: 400;
}
@media (max-width: 767px){
    .cart-panel{
        position: absolute;
        width: 280px;
        right: -80px;
    }
    .cart-panel:before{
        right: 90px;
    }
    .cart-items ul li{
        padding: 10px 5px;
    }
    .item-name {
        font-size: 14px;
    }
    .item-price {
        font-size: 14px;
        right: 5px;
        top: 10px;
    }
    .total {
        padding: 10px 5px;
    }
}
</style>