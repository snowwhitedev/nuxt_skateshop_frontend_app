<template>
    <button :class="btnClass" :disabled="btnDisabled" @click="follow">
        <span v-if="following">Following</span>
        <span v-else>Follow</span>

        <svg class="rightIcon" v-if="following" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.80444 7.77252L-9.15527e-05 4.96742L1.00592 3.96084L2.75604 5.71097L7.94721 0L8.99991 0.957616L2.80444 7.77252Z" fill="#357BFF"/>
        </svg>
        <svg class="rightIcon" v-else width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9001 6.45565H7.54454V2.1001H6.45565V6.45565H2.1001V7.54454H6.45565V11.9001H7.54454V7.54454H11.9001V6.45565Z" fill="#357BFF"/>
        </svg>
    </button>
</template>
<script>
export default {
    props:{
        btnDisabled:{
            type: Boolean,
            default: false
        },
        //to do
        // following:{
        //     type:Boolean,
        //     default: false
        // }
    },
    data(){
        return{
            btnClass:"btn textlink follow",
            following: false
        }
    },
    methods:{
        follow(){
            this.following = !this.following;
            // this.$emit('onClick');
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
.rightIcon{
    margin-left:5px;
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