<template>
    <div class="shop-header">
        <div class="shop-logo-section">
            <div class="shop-logo" style="background-image: url('https://images-na.ssl-images-amazon.com/images/I/61QICUUo8yL._SX425_.jpg');">
                <svg class="check-bubble" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.042 10.999C22.042 9.40202 21.1 8.03502 19.747 7.39402C20.25 5.98402 19.95 4.35102 18.821 3.22102C17.692 2.09202 16.058 1.79202 14.648 2.29502C14.006 0.942023 12.638 -0.000976562 11.042 -0.000976562C9.44602 -0.000976562 8.07702 0.942023 7.43602 2.29502C6.02602 1.79202 4.39302 2.09202 3.26302 3.22102C2.13402 4.35102 1.83402 5.98402 2.33702 7.39402C0.984016 8.03502 0.0410156 9.40302 0.0410156 10.999C0.0410156 12.595 0.983016 13.963 2.33702 14.605C1.83402 16.015 2.13402 17.649 3.26302 18.777C4.39202 19.906 6.02602 20.207 7.43602 19.704C8.07802 21.057 9.44501 21.999 11.042 21.999C12.639 21.999 14.006 21.057 14.648 19.704C16.058 20.207 17.691 19.906 18.821 18.777C19.95 17.649 20.25 16.015 19.747 14.605C21.099 13.964 22.042 12.596 22.042 10.999ZM10.332 16.696L6.34802 14.039L7.73502 11.959L9.75102 13.303L15.041 6.24902L17.041 7.74902L10.332 16.696Z" 
                    fill="#2E9BFF"/>
                </svg>
            </div>
            <div class="follow-shop">
                <btn-follow @onClick="followShop" :following="followingShop"/>
                <btn-textlink btnClass="btn textlink dark" leftIcon="envelope" style="margin-top:10px;" :btnDisabled="msgDisabled">Send Message</btn-textlink>
            </div>
        </div>
        <div class="shop-summary">
            <div class="shop-title">
                <p class="shop-name">Dave's Skateshop</p>
                <tag-badge backColor="#FFA057" style="margin-right:10px;">Top seller</tag-badge>
            </div>
            <p class="shop-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt magna in nisl sagittis, non eleifend velit scelerisque. Maecenas sed felis ac diam venenatis. Ut tincidunt magna in nisl sagittis, non eleifend velit scelerisque. Maecenas sed felis ac diam venenatis.
            </p>
            <div class="shop-stats">
                <p>24<small>Designs</small></p>
                <p>4<small>Products</small></p>
                <p>1,744<small>Followers</small></p>
            </div>
            
        </div>
        <div class="shop-designers">
            <div class="shop-designer-title">
                Contributors
            </div>
            <div class="shop-designer-item">
                <div class="shop-designer">
                    <div class="designer-info">
                        <div class="shop-designer-image" style="background-image:url('https://www.nretnil.com/avatar/swag_25k.jpg');">
                            <svg class="check-bubble-small" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.99996" cy="7.99984" r="5.33333" fill="white"/>
                                <path d="M15.3613 7.99935C15.3613 6.93468 14.7333 6.02335 13.8313 5.59602C14.1666 4.65602 13.9666 3.56735 13.214 2.81402C12.4613 2.06135 11.372 1.86135 10.432 2.19668C10.004 1.29468 9.09197 0.666016 8.02797 0.666016C6.96397 0.666016 6.0513 1.29468 5.62397 2.19668C4.68397 1.86135 3.5953 2.06135 2.84197 2.81402C2.0893 3.56735 1.8893 4.65602 2.22464 5.59602C1.32264 6.02335 0.69397 6.93535 0.69397 7.99935C0.69397 9.06335 1.32197 9.97535 2.22464 10.4033C1.8893 11.3433 2.0893 12.4327 2.84197 13.1847C3.59464 13.9373 4.68397 14.138 5.62397 13.8027C6.05197 14.7047 6.9633 15.3327 8.02797 15.3327C9.09264 15.3327 10.004 14.7047 10.432 13.8027C11.372 14.138 12.4606 13.9373 13.214 13.1847C13.9666 12.4327 14.1666 11.3433 13.8313 10.4033C14.7326 9.97602 15.3613 9.06402 15.3613 7.99935ZM7.55464 11.7973L4.89864 10.026L5.8233 8.63935L7.1673 9.53535L10.694 4.83268L12.0273 5.83268L7.55464 11.7973Z" fill="#2E9BFF"/>
                            </svg>
                        </div>
                        <div class="designer-desc">
                            <p class="designer-name">Ben Jhamin</p>
                            <p class="designer-id">@davearts</p>
                        </div>
                    </div>
                    <p class="member-date">Member since: January 30, 2017</p>
                </div>
                <btn-textlink-follow />
            </div>
            <div class="social-links-section">
                <div class="social-links-header">
                    <p>Share on social media</p>
                    <div class="short-line"></div>
                </div>
                <div class="social-links">
                    <a href="http://facebook.com/" target="_blank" class="social-link">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="#3466E8"/>
                            <path d="M18.4997 9.1665H16.7497C15.9761 9.1665 15.2343 9.47379 14.6873 10.0208C14.1403 10.5678 13.833 11.3096 13.833 12.0832V13.8332H12.083V16.1665H13.833V20.8332H16.1663V16.1665H17.9163L18.4997 13.8332H16.1663V12.0832C16.1663 11.9285 16.2278 11.7801 16.3372 11.6707C16.4466 11.5613 16.595 11.4998 16.7497 11.4998H18.4997V9.1665Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/" target="_blank" class="social-link">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="#52BCE8"/>
                            <path d="M21.4163 9.75001C20.8577 10.144 20.2392 10.4454 19.5847 10.6425C19.2334 10.2386 18.7665 9.95224 18.2471 9.8223C17.7278 9.69235 17.181 9.72504 16.6809 9.91594C16.1807 10.1068 15.7513 10.4467 15.4506 10.8897C15.1499 11.3326 14.9925 11.8572 14.9997 12.3925V12.9758C13.9745 13.0024 12.9588 12.7751 12.0428 12.314C11.1268 11.853 10.339 11.1725 9.74967 10.3333C9.74967 10.3333 7.41634 15.5833 12.6663 17.9167C11.465 18.7322 10.0338 19.141 8.58301 19.0833C13.833 22 20.2497 19.0833 20.2497 12.375C20.2491 12.2125 20.2335 12.0504 20.203 11.8908C20.7984 11.3037 21.2185 10.5624 21.4163 9.75001Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" class="social-link">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="#E792EE"/>
                            <path d="M17.917 9.16669H12.0837C10.4728 9.16669 9.16699 10.4725 9.16699 12.0834V17.9167C9.16699 19.5275 10.4728 20.8334 12.0837 20.8334H17.917C19.5278 20.8334 20.8337 19.5275 20.8337 17.9167V12.0834C20.8337 10.4725 19.5278 9.16669 17.917 9.16669Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.3338 14.6325C17.4058 15.118 17.3229 15.6138 17.0968 16.0494C16.8708 16.4851 16.5131 16.8383 16.0748 17.059C15.6364 17.2796 15.1396 17.3564 14.655 17.2785C14.1705 17.2005 13.7228 16.9717 13.3758 16.6247C13.0288 16.2776 12.8 15.83 12.722 15.3455C12.644 14.8609 12.7209 14.3641 12.9415 13.9257C13.1622 13.4873 13.5154 13.1297 13.9511 12.9036C14.3867 12.6776 14.8825 12.5947 15.368 12.6667C15.8632 12.7401 16.3216 12.9708 16.6756 13.3248C17.0296 13.6788 17.2604 14.1373 17.3338 14.6325Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" class="social-link">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="#F14336"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3794 9.86955C22.6349 10.1329 22.8163 10.4591 22.9054 10.815C23.1434 12.134 23.2588 13.4722 23.2504 14.8125C23.2552 16.1327 23.1397 17.4507 22.9054 18.75C22.8163 19.1059 22.6349 19.4321 22.3794 19.6954C22.1239 19.9588 21.8035 20.1501 21.4504 20.25C20.1604 20.595 15.0004 20.595 15.0004 20.595C15.0004 20.595 9.84043 20.595 8.55043 20.25C8.20454 20.1554 7.88891 19.9731 7.63404 19.7209C7.37916 19.4686 7.19365 19.1549 7.09543 18.81C6.8575 17.491 6.74201 16.1528 6.75043 14.8125C6.74386 13.4822 6.85934 12.1542 7.09543 10.845C7.18452 10.4891 7.36597 10.1629 7.62144 9.89955C7.87691 9.63618 8.19736 9.44489 8.55043 9.345C9.84043 9 15.0004 9 15.0004 9C15.0004 9 20.1604 9 21.4504 9.315C21.8035 9.41489 22.1239 9.60618 22.3794 9.86955ZM17.625 14.8124L13.3125 17.2649V12.3599L17.625 14.8124Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            msgDisabled: true,
            followingShop: false
        }
    },
    methods:{
        followShop(){
            this.followingShop = !this.followingShop;
            this.msgDisabled = !this.msgDisabled;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.shop-header{
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
}
.shop-logo-section{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.shop-logo{
    width:150px;
	height: 150px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 30px;
	position: relative;
}
.follow-shop{
    margin-top: 20px;
}
.check-bubble{
    position: absolute;
    right:-12px;
    bottom:-10px;
}

.shop-summary{
    margin-left:60px;
}
.shop-title{
	display: flex;
	align-items: center;
}
.shop-text{
    // max-width: 50%;
    max-width: 736px;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
    color: #283441;
    margin-top: 20px;
    margin-bottom: 40px;
}
.shop-name{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
	color: #2D3748;
	margin-right: 15px;
}
.shop-stats{
	margin-top:5px;
	display: flex;
	align-items: center;
}
.shop-stats p{
	font-family: $font-family-primary;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #283441;
	margin-right:40px;
}
.shop-stats p:last-child{
	margin-right: 0;
}
.shop-stats p small{
	line-height: 16px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    letter-spacing: 0.03em;
	font-weight: normal;
	font-size: 14px;
	margin-left: 3px;
}
.shop-designer-title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #283441;
}
.shop-designer-item{
    margin-top:10px;
    margin-bottom: 60px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.shop-designer-image{
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
}
.shop-designer-image .check-bubble-small{
    position: absolute;
    right: -4px;
    bottom: -4px;
}
.designer-info{
    display: flex;
    align-items: center;
}
.designer-desc{
    margin-left:20px;
    
}
.designer-desc .designer-name{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #283441;
}
.designer-desc .designer-id{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #707780;
}
.member-date{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: #707780;
    margin-top:10px;
}
.social-links-header{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.social-links-header p{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #283441;
    margin-right: 20px;
}
.short-line{
    width: 20px;
    border: 1px solid #283441 ;
}
a.social-link{
    margin-right: 10px;
}
a.social-link:last-child{
    margin-right: 0;
}
</style>