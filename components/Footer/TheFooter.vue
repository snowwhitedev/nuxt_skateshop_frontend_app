<template>
    <footer class="theFooter">
        <div class="footer-content">
            <div class="footer-content-container">
                <Logo logoColor="white" logoSize="lg" class="footer-logo"/>
                <Logo logoColor="white" logoSize="mobile" class="footer-logo-mobile" />
                <div class="footer-content-section columns">
                    <div class="column is-4 footer-text">
                        <p class="desktop-only">
                            
                        </p>
                        <p class="mobile-only">
                            <span>
                                {{mobileText}}&nbsp;
                            </span>
                            <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg" @click="showFullText">
                                <path opacity="0.3" d="M20.5 0H3C1.34315 0 0 1.34315 0 3V8C0 9.65685 1.34315 11 3 11H20.5C22.1569 11 23.5 9.65685 23.5 8V3C23.5 1.34315 22.1569 0 20.5 0Z" fill="white"/>
                                <path d="M6.5 7C7.32843 7 8 6.32843 8 5.5C8 4.67157 7.32843 4 6.5 4C5.67157 4 5 4.67157 5 5.5C5 6.32843 5.67157 7 6.5 7Z" fill="white"/>
                                <path d="M11.75 7C12.5784 7 13.25 6.32843 13.25 5.5C13.25 4.67157 12.5784 4 11.75 4C10.9216 4 10.25 4.67157 10.25 5.5C10.25 6.32843 10.9216 7 11.75 7Z" fill="white"/>
                                <path d="M17 7C17.8284 7 18.5 6.32843 18.5 5.5C18.5 4.67157 17.8284 4 17 4C16.1716 4 15.5 4.67157 15.5 5.5C15.5 6.32843 16.1716 7 17 7Z" fill="white"/>
                            </svg>
                        </p>
                    </div>
                    <div class="column is-4 footer-links columns is-mobile">
                        <div class="column is-6">
                            <div class="link-title">
                                Information
                            </div>
                            <ul class="link-list">
                                <li class="link-item"><nuxt-link to="/#">About us</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">How it works</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">Jobs</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">Bulk orders</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="column is-6">
                            <div class="link-title">
                                Customer service
                            </div>
                            <ul class="link-list">
                                <li class="link-item"><nuxt-link to="/#">Contact us</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">Help</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">Sizing</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">FAQ</nuxt-link></li>
                                <li class="link-item"><nuxt-link to="/#">Shipping Returns</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="column is-4 footer-social">
                        <div class="wrapper">
                            <div class="link-title">
                                Subscribe to our newsletter
                            </div>
                            <input-email class="input-default" :append="true" placeHolder="Your email address" />
                            <div class="social-links">
                                <a href="http://facebook.com/" target="_blank" class="social-link">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="white"/>
                                        <path d="M18.4999 9.16675H16.7499C15.9764 9.16675 15.2345 9.47404 14.6875 10.021C14.1405 10.568 13.8333 11.3099 13.8333 12.0834V13.8334H12.0833V16.1667H13.8333V20.8334H16.1666V16.1667H17.9166L18.4999 13.8334H16.1666V12.0834C16.1666 11.9287 16.228 11.7803 16.3374 11.6709C16.4468 11.5615 16.5952 11.5001 16.7499 11.5001H18.4999V9.16675Z" fill="#3466E8"/>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-link">
                                        <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="white"/>
                                        <path d="M21.4167 9.75001C20.8581 10.144 20.2396 10.4454 19.585 10.6425C19.2337 10.2386 18.7668 9.95224 18.2475 9.8223C17.7281 9.69235 17.1814 9.72504 16.6813 9.91594C16.1811 10.1068 15.7516 10.4467 15.4509 10.8897C15.1503 11.3326 14.9929 11.8572 15 12.3925V12.9758C13.9749 13.0024 12.9591 12.7751 12.0431 12.314C11.1271 11.853 10.3394 11.1725 9.75004 10.3333C9.75004 10.3333 7.41671 15.5833 12.6667 17.9167C11.4653 18.7322 10.0342 19.141 8.58337 19.0833C13.8334 22 20.25 19.0833 20.25 12.375C20.2495 12.2125 20.2339 12.0504 20.2034 11.8908C20.7987 11.3037 21.2189 10.5624 21.4167 9.75001Z" fill="#64CAF5"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" class="social-link">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="white"/>
                                        <path d="M17.9166 9.16675H12.0833C10.4725 9.16675 9.16663 10.4726 9.16663 12.0834V17.9167C9.16663 19.5276 10.4725 20.8334 12.0833 20.8334H17.9166C19.5275 20.8334 20.8333 19.5276 20.8333 17.9167V12.0834C20.8333 10.4726 19.5275 9.16675 17.9166 9.16675Z" stroke="#A58878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.3334 14.6326C17.4054 15.118 17.3225 15.6138 17.0965 16.0495C16.8704 16.4851 16.5128 16.8384 16.0744 17.059C15.636 17.2797 15.1392 17.3565 14.6547 17.2785C14.1701 17.2005 13.7225 16.9718 13.3754 16.6247C13.0284 16.2777 12.7996 15.8301 12.7217 15.3455C12.6437 14.861 12.7205 14.3642 12.9411 13.9258C13.1618 13.4874 13.5151 13.1297 13.9507 12.9037C14.3863 12.6777 14.8821 12.5947 15.3676 12.6667C15.8628 12.7402 16.3213 12.9709 16.6753 13.3249C17.0293 13.6789 17.26 14.1373 17.3334 14.6326Z" stroke="#A58878" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" class="social-link">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="30" width="30" height="30" rx="10" transform="rotate(-90 0 30)" fill="white"/>
                                        <path d="M22.9049 10.815C22.8159 10.4591 22.6344 10.1329 22.3789 9.86955C22.1235 9.60618 21.803 9.41489 21.4499 9.315C20.1599 9 14.9999 9 14.9999 9C14.9999 9 9.83994 9 8.54994 9.345C8.19688 9.44489 7.87642 9.63618 7.62095 9.89955C7.36548 10.1629 7.18403 10.4891 7.09494 10.845C6.85885 12.1542 6.74337 13.4822 6.74994 14.8125C6.74152 16.1528 6.85702 17.491 7.09494 18.81C7.19316 19.1549 7.37867 19.4686 7.63355 19.7209C7.88843 19.9731 8.20406 20.1554 8.54994 20.25C9.83994 20.595 14.9999 20.595 14.9999 20.595C14.9999 20.595 20.1599 20.595 21.4499 20.25C21.803 20.1501 22.1235 19.9588 22.3789 19.6954C22.6344 19.4321 22.8159 19.1059 22.9049 18.75C23.1392 17.4507 23.2547 16.1327 23.2499 14.8125C23.2584 13.4722 23.1429 12.134 22.9049 10.815Z" fill="#E14D4D"/>
                                        <path d="M13.3125 17.2651L17.625 14.8126L13.3125 12.3601V17.2651Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>&copy; 2019 deckend. a SkateboardCorp company. All designs copyright by owner.</p>
        </div>
    </footer>
</template>
<script>
import Logo from '../Navigation/Logo.vue';

export default {
    name: 'TheFooter',
    components:{
        Logo
    },
    data(){
        return{
            footerText: [
                'deckend. is an online platform bringing together skateboarding and design. A place for ongoing design contests and unique skateboard products created by a large community of independent artists. At deckend. we are bringing the possibility to design and skate your own deck and make money while doing it. Submit your design, share, vote and get voted on, get a commission for your skateboard sales and skate your own board. Bi-weekly, the designs with the highest number of votes from our community will be shortlisted for production and has a chance to be sold in the deckend. shop.',
                'deckend. is an online platform bringing together skateboarding and design. A place for ongoing design contests and unique skateboard products created by a large community of independent artists. At deckend. we are bringing the possibility to'
            ],
            mobileText: 'deckend. is an online platform bringing together skateboarding and design. A place for ongoing design contests and unique skateboard products created by a large community of independent artists. At deckend. we are bringing the possibility to',
            mobileShowFull: false
        }
    },
    methods:{
        showFullText: function(){
            this.mobileShowFull = !this.mobileShowFull;

            this.mobileText = (this.mobileShowFull)? this.footerText[1]: this.footerText[0]
        
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.theFooter{
    width: 100%;
}
.footer-content{
    background: #101D2C;
    padding: 60px 0;
}
.footer-content-container{
    max-width: 1316px;
    margin: 0 auto;
    padding: 0 20px;
}
.footer-logo{
    margin-bottom: 40px;
    display: block;
}
.footer-logo-mobile{
    margin-bottom: 20px;
}
.footer-content-section{
    color: white;
}
.footer-text p{
    max-width: 85%;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.01em;
}

.link-title{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 20px;
}
li.link-item{
    line-height: 1;
    margin-top: 20px;
}

.link-item a{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: white;
}
.footer-copyright{
    background: #0C1A29;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    padding: 33px;
}
.footer-social{
    display: flex;
    justify-content: flex-end;
}
.social-links{
    margin-top: 40px;
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
}
.social-link{
    margin-right: 20px;
}

//override css
.column{
    margin: 0;
    padding: 0;
}
.columns{
    margin: 0;
    padding: 0;
}
@media (max-width: 768px){
    .footer-content{
        padding: 40px 0 20px;
    }
    .footer-social{
        display: flex;
        justify-content: flex-start;
        margin-top: 30px;
    }
    .footer-logo{
        display: none;
    }
    .footer-logo-mobile{
        display: block;
    }
    .footer-text p{
        max-width: 100%;
        margin-bottom: 30px;
    }
    .social-links{
        margin-top: 30px;
        max-width: 355px;
        justify-content: center;
    }
}
</style>