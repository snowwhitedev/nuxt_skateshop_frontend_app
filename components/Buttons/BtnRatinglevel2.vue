<template>
    <button class="btn rate2" @click="onClick" @mouseover="onMouseOver" @mouseout="onMouseOut" :disabled="btnDisabled">
        <div class="rating-level2">
            <svg v-if="onHover" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="15" fill="#D5EBFF"/>
                <line v-if="ratingLevel==3" x1="11" y1="32" x2="39" y2="32" stroke="#357BFF" stroke-width="2"/>
                <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M40 39C39.1658 31.1251 32.7683 25 25 25C17.2317 25 10.8342 31.1251 10 39L40 39Z" fill="#357BFF"/>
            </svg>

            <p v-else>{{ratingLevel}}</p>
        </div>
        <div class="rating-text">{{ratingText[ratingLevel-1]}}</div>
    </button>
</template>

<script>
export default {
    name: "BtnRatinglevel2",
    props:{
        ratingLevel:{
            type: Number,
            default: 1
        },
        btnDisabled:{
            type: Boolean,
            default: false
        }
        
    },
    data(){
        return{
            ratingText: ["Horrible", "Quite bad", "It's okay", "Pretty cool", "Awesome!"],
            pathContent: [
                "M24 22C23.4995 17.5 19.661 14 15 14C10.339 14 6.5005 17.5 6 22L24 22Z",
                "M8.0163 22C8.50485 18.616 11.436 16 15 16C18.564 16 21.4952 18.616 21.9837 22L24 22C23.4995 17.5 19.661 14 15 14C10.339 14 6.5005 17.5 6 22L8.0163 22Z",
                "",
                "M21.9837 17C21.4952 20.384 18.564 23 15 23C11.436 23 8.50485 20.384 8.0163 17H6C6.5005 21.5 10.339 25 15 25C19.661 25 23.4995 21.5 24 17H21.9837Z",
                "M24.0553 17H6.0553C6.5558 21.5 10.3943 25 15.0553 25C19.7163 25 23.5548 21.5 24.0553 17Z"
            ],
            onHover: false
        }
    },
    methods:{
        onMouseOver(){
            this.onHover = true;
        },
        onMouseOut(){
            this.onHover = false;
        },
        onClick(){
            console.log("disabled");
            this.$emit("onClick");
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.btn.rate2{
    background: none;
    width: 88px;
    height: 128px;
    padding:0;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.rating-level2{
    width: 88px;
    height: 88px;
    border: 1px solid #357BFF; // radial-gradient(100% 100.15% at 87.74% 82.86%, #357BFF 0%, #2FBBFF 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-family-primary;
    font-size: $font-size-header-4;
    color:  #357BFF;
    font-weight: $font-weight-bold;
    text-align: center;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    
}
.rating-text{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-family-primary;
    font-size: $font-size-button;
    color: #357BFF;
    font-weight: $font-weight-bold;
    text-align: center;
    border: 1px solid #357BFF;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 88px;
    height: 40px;
    border-top:none;
}

.btn.rate2:enabled:active {
    background: $color-blue-grad-radial;
}
.btn.rate2:enabled:active .rating-level2{
    border-bottom: 1px solid #2E9BFF ;
}
.btn.rate2:enabled:active .rating-level2 svg rect{
    background: rgba(0,0,0, 0.2);
}
.btn.rate2:enabled:active .rating-level svg path
{
    fill:white;
}
.btn.rate2:enabled:active .rating-text{
    color: $color-white
}
.btn.rate2:disabled .rating-level2{
    border: 1px solid #D5EBFF;
    color: #D5EBFF;
}
.btn.rate2:disabled .rating-text{
    border: 1px solid #D5EBFF;
    color: #D5EBFF;
    border-top:none;
}
</style>