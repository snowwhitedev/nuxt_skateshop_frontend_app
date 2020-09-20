<template>
    <div class="card-contest-lg">
        <div class="card-contest-content">
            <img src="~/assets/images/logos/logo-Sony_white.svg" />
            <div class="card-text">Sony - 25 Years VX1000</div>
            <btn-text class="btn gray lg">View contest details</btn-text>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card-contest-lg{
    width: 100%;
    max-width: 844px;
    height: 360px;
    background: url('https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg');
    position: relative;
}
.card-text{
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    margin: 10px 0 20px;
}
.card-contest-content{
    position: absolute;
    bottom: 30px;
    left: 45px;
}
@media (max-width: 767px){
    .card-contest-lg{
        height: 355px;
    }
}
</style>
<script>
export default {
    name: 'CardContestLg'
}
</script>