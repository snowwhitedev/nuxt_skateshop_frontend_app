<template>
  <div class="input-container">
    <input class="input-search" @focus="onFocus" @blur="onBlur" v-model="searchWord" :placeholder="placeHolder"/>
    <template v-if="focused">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-icon" @click="onSearch">
        <path d="M9.17229 14.6585C12.2023 14.6585 14.6585 12.2023 14.6585 9.17228C14.6585 6.14231 12.2023 3.68604 9.17229 3.68604C6.14231 3.68604 3.68604 6.14231 3.68604 9.17228C3.68604 12.2023 6.14231 14.6585 9.17229 14.6585Z" stroke="url(#paint0_radial)" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0305 16.0305L13.0474 13.0474" stroke="url(#paint1_radial)" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.3136 12.7783) rotate(43.1065) scale(15.0291 15.0306)">
        <stop stop-color="#357BFF"/>
        <stop offset="1" stop-color="#2FBBFF"/>
        </radialGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.6649 15.5193) rotate(43.1066) scale(4.08606 4.08646)">
        <stop stop-color="#357BFF"/>
        <stop offset="1" stop-color="#2FBBFF"/>
        </radialGradient>
        </defs>
      </svg>
    </template>
    <template v-else>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-icon">
        <path d="M9.17229 14.6585C12.2023 14.6585 14.6585 12.2023 14.6585 9.17228C14.6585 6.14231 12.2023 3.68604 9.17229 3.68604C6.14231 3.68604 3.68604 6.14231 3.68604 9.17228C3.68604 12.2023 6.14231 14.6585 9.17229 14.6585Z" 
          stroke="#707780" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0305 16.0305L13.0474 13.0474" 
          stroke="#707780" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </template>
  </div>
</template>

<script>
export default {
    name: "InputSearch",
    props:{
      placeHolder:{
        type: String,
        default: '',
      }
    },
    data(){
      return {
        focused: false,
        searchWord: '',
      }
    },
    methods:{
      onFocus(){
        this.focused = true;
      },
      onBlur(){
        this.focused = false
      },
      onSearch(){
        this.$emit("onSearch", this.searchWord);
      }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.input-container{
  position: relative;
  display: flex;
  align-items: center
}
.inline-icon{
  position: absolute;
  left:10px;
}
.inline-icon:hover{
  cursor: pointer;
}
.input-search{
  height: 40px;
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.01em;
  color: #9399A0;
  padding-left:45px; 
  background: #FAFAFB;
  border: 1px solid #F3F4F4;
}
.input-search:focus{
  border: 1px solid #2E9BFF;
}
.input-search:focus svg path{
  stroke: #2E9BFF;
}
</style>
    
