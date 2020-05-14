<template>
	<div class="navigation-toggle"  v-click-outside="closeEvent">
        <toggle-account @onClick="onShowMenu"/>
        <div class="toggle-panel" v-if="showPanel" >
            <ul>
                <li>
                    <nuxt-link :to="`/account/settings`">
                        <div class="icn-bg account">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99994 10.5C7.48319 10.5 7.87494 10.1082 7.87494 9.625C7.87494 9.14175 7.48319 8.75 6.99994 8.75C6.51669 8.75 6.12494 9.14175 6.12494 9.625C6.12494 10.1082 6.51669 10.5 6.99994 10.5Z" fill="#2CC9E3"/>
                                <path d="M9.91663 6.41667H5.24996V4.66667C5.24996 3.70183 6.03513 2.91667 6.99996 2.91667C7.96479 2.91667 8.74996 3.70183 8.74996 4.66667V5.25H9.91663V4.66667C9.91663 3.05842 8.60821 1.75 6.99996 1.75C5.39171 1.75 4.08329 3.05842 4.08329 4.66667V6.41667C3.43988 6.41667 2.91663 6.9405 2.91663 7.58333V11.6667C2.91663 12.3101 3.43988 12.8333 4.08329 12.8333H9.91663C10.56 12.8333 11.0833 12.3101 11.0833 11.6667V7.58333C11.0833 6.93992 10.56 6.41667 9.91663 6.41667ZM4.08329 11.6667V7.58333H9.91663L9.91721 11.6667H4.08329Z" fill="#2CC9E3"/>
                            </svg>
                        </div>
                        <p>Account Settings</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/account/orders`">
                        <div class="icn-bg bag">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6644 5.20142C11.6393 4.89867 11.3867 4.6665 11.0834 4.6665H9.91671V4.08317C9.91671 2.47492 8.60829 1.1665 7.00004 1.1665C5.39179 1.1665 4.08337 2.47492 4.08337 4.08317V4.6665H2.91671C2.61337 4.6665 2.36079 4.89867 2.33571 5.20142L1.75237 12.2014C1.73896 12.3636 1.79321 12.5252 1.90404 12.6448C2.01429 12.7649 2.17062 12.8332 2.33337 12.8332H11.6667C11.8295 12.8332 11.9858 12.7649 12.096 12.6448C12.2063 12.5252 12.2611 12.3642 12.2477 12.2014L11.6644 5.20142ZM5.25004 4.08317C5.25004 3.11834 6.03521 2.33317 7.00004 2.33317C7.96487 2.33317 8.75004 3.11834 8.75004 4.08317V4.6665H5.25004V4.08317ZM2.96746 11.6665L3.45337 5.83317H4.08337V7.58317H5.25004V5.83317H8.75004V7.58317H9.91671V5.83317H10.5467L11.0326 11.6665H2.96746Z" fill="#2E9BFF"/>
                            </svg>
                        </div>
                        <p>My orders</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="`/account/shop/dashboard`">
                        <div class="icn-bg store">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3799 6.21175L11.6299 1.54509C11.5441 1.31759 11.3265 1.1665 11.0833 1.1665H2.91663C2.67338 1.1665 2.4558 1.31759 2.37005 1.54509L0.620048 6.21175C0.553548 6.39084 0.578048 6.5915 0.686548 6.74842C0.796215 6.90592 0.975298 6.99984 1.16663 6.99984H1.74996V12.2498C1.74996 12.5718 2.01071 12.8332 2.3333 12.8332H11.6666C11.9892 12.8332 12.25 12.5718 12.25 12.2498V6.99984H12.8333C13.0246 6.99984 13.2037 6.90592 13.3128 6.74842C13.4219 6.5915 13.4464 6.39084 13.3799 6.21175ZM11.9915 5.83317H10.3728L9.4978 2.33317H10.679L11.9915 5.83317ZM4.83055 5.83317L5.70555 2.33317H6.41663V5.83317H4.83055ZM7.5833 2.33317H8.29438L9.16938 5.83317H7.5833V2.33317ZM3.32088 2.33317H4.50213L3.62713 5.83317H2.00838L3.32088 2.33317ZM8.16663 11.6665V8.74984H9.3333V11.6665H8.16663ZM11.0833 11.6665H10.5V8.1665C10.5 7.8445 10.2392 7.58317 9.91663 7.58317H7.5833C7.26072 7.58317 6.99997 7.8445 6.99997 8.1665V11.6665H2.91663V6.99984H11.0833V11.6665Z" fill="#FFA057"/>
                                <path d="M4.08327 10.4997H5.83327C6.15586 10.4997 6.41661 10.2383 6.41661 9.91634V8.16634C6.41661 7.84434 6.15586 7.58301 5.83327 7.58301H4.08327C3.76069 7.58301 3.49994 7.84434 3.49994 8.16634V9.91634C3.49994 10.2383 3.76069 10.4997 4.08327 10.4997Z" fill="#FFA057"/>
                            </svg>
                        </div>
                        <p>My skateshop</p>
                    </nuxt-link>
                </li>
                
                <li @click="logout">
                    <nuxt-link to="">
                        <div class="icn-bg power">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.7501 3.26025V4.557C9.79485 5.16367 10.5001 6.29184 10.5001 7.58334C10.5001 9.51359 8.93035 11.0833 7.0001 11.0833C5.06985 11.0833 3.5001 9.51359 3.5001 7.58334C3.5001 6.29125 4.20535 5.16367 5.2501 4.557V3.26025C3.5421 3.95442 2.33344 5.62917 2.33344 7.58334C2.33344 10.1564 4.42702 12.25 7.0001 12.25C9.57318 12.25 11.6668 10.1564 11.6668 7.58334C11.6668 5.62917 10.4581 3.95442 8.7501 3.26025Z" fill="#F5404C"/>
                                <path d="M7.58341 1.75H6.41675V6.41667H7.58341V1.75Z" fill="#F5404C"/>
                            </svg>
                        </div>
                        <p>Logout</p>
                    </nuxt-link>
                </li>
            </ul>
            
        </div>
	</div>
</template>

<script>

import ClickOutside from 'vue-click-outside';

export default {
    props:{
    },
    data(){
        return{
            showPanel: false
        }
    },
    directives:{
        ClickOutside
    },
    methods:{
        onShowMenu(){
            this.showPanel = !this.showPanel;
        },
        closeEvent: function (event) {
            if(this.showPanel) this.showPanel = false;
        },
        async logout(){
            this.$auth.$storage.removeUniversal("authLoggedIn");
            this.$auth.$storage.removeUniversal("authUserId");
            this.$auth.$storage.removeUniversal("authUserName");
            this.$auth.$storage.removeUniversal("authUserEmail");
            this.$auth.$storage.removeUniversal("authUserImg");
            this.$auth.$storage.removeUniversal("authUserToken");
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.navigation-toggle{
    position: relative;
}
.toggle-panel{
    position: absolute;
    width: 200px;
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
.toggle-panel:before{
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
.toggle-panel ul li {
    padding: 15px 20px;
   
    border-bottom: 1px solid #E7E8EA;
}
.toggle-panel ul li a{
    display: flex;
    align-items: center;
}
.toggle-panel ul li:last-child{
    border: none;
}
.toggle-panel ul li:hover{
    cursor: pointer;
}
.toggle-panel ul li p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #283441;
    margin-left: 15px;
}
.icn-bg{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icn-bg.account{
    background: #D5F4F9;
}
.icn-bg.bag{
    background: #D5EBFF;
}
.icn-bg.store{
    background: #FFECDD;
}
.icn-bg.power{
    background: #FDD9DB;
}
</style>