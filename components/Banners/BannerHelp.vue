<template>
    <div class="banner-help">
        <div class="title"><p>How can we help you?</p></div>
        <div class="input-container">
            <input class="input-search" placeholder="Type keywords to find your answers"/>
            <img src="~/assets/images/icons/icn-Search-help.png" class="inline-icon" />
        </div>
        <p class="banner-text" v-if="!$device.isMobile">Or browse the topics below to find what you’re looking for</p>
        <p class="banner-text" v-else>Or browse the topics below to find your answer</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";

.banner-help{
    width:100%;
    height: 277px;
    background: radial-gradient(100% 100.15% at 87.74% 82.86%, #357BFF 0%, #2FBBFF 100%);;
    padding-top: 60px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items:center;
}
.title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 46px;
    color: $color-white;
    margin-bottom: 10px;
}
.input-container{
    position: relative;
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 628px;
    background-color: rgba(255, 255, 255, 0.15);
    border-color: transparent;
    margin-top: 20px;
    margin-bottom: 50px;
  }
.inline-icon{
    position: absolute;
    left:18px;
}
.inline-icon:hover{
    cursor: pointer;
}
.input-search{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    mix-blend-mode: normal;
    height: 50px;
    color: white;
    background-color: transparent;
    border:none;
    padding-left: 50px;
}
.input-search::placeholder{
    opacity: 0.7;
    color: white;
}
.banner-text{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
}

@media (max-width: 767px){
    .title{
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 0;
    }
    .banner-help{
        width:100%;
        height: 237px;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .input-container{
        margin-top:10px;
        margin-bottom: 40px;
    }
}
</style>