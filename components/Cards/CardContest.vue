<template>
    <div class="card-contest-closed" style="">
        <div class="closed_contest_overlay">
            <div class="closed_contest_overlay_text">
                <img src="https://resources/assets/images/brand_logo/1567515154.logo-RedBull.png" alt="logo-Arizona.png">
                <div class="contest-title">Arizona - Pattern it!</div>
                <div class="closed_contest_bottom">
                    <ul>
                        <li style="margin-bottom:8px;">
                            <span class="icon_time_text">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 18.3334C5.865 18.3334 2.5 14.9692 2.5 10.8334C2.5 6.69754 5.865 3.33337 10 3.33337C14.135 3.33337 17.5 6.69754 17.5 10.8334C17.5 14.9692 14.135 18.3334 10 18.3334ZM10 5.00004C6.78333 5.00004 4.16667 7.61671 4.16667 10.8334C4.16667 14.05 6.78333 16.6667 10 16.6667C13.2167 16.6667 15.8333 14.05 15.8333 10.8334C15.8333 7.61671 13.2167 5.00004 10 5.00004Z" fill="white"/>
                                    <path d="M17.6173 6.74833C18.059 6.2975 18.3332 5.68083 18.3332 5C18.3332 3.61917 17.214 2.5 15.8332 2.5C15.1523 2.5 14.5348 2.77417 14.084 3.21667L17.6173 6.74833Z" fill="white"/>
                                    <path d="M2.38258 6.74833C1.94091 6.2975 1.66675 5.68083 1.66675 5C1.66675 3.61917 2.78591 2.5 4.16675 2.5C4.84758 2.5 5.46508 2.77417 5.91591 3.21667L2.38258 6.74833Z" fill="white"/>
                                    <path d="M11.9107 13.9225L9.41067 11.4225C9.254 11.2658 9.1665 11.0541 9.1665 10.8333V6.66663H10.8332V10.4883L13.089 12.7441L11.9107 13.9225Z" fill="white"/>
                                </svg>
                            </span>
                            <p><span class="largeTxt">17</span> days left</p>
                        </li>
                        <li>
                            <span class="icon_time_text">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.09082 14.9091H14.909V5.09091H5.09082V14.9091ZM6.72718 6.72728H13.2726V13.2727H6.72718V6.72728Z" fill="white"></path>
                                    <path d="M14.9093 1H13.2729V3.45455H14.9093V1Z" fill="white"></path>
                                    <path d="M6.72718 1H5.09082V3.45455H6.72718V1Z" fill="white"></path>
                                    <path d="M14.9093 16.5455H13.2729V19H14.9093V16.5455Z" fill="white"></path>
                                    <path d="M6.72718 16.5455H5.09082V19H6.72718V16.5455Z" fill="white"></path>
                                    <path d="M19 5.09091H16.5454V6.72728H19V5.09091Z" fill="white"></path>
                                    <path d="M19 13.2727H16.5454V14.9091H19V13.2727Z" fill="white"></path>
                                    <path d="M3.45455 5.09091H1V6.72728H3.45455V5.09091Z" fill="white"></path>
                                    <path d="M3.45455 13.2727H1V14.9091H3.45455V13.2727Z" fill="white"></path>
                                </svg>
                            </span>
                            <p><span class="largeTxt">3 </span> designs</p>
                        </li>
                    </ul>
                    <nuxt-link :to="`/contests/1`"><btn-text btnClass="btn primary lg">Submit your design</btn-text></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";

.card-contest-closed{
    // width: 412px;
    width: 100%;
    height: 300px;
    background-image: url('https://resources/assets/images/contest_images/photo-1531948371443-d5afa127f918.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.closed_contest_overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(40, 52, 65, 0.5);
    padding: 20px;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}
.closed_contest_overlay_text{
    width: 100%;
    line-height: 1;
}
.closed_contest_overlay_text img{
    margin-bottom: 10px;
}
.contest-title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
}
.closed_contest_bottom{
    // position: absolute;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
}
.closed_contest_bottom ul li{
    display: flex;
}
.icon_time_text{
    margin-right: 15px;
}
.closed_contest_bottom ul li .largeTxt{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
}


</style>