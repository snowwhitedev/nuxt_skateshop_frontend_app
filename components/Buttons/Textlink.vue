<template>
  <button :class="btnClass" @click="$emit('onClick')" :style="`font-size:${fontSize};`">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    btnClass:{
      type: String,
      default: 'textlink blue bold'
    },
    fontSize:{
      type: String,
      default: '14px'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.textlink{
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  border:none;
  background: none;
  cursor: pointer;
  padding:0;
}
.textlink.bold{
    font-weight: bold;
}
.textlink.blue{
    color: #357BFF;
}
.textlink.blue:hover{
    color: #283441;
}
.textlink.blue:focus{
    color: #5D95FF;
}
.textlink.blue:disabled{
    color: #C2D7FF;
}
.textlink.blue:active{
    color: #283441;
}

.textlink.dark{
    color: #283441;
}
.textlink.dark:hover{
    color: #357BFF;
}
.textlink.dark:focus{
    color: #707780;
}
.textlink.dark:disabled{
    color: #E7E8EA;
}
.textlink.dark:active{
    color: #357BFF
}

.textlink.red{
    color: #F5404C;
}
.textlink.red:hover{
    color: #F5404C;
}
.textlink.red:focus{
    color: #F87982;
}
.textlink.red:disabled{
    color: #FDD9DB;
}
.textlink.red:active{
    color: #F5404C;
}
</style>