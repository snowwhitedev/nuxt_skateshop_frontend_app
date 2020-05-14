<template>
    <button :class="btnClass" @click="$emit('onClick')" :disabled="btnDisabled">
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z" 
                fill="white"/>
        </svg>
    </button>
</template>
<style lang="scss" scoped>
.btn.next{
    width:50px;
    height: 50px;
    background: #357BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #357BFF;
}
.action-text{
    margin-left:10px;
}
.btn.next:disabled{
    background: white;
    
}
.btn.next:disabled svg path{
    fill: #357BFF;
}
</style>
<script>
export default {
    name: "BtnBuy",
    props:{
        btnClass:{
            type: String,
            default: "btn next"
        },
        btnDisabled:{
            type: Boolean,
            default: false
        }
    },
    
}
</script>