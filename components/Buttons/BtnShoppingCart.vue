<template>
    <div>
        <div v-if="authLoggedIn" class="btn-shopping-cart auth" @click="$emit('onClick')">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.50005 1.8335C5.92721 1.8335 6.29663 2.12866 6.3938 2.54391L7.28663 6.41683H19.25C19.5333 6.41683 19.7991 6.547 19.9724 6.76975C20.1456 6.99158 20.208 7.28308 20.1401 7.55625L18.3068 14.8896C18.2041 15.2975 17.8375 15.5835 17.4167 15.5835H8.25005C7.82288 15.5835 7.45346 15.2892 7.3563 14.8731L4.7713 3.66683H1.83338V1.8335H5.50005ZM8.9788 13.7502H16.7008L18.0758 8.25016H7.71013L8.9788 13.7502Z" 
                    fill="#357BFF"/>
                <path d="M16.5 20.1667C15.4875 20.1667 14.6667 19.3459 14.6667 18.3333C14.6667 17.3208 15.4875 16.5 16.5 16.5C17.5126 16.5 18.3334 17.3208 18.3334 18.3333C18.3334 19.3459 17.5126 20.1667 16.5 20.1667Z"
                    fill="#357BFF"/>
                <path d="M9.16667 20.1667C8.15414 20.1667 7.33333 19.3459 7.33333 18.3333C7.33333 17.3208 8.15414 16.5 9.16667 16.5C10.1792 16.5 11 17.3208 11 18.3333C11 19.3459 10.1792 20.1667 9.16667 20.1667Z" 
                    fill="#357BFF"/>
            </svg>
            <div class="badge" v-if="badge > 0">
                <span>{{badge}}</span>
            </div>
        </div>
        <div v-else class="btn-shopping-cart" @click="$emit('onClick')">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.50005 1.8335C5.92721 1.8335 6.29663 2.12866 6.3938 2.54391L7.28663 6.41683H19.25C19.5333 6.41683 19.7991 6.547 19.9724 6.76975C20.1456 6.99158 20.208 7.28308 20.1401 7.55625L18.3068 14.8896C18.2041 15.2975 17.8375 15.5835 17.4167 15.5835H8.25005C7.82288 15.5835 7.45346 15.2892 7.3563 14.8731L4.7713 3.66683H1.83338V1.8335H5.50005ZM8.9788 13.7502H16.7008L18.0758 8.25016H7.71013L8.9788 13.7502Z" 
                    fill="#357BFF"/>
                <path d="M16.5 20.1667C15.4875 20.1667 14.6667 19.3459 14.6667 18.3333C14.6667 17.3208 15.4875 16.5 16.5 16.5C17.5126 16.5 18.3334 17.3208 18.3334 18.3333C18.3334 19.3459 17.5126 20.1667 16.5 20.1667Z"
                    fill="#357BFF"/>
                <path d="M9.16667 20.1667C8.15414 20.1667 7.33333 19.3459 7.33333 18.3333C7.33333 17.3208 8.15414 16.5 9.16667 16.5C10.1792 16.5 11 17.3208 11 18.3333C11 19.3459 10.1792 20.1667 9.16667 20.1667Z" 
                    fill="#357BFF"/>
            </svg>
            <div class="badge" v-if="badge > 0">
                <span>{{badge}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        badge:{
            type: Number,
            default: 3
        }
    },
    data(){
        return{
            borderColor: '#357BFF'
        }
    },
    computed:{
		authLoggedIn(){
			return this.$auth.$storage.getUniversal("authLoggedIn");
		}
	}
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";

.btn-shopping-cart{
    position: relative;
    width:40px;
    height: 40px;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #357BFF;
    border-radius: 3px;
}
.btn-shopping-cart:hover{
    cursor: pointer;
}
.btn-shopping-cart.auth{
    border:none;
    background: #D5EBFF;
    border-radius: 15px;
}
.btn-shopping-cart.auth:hover{
    background: #C0E1FF;
}
.btn-shopping-cart.auth:focus{
    background: #EAF5FF;
}
.btn-shopping-cart.auth:active{
    background: #D5EBFF;
}

.badge{
    position: absolute;
    top: -6px;
    right: -6px;
    width: 16px;
    height: 16px;
    border-radius: 5px;
    background-color: $color-orange;
    color:$color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size-label;
    font-family: $font-family-primary;
    font-weight: $font-weight-bold;
}


</style>

