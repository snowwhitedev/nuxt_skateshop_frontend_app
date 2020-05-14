<template>
    <div class="card-contest-md">
        <div class="card-contest-content">
            <img src="~/assets/images/logo-deckend-normal.svg" />
            <div class="card-text">Deckend - Make it Count</div>
            <btn-text class="btn gray lg">View contest details</btn-text>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.card-contest-md{
    width: 412px;
    height: 360px;
    background: url('https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg');
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
@media (max-width: 767px) {
    .card-contest-md{
        height: 186px;
    }
}
</style>