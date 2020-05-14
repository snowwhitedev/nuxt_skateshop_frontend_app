<template>
    <button :class="btnClass" @click="$emit('onClick')" @mouseover="onMouseOver" @mouseout="onMouseOut">
        <div class="rating-level">
            <svg v-if="onHover" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="30" height="30" rx="10" fill="white"/>
                <line v-if="ratingLevel==3" x1="6" y1="19" x2="24" y2="19" stroke="white" stroke-width="2"/>
                <path v-else fill-rule="evenodd" clip-rule="evenodd" :d="pathContent[ratingLevel-1]" fill="white"/>
            </svg>
            <p v-else>{{ratingLevel}}</p>
        </div>
        <div class="rating-text">{{ratingText[ratingLevel-1]}}</div>
    </button>
</template>
<script>
export default {
    name: "BtnRatinglevel",
    props:{
        btnClass:{
            type: String,
            default: "btn rating"
        },
        ratingLevel:{
            type: Number,
            default: 1
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
            // console.log("[BtnRatingLevel],mouseover");
            this.onHover = true;
        },
        onMouseOut(){
            this.onHover = false;
        }

    }
  

}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.btn.rating{
    display: flex;
    align-items: center;
    background: #283441;
    margin: 0;
}
.rating-level{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-family-primary;
    font-size: $font-size-header-6;
    color:$color-white;
    font-weight: $font-weight-bold;
    text-align: center;
    border: 1px solid white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    width: 52px;
    height: 50px;
}
.rating-text{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-family-primary;
    font-size: $font-size-button;
    color:$color-white;
    font-weight: $font-weight-bold;
    text-align: center;
    border: 1px solid white;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 108px;
    height: 50px;
    border-left:none;
}
.back-white{
    background: white;
}
.vertical-line{
    width: 1px;
    height: 100%;
}
.action-text{
    margin-left:10px;
}
.btn.rating:active .rating-level{
    background: $color-white;
    border-right: 1px solid #E7E8EA ;
}
.btn.rating:active .rating-level svg rect,
.btn.rating:active .rating-level svg path
{
    fill:$color-primary;
}
.btn.rating:active .rating-text{
    background: $color-white;
    color: $color-primary
}
</style>
