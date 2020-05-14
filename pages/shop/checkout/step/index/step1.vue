<template>
    <div class="checkout-step">
        <div class="section-title">
            <p>Step 1: Delivery details</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="form-row mt-2">
            <div class="form-col">
                <div class="form-input">
                    <label >First name</label>
                    <input type="text" class="input-lg">
                </div>
            </div>
            <div class="form-col">
                <div class="form-input">
                    <label >Last name</label>
                    <input type="text" class="input-lg">
                </div>
            </div>
        </div>
        <div class="form-row mt-2">
            <div class="form-col">
                <div class="form-input">
                    <label >Email address</label>
                    <input type="email" class="input-lg" placeholder="yourname@example.com">
                </div>
            </div>
            <div class="form-col">
                <div class="form-input">
                    <label >&nbsp;</label>
                    <checkbox-fill label="Create a free deckend account to make things a bit easier next time." value="freeaccount" />
                </div>
            </div>
        </div>
        <div class="form-row mt-2">
            <div class="form-col">
                <div class="form-input">
                    <label >Username&nbsp;<small>(Can not be changed later)</small></label>
                    <input type="text" class="input-lg">
                </div>
            </div>
        </div>
        <div class="form-row mt-1">
            <div class="form-col">
                <div class="form-input">
                    <label >Password</label>
                    <input type="password" class="input-lg">
                </div>
            </div>
            <div class="form-col">
                <div class="form-input">
                    <label >Repeat Password</label>
                    <input type="password" class="input-lg">
                </div>
            </div>
        </div>
        <div class="form-row mt-4">
            <div class="form-col">
                <div class="form-input">
                    <label >Address line 1</label>
                    <input type="text" class="input-lg" placeholder="South main street 467">
                </div>
            </div>
            <div class="form-col">
                <div class="form-input">
                    <label >Address line 2&nbsp;<small>(Optional)</small></label>
                    <input type="text" class="input-lg" placeholder="Building 523, appartment 7B">
                </div>
            </div>
        </div>
        <div class="form-row mt-2">
            <div class="form-col">
                <div class="form-input">
                    <label >City</label>
                    <input type="text" class="input-lg" placeholder="San Francisco">
                </div>
            </div>
            <div class="form-col">
                <div class="form-input">
                    <label >State / Province / Region&nbsp;<small>(Optional)</small></label>
                    <input type="text" class="input-lg" placeholder="California">
                </div>
            </div>
        </div>
        <div class="form-row mt-2">
            <div class="form-col">
                <div class="form-input">
                    <label >Zip code / Postal code</label>
                    <input type="text" class="input-lg" placeholder="CA37485">
                </div>
            </div>
            <div class="form-col">
                <div class="form-input">
                    <label >Country</label>
                    <select-box placeholder="Select country" :items="countries" />
                </div>
            </div>
        </div>
         <div class="form-row mt-2">
            <div class="form-col">
                <div class="form-input">
                    <label >Phone number&nbsp;<small>(Include country code e.g. +31)</small></label>
                    <input type="text" class="input-lg" placeholder="+31612345687">
                </div>
            </div>
        </div>
        <div class="form-action mt-1">
            <btn-text btnClass="btn primary lg" @onClick="()=>{$router.push(`/shop/checkout/step/stepnext`)}">Save and continue</btn-text>
        </div>
        <div class="section-title disabled mt-6">
            <p>Step 2: Shipping options</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="section-title disabled mt-2">
            <p>Step 3: Payment</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="section-title disabled mt-2">
            <p>Step 4: Place order</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="form-final-action mt-2">
            <p class="privacy-text">By placing your order you agree to our Terms and Conditions, our Privacy Policy and Returns Policy.</p>
            <btn-append :disabled="true">Place order and pay</btn-append>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            countries:[ 'Netherlands', 'United States', 'United Kindom']
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
.disabled{
    color: #DBDDDF !important;
}
.horizontal-line{
	width: 100%;
	height: 1px;
	background: #E7E8EA;
	// background: black;
	margin-top: 20px;
}
.form-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.form-col{
    width: calc(50% - 10px);
}
.form-input{
    display: flex;
    flex-direction: column;
}
.form-input label{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #283441;
    margin-bottom: 10px;
}
label small{
    font-weight: 300;
}
.form-action{
    display: flex;
    justify-content: flex-end;
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
    color: #9399A0;
    max-width: 384px;
}
</style>