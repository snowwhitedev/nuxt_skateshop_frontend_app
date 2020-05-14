<template>
    <div class="news-flash" :style="display">
        <div class="news-flash-content">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8.00003H8V3.05176e-05L0 10H6V18L14 8.00003Z" fill="white"/>
                </svg>
                <p>
                    <slot />
                </p>
        </div>    
        <div class="closeBtn" @click="onClose">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6064 3.53537L3.53538 10.6064" stroke="#EBF2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.53564 3.53537L10.6067 10.6064" stroke="#EBF2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            display: 'display:flex; align-items:center'
        }
    },
    methods:{
        onClose(){
            this.display = 'display:none';
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.news-flash{
    width: 100%;
    background: #5D95FF;
    color:white;
    font-family: $font-family-primary;
    padding: 8px;
    position: relative;
}
.news-flash p{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
}
.news-flash-content{
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;
}
.news-flash-content svg{
    margin-right: 15px;
}
.closeBtn{
    cursor: pointer;
    height: 15px;
    display: flex;
    align-items: center;
}
</style>