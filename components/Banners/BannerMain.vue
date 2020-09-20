<template>
    <div class="banner-main">
        <div class="banner-content">
            <div class="titles">
                <div class="title"><p>{{title}}</p></div>
                <div class="subTitle"><p>{{subTitle}}</p></div>
            </div>
            <div v-if="bannerBtn" class="banner-btn">
                <nuxt-link :to="bannerBtn.link">
                    <button>
                        <p>{{bannerBtn.text}}</p>
                        <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3505 12.0303C20.0576 12.3232 19.5827 12.3232 19.2898 12.0303C18.9969 11.7374 18.9969 11.2626 19.2898 10.9697L20.3505 12.0303ZM25 6.32015L25.5303 5.78982C25.8232 6.08271 25.8232 6.55758 25.5303 6.85048L25 6.32015ZM19.2898 1.67062C18.9969 1.37773 18.9969 0.902852 19.2898 0.609958C19.5827 0.317066 20.0576 0.317066 20.3505 0.609958L19.2898 1.67062ZM1 7.07014C0.585787 7.07014 0.25 6.73436 0.25 6.32014C0.25 5.90593 0.585787 5.57014 1 5.57014L1 7.07014ZM19.2898 10.9697L24.4697 5.78982L25.5303 6.85048L20.3505 12.0303L19.2898 10.9697ZM24.4697 6.85048L19.2898 1.67062L20.3505 0.609958L25.5303 5.78982L24.4697 6.85048ZM25 7.07015L1 7.07014L1 5.57014L25 5.57015L25 7.07015Z" 
                                fill="white"/>
                        </svg>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            default: ''
        },
        subTitle:{
            type: String,
            default: ''
        },
        bannerBtn:{
            type: Object,
            default:null
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.banner-btn{
    display: block;
}
.banner-btn button{
    height: 60px;
    padding-left: 25px;
    padding-right: 15px;
    background: none;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.banner-btn button p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    // line-height: 19px;
    line-height: 1;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin-right: 23px;
}
.banner-main{
    width:100%;
    height: 250px;
    margin: 0 auto;
    background: url('~assets/images/banner-main-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items:center;
}
.banner-content{
    width: 100%;
    max-width: 1316px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
}
.title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    // line-height: 46px;
    line-height: 1;
    color: $color-white;
    margin-bottom: 10px;
}
.subTitle{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #F3F4F4;
    // margin-top:10px;
}

@media (max-width: 767px){
    .title{
        font-size: 24px;
    }
    .banner-main{
        height: 140px;
    }
}
@media (max-width: 570px){
    .banner-main{
        height: 250px;
    }
    .banner-main.no-btn{
        height: 140px;
    }
    .banner-content{
        display: block;
    }
    .banner-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>