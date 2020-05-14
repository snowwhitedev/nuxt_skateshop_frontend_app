<template>
  <div class="input-container">
    <input class="input-email" type="email" @focus="onFocus" @blur="onBlur" v-model="searchWord" :placeholder="placeHolder"/>
    <btn-next btnClass="btn next append" @click="$emit('appendClick')"/>
  </div>
</template>

<script>
export default {
    name: "InputEmail",
    props:{
      placeHolder:{
        type: String,
        default: '',
      },
      append:{
        type: Boolean,
        default: String
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
        console.log("[InputSearch]", this.searchWord);
        this.$emit("searchData", this.searchWord);
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
.input-email{
  height: 50px;
}
.btn.next.append{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  margin-right:10px;
}
</style>
    
