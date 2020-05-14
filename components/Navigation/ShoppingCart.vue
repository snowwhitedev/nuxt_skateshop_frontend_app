<template>
	<div class="shopping-cart"  v-click-outside="closeEvent" >
        <btn-shopping-cart @onClick="onShowCart"/>
        <div class="cart-panel" v-if="showCart" >
            <div v-if="cartItems">
               this is cart panel with cart items
            </div>
            <div v-else class="empty-cart-wrap">
                <img src="https://public/assets/images/empty-shop.png" alt="empty-shop.png"> 
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
	props:{
		cartItems:{
			type:Array,
			default: null
		}
	},
	data(){
		return{
			showCart: false
		}
	},
	directives:{
		ClickOutside
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
    // border: 1px solid black;
    box-sizing: border-box;
    box-shadow: 0px 10px 50px rgba(35, 48, 73, 0.05);
    border-radius: 5px;
    right: -20px;
    margin-top: 20px;
    padding: 0;
    position: absolute;
    top: 100%;
    z-index: 999;
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
</style>