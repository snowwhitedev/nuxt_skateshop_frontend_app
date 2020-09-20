<template>
    <div class="checkout-step">
		<div class="step-section">
			<div class="section-title">
				<p>Step 1: Delivery details</p>
			</div>
			<div class="horizontal-line mt-2"></div>
            <div class="section-body mt-3 pr-2">
                <div class="person-info">
                    <ul>
                        <li>Leon Steneker</li>
                        <li>Westerworld 42</li>
                        <li>42 9632 EJ</li>
                        <li>The Netherlands</li>
                    </ul>
                    <ul>
                        <li>+31618273645</li>
                        <li>leonsteneker@gmail.com</li>
                    </ul>
                </div>
                <ul>
                    <li><btn-text btnClass="btn secondary sm">Edit</btn-text></li>
                </ul>
            </div>
		</div>
        <div class="step-section">
            <div class="section-title mt-5">
                <p>Step 2: Shipping options</p>
            </div>
            <div class="horizontal-line mt-2"></div>
            <div class="section-body-options">
                <ul>
                    <li v-for="item in shippingOptions" :key="item.value" class="shipping-option">
                        <btn-radio radioName="shippingOptions" :value="item.value" :text="item.text" :description="item.description" :checked="item.checked" @onCheck="checkShippingOption(item.value)"/>
                        <p>{{ item.value }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="step-section">
            <div class="section-title mt-5">
                <p>Step 3: Payment</p>
            </div>
            <div class="horizontal-line"></div>
            <div class="section-body-options">
                <ul>
                    <li v-for="item in paymentOptions" :key="item.value" class="payment-option">
                        <btn-radio radioName="paymentOptions" :value="item.value" :text="item.text" :checked="item.checked" @onCheck="checkPaymentOption(item.value)"/>
                        <template v-if="item.value=='paypal'">
                            <icon-paypal />
                        </template>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="step4Class">
            <div class="section-title mt-5">
                <p>Step 4: Place order</p>
            </div>
            <div class="horizontal-line"></div>
            <div class="form-final-action mt-2">
                <p class="privacy-text">By placing your order you agree to our Terms and Conditions, our Privacy Policy and Returns Policy.</p>
                <btn-append :disabled="finalDisabled">Place order and pay</btn-append>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            shippingOptions:[ 
                { value:"free", text:"Standard shipping (Europe)", description:"Usually takes 1-2 working days when ordered before 18:00.", checked: false },
                { value:"€ 8,50", text:"Express shipping (Europe)", description:"Usually takes 1-2 working days when ordered before 18:00.", checked: false }
            ],
            paymentOptions:[
                { value: "paypal", text:"PayPal", checked: false},
                { value: "banktransfer", text:"Bank transfer", checked: false}

            ],
            shippingOption: false,
            paymentOption: false,
            finalDisabled: true,
            step4Class: "step-section disabled"
        }
    },
    methods:{

        checkShippingOption: function(value){
            console.log(value);
            this.shippingOption = true;
            if (this.paymentOption) {
                this.step4Class = "step-section";
                this.finalDisabled = false;
            }
        },
        checkPaymentOption: function(value){
            console.log(value);
            this.paymentOption = true;
            if (this.shippingOption) {
                this.step4Class = "step-section";
                this.finalDisabled = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.section-title{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #283441;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background: #E7E8EA;
	// background: black;
}

.form-final-action{
    display: flex;
    justify-content: space-between;
}
.privacy-text{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    color: #283441;
    max-width: 384px;
}
.section-body{
    display: flex;
    justify-content: space-between;
}
.section-body ul li{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    color: #283441;
}
.section-body-options ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.section-body-options ul li p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: #283441;
    text-transform: uppercase;
    min-width: fit-content;
}
.shipping-option{
    padding: 30px 20px;
    border-bottom: 1px solid #E7E8EA;
}
.payment-option{
    padding: 20px;
    border-bottom: 1px solid #E7E8EA;
}
.disabled .section-title{
    color: #DBDDDF;
}
.disabled .form-final-action .privacy-text{
    color: #9399A0;
}
.person-info{
    display: flex;
    flex-direction: row;
}
.person-info ul:first-child{
    margin-right: 60px;
}

@media (max-width: 767px){
    .section-title{
        font-size: 20px;
        line-height: 27px; 
    }
    .form-row{
        flex-direction: column;
    }
    
    .form-col{
        width: 100%;
        margin-top: 20px;
    }
    .input-lg{
        max-width: 100%;
    }
    .form-action{
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .section-title.disabled{
        margin-top: 20px;
    }
    .form-final-action{
        display: block;
        margin-top: 20px;
    }
    .form-final-action button{
        float: right;
        margin-top: 10px;
    }
    .person-info{
        flex-direction: column;
    }
    .person-info ul:first-child{
        margin-right: 0px;
    }
    .mt-3,
    .mt-5
    {
        margin-top: 0;
    }
    .pr-2{
        padding-right: 0;
    }
    .step-section{
        margin-top: 40px;
    }
    .step-section:first-child{
        margin-top: 0;
    }
    .section-body{
        margin-top: 20px;
    }
    .shipping-option{
        padding: 20px 0 20px 10px;
    }
}
</style>