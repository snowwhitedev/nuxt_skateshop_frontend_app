<template>
    <div class="bannerin">
        <div class="banner-content">
            <div class="banner-text">You don’t have to see yourself in Black and White.</div>
            <btn-text btnClass="btn gray lg">View details</btn-text>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.bannerin{
    width: 100%;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    height: 243px;
    background: url('https://thumbs.dreamstime.com/z/many-gold-cup-winner-golden-cups-victory-competition-41233570.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.bannerin:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 850px;
    height: 100%;
    opacity: 0.4;
    background: -webkit-linear-gradient(349.53deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
    background: -o-linear-gradient(349.53deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
    background: linear-gradient(100.47deg, rgba(40, 52, 65, 0.9) 3.73%, rgba(40, 52, 65, 0.3) 55.21%, rgba(40, 52, 65, 0) 92.45%);
}
.banner-content{
    z-index: 9;
    position: absolute;
    top: 50%;
    left: 60px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
}
.banner-text{
    font-size: $font-size-header-4;
    font-family: $font-family-primary;
    color: $color-white;
    max-width: 469px;
    line-height: 46px;
    margin-bottom: 20px;
    font-weight: $font-weight-bold;
}
@media (max-width: 767px){
    .banner-text{
        font-size: 24px;
        line-height: 33px;
        max-width: 269px;
    }
    .banner-content{
        left: 30px;
    }
}

</style>