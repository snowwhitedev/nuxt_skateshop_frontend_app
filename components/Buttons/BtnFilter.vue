<template>
    <button class="btn-filter" @click="$emit('onClick')">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8334 7.49916C17.2117 7.49916 18.3334 6.37749 18.3334 4.99916C18.3334 3.62083 17.2117 2.49916 15.8334 2.49916C14.7484 2.49916 13.8326 3.19749 13.4876 4.16583H1.66675V5.83249H13.4876C13.8326 6.80083 14.7484 7.49916 15.8334 7.49916ZM15.8334 4.16583C16.2926 4.16583 16.6667 4.53999 16.6667 4.99916C16.6667 5.45999 16.2926 5.83249 15.8334 5.83249C15.3742 5.83249 15.0001 5.45999 15.0001 4.99916C15.0001 4.53999 15.3742 4.16583 15.8334 4.16583Z" fill="#283441"/>
        <path d="M7.50008 7.49916C6.41508 7.49916 5.49925 8.19749 5.15425 9.16583H1.66675V10.8325H5.15425C5.49925 11.8008 6.41592 12.4992 7.50008 12.4992C8.58425 12.4992 9.50091 11.8008 9.84591 10.8325H18.3334V9.16583H9.84591C9.50091 8.19749 8.58508 7.49916 7.50008 7.49916ZM7.50008 10.8325C7.04092 10.8325 6.66675 10.46 6.66675 9.99916C6.66675 9.53999 7.04092 9.16583 7.50008 9.16583C7.95925 9.16583 8.33342 9.53999 8.33342 9.99916C8.33342 10.46 7.95925 10.8325 7.50008 10.8325Z" fill="#283441"/>
        <path d="M15.8334 12.4992C14.7484 12.4992 13.8326 13.1975 13.4876 14.1658H1.66675V15.8325H13.4876C13.8326 16.8008 14.7492 17.4992 15.8334 17.4992C17.2117 17.4992 18.3334 16.3775 18.3334 14.9992C18.3334 13.6208 17.2117 12.4992 15.8334 12.4992ZM15.8334 15.8325C15.3742 15.8325 15.0001 15.46 15.0001 14.9992C15.0001 14.54 15.3742 14.1658 15.8334 14.1658C16.2926 14.1658 16.6667 14.54 16.6667 14.9992C16.6667 15.46 16.2926 15.8325 15.8334 15.8325Z" fill="#283441"/>
        </svg>
        <span>Filter by</span>
    </button>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.btn-filter{
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #283441;
    cursor:pointer;
    width: 116px;
    height: 40px;
    background: #FAFAFB;
    border: 1px solid #F3F4F4;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px 15px;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.btn-filter:hover{
    border: 1px solid #DBDDDF;
}
.btn-filter:active{
    border: 1px solid #F3F4F4 !important;
}
.btn-filter:active svg path{
    fill:#357BFF;
}
.btn-filter:focus{
    border: 1px solid $color-primary-7;
}
</style>