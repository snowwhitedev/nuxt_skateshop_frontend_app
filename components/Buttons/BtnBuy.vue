<template>
    <button :class="btnClass" @click="$emit('onClick')">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66641 1C5.05475 1 5.39058 1.26833 5.47891 1.64583L6.29058 5.16667H17.1664C17.4239 5.16667 17.6656 5.285 17.8231 5.4875C17.9806 5.68917 18.0372 5.95417 17.9756 6.2025L16.3089 12.8692C16.2156 13.24 15.8822 13.5 15.4997 13.5H7.16641C6.77808 13.5 6.44225 13.2325 6.35391 12.8542L4.00391 2.66667H1.33308V1H4.66641ZM7.82891 11.8333H14.8489L16.0989 6.83333H6.67558L7.82891 11.8333Z" fill="white"/>
            <path d="M14.6665 17.6666C13.746 17.6666 12.9998 16.9204 12.9998 15.9999C12.9998 15.0794 13.746 14.3333 14.6665 14.3333C15.5869 14.3333 16.3331 15.0794 16.3331 15.9999C16.3331 16.9204 15.5869 17.6666 14.6665 17.6666Z" fill="white"/>
            <path d="M7.99971 17.6666C7.07924 17.6666 6.33305 16.9204 6.33305 15.9999C6.33305 15.0794 7.07924 14.3333 7.99971 14.3333C8.92019 14.3333 9.66638 15.0794 9.66638 15.9999C9.66638 16.9204 8.92019 17.6666 7.99971 17.6666Z" fill="white"/>
        </svg>
        <div class="action-text">Buy Now</div>
    </button>
</template>
<script>
export default {
    name: "BtnBuy",
    props:{
        btnClass:{
            type: String,
            default: "btn primary buy"
        }
    },
}
</script>
<style lang="scss" scoped>
.btn.buy{
    padding-left:10px;
    padding-right: 15px;
    display: flex;
    align-items: center;
}
.action-text{
    margin-left:10px;
}
.btn:disabled svg path{
    fill: #82C3FF;
}
</style>
