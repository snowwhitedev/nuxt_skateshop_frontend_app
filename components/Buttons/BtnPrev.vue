<template>
    <button :class="btnClass" @click="$emit('onClick')" :disabled="btnDisabled">
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.78622 0.71967C5.07911 0.426777 5.55398 0.426777 5.84688 0.71967C6.13977 1.01256 6.13977 1.48744 5.84688 1.78033L4.78622 0.71967ZM1 5.56655L0.469669 6.09688C0.176777 5.80398 0.176777 5.32911 0.469669 5.03622L1 5.56655ZM5.84688 9.35276C6.13977 9.64566 6.13977 10.1205 5.84688 10.4134C5.55398 10.7063 5.07911 10.7063 4.78622 10.4134L5.84688 9.35276ZM21 4.81655C21.4142 4.81655 21.75 5.15233 21.75 5.56655C21.75 5.98076 21.4142 6.31655 21 6.31655V4.81655ZM5.84688 1.78033L1.53033 6.09688L0.469669 5.03622L4.78622 0.71967L5.84688 1.78033ZM1.53033 5.03622L5.84688 9.35276L4.78622 10.4134L0.469669 6.09688L1.53033 5.03622ZM1 4.81655H21V6.31655H1V4.81655Z" 
            fill="white"/>
        </svg>
    </button>
</template>
<style lang="scss" scoped>
.btn.prev{
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
.btn.prev:disabled{
    background: white;
    
}
.btn.prev:disabled svg path{
    fill: #357BFF;
}
</style>
<script>
export default {
    name: "BtnBuy",
    props:{
        btnClass:{
            type: String,
            default: "btn prev"
        },
        btnDisabled:{
            type: Boolean,
            default: true
        }
    },
    
}
</script>