<template>
  <button :class="btnClass" :disabled="btnDisabled" @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props:{
    btnClass:{
      type: String,
      default: "btn primary"
    },
    btnDisabled:{
      type: Boolean,
      default: false
    }
  }
}
</script>
