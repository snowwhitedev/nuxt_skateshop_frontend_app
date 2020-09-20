<template>
  <button :class="btnClass" @click="$emit('onClick')">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.2699 7.18178C18.1415 6.87095 17.8365 6.66761 17.4999 6.66761H13.0149L10.7449 2.12845C10.4624 1.56428 9.53653 1.56428 9.25403 2.12845L6.98487 6.66761H2.49987C2.1632 6.66761 1.8582 6.87095 1.72987 7.18178C1.60154 7.49261 1.67237 7.85261 1.9107 8.09011L5.7307 11.9101L4.19904 17.2726C4.1032 17.6084 4.22654 17.9684 4.5082 18.1743C4.79154 18.3809 5.17237 18.3884 5.46154 18.1943L9.99987 15.1693L14.5374 18.1943C14.6774 18.2876 14.8382 18.3343 14.9999 18.3343C15.1724 18.3343 15.3449 18.2809 15.4915 18.1743C15.7732 17.9684 15.8965 17.6084 15.8007 17.2726L14.269 11.9101L18.089 8.09011C18.3274 7.85261 18.3982 7.49261 18.2699 7.18178Z"
        fill="white"
      />
    </svg>
    <div class="action-text">Rate Now</div>
  </button>
</template>
<script>
export default {
    name: "BtnRate",
    props:{
        btnClass:{
            type: String,
            default: "btn primary rate"
        }
    },
}
</script>
<style lang="scss" scoped>
.btn.rate{
    padding-left:10px;
    padding-right: 15px;
    display: flex;
    align-items: center;
}
.action-text{
    margin-left:10px;
}
.btn:disabled svg path{
    fill: #82C3FF;
}
</style>