<template>
    <button :class="btnClass" :disabled="btnDisabled" @click="() => { $emit('onClick');}">
        <svg class="leftIcon" v-if="leftIcon=='envelope' " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.333 3.63715H2.66634C1.93101 3.63715 1.33301 4.30624 1.33301 5.12899V11.8423C1.33301 12.665 1.93101 13.3341 2.66634 13.3341H13.333C14.0683 13.3341 14.6663 12.665 14.6663 11.8423V5.12899C14.6663 4.30624 14.0683 3.63715 13.333 3.63715ZM12.075 5.12899L7.99967 7.97841L3.92434 5.12899H12.075ZM2.66634 11.8423V6.00844L7.64634 9.49114C7.75434 9.56648 7.87701 9.60452 7.99967 9.60452C8.12234 9.60452 8.24501 9.56648 8.35301 9.49114L13.333 6.00769L13.3337 11.8423H2.66634Z" 
                fill="#707780"/>
        </svg>
        <svg class="leftIcon" v-else-if="leftIcon=='arrow'" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.646445 4.35355C0.451183 4.15829 0.451183 3.84171 0.646445 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.73079 0.659728 4.73079 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.73079 7.02369 4.73079 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646445 4.35355ZM16 4.5L0.999999 4.5V3.5L16 3.5V4.5Z" fill="#357BFF"/>
        </svg>
        <slot></slot>
        <svg class="rightIcon" v-if="rightIcon=='arrow'" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5L15 4.5V3.5L0 3.5L0 4.5Z" 
                fill="#357BFF"/>
        </svg>
        <svg class="rightIcon" v-else-if="rightIcon=='add2'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9001 6.45565H7.54454V2.1001H6.45565V6.45565H2.1001V7.54454H6.45565V11.9001H7.54454V7.54454H11.9001V6.45565Z" fill="#357BFF"/>
        </svg>
    </button>
</template>
<script>
export default {
    props:{
        btnClass:{
            type: String,
            default: "btn textlink"
        },
        btnDisabled:{
            type: Boolean,
            default: false
        },
        rightIcon:{
            type: String,
            default: null
        },
        leftIcon:{
            type: String,
            default: null
        }
        

    }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.btn.textlink{
    border: none;
    background: $color-white;
    color:$color-primary;
    display:flex;
    align-items: center;
    padding:0;
}
.btn.textlink.thin{
    font-weight: normal;
}
.rightIcon{
    margin-left:5px;
}
.leftIcon{
    margin-right: 5px;
}
.btn.textlink svg path{
    fill:$color-primary
}
.btn.textlink:hover{
    color: #283441;
}
.btn.textlink:hover svg path{
    fill: #283441;
}
.btn.textlink:focus{
    color: #5D95FF;
}
.btn.textlink:focus svg path{
    fill: #5D95FF;
}
.btn.textlink:disabled{
    color: #C2D7FF;
}
.btn.textlink:disabled svg path{
    color: #C2D7FF;
}

.btn.textlink.dark{
    color: #707780;
}
.btn.textlink.dark svg path{
    fill:#707780
}
.btn.textlink.dark:hover{
    color: #4C5561;
}
.btn.textlink.dark:hover svg path{
    fill:#4C5561;
}
.btn.textlink.dark:focus{
    color: #9399A0;
}
.btn.textlink.dark:focus svg path{
    fill:#9399A0;
}
.btn.textlink.dark:disabled{
    color: #E7E8EA;
}
.btn.textlink.dark:disabled svg path{
    fill:#E7E8EA;
}
</style>