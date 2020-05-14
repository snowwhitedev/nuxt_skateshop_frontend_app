<template>
    <button :class="btnClass" @click="follow">
        <div class="action-text">
            <span v-if="following">following</span>
            <span v-else>follow</span>    
        </div>
        <svg v-if="following" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2926 15.3893L4.28613 11.382L5.72329 9.94406L8.22347 12.4442L15.6394 4.28571L17.1433 5.65374L8.2926 15.3893Z" fill="white"/>
        </svg>
        <svg v-else width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9001 6.45565H7.54454V2.1001H6.45565V6.45565H2.1001V7.54454H6.45565V11.9001H7.54454V7.54454H11.9001V6.45565Z" fill="white"/>
        </svg>
        
    </button>
</template>

<script>
export default {
    name: "BtnBuy",
    props:{
        following:{
            type:Boolean,
            default: false
        }
    },
    data(){
        return{
            btnClass: "btn primary sm follow",
        }
    },
    methods:{
        follow(){
            this.btnClass = (this.following)? "btn primary sm follow": "btn primary sm follow active"
            this.$emit('onClick');
            
            // this.btnDisabled = !this.btnDisabled;
        }
    }
}
</script>
<style lang="scss" scoped>
.btn.follow{
    padding-left: 20px;
    padding-right: 15px;
    display: flex;
    align-items: center;
}

.action-text{
    margin-right:10px;
    text-transform: capitalize;
}
.btn:disabled svg path{
    fill: #82C3FF;
}

.btn.primary.follow.active{
    background: #D5EBFF;
    color:#357BFF;
}
.btn.primary.follow.active svg path{
    fill: #357BFF;
}
</style>