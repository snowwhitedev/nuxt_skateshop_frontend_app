<template>
    <button class="btn dcknd-tag"><slot></slot></button>
</template>
<script>
export default {
    name: 'Tag'
}
</script>
<style lang="scss" scoped>
button.dcknd-tag{
    padding: 5px 10px !important;
    font-weight: normal !important;
    font-size: 10px !important;
    height: 24px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #283441;
    text-transform: capitalize;
    background: #F3F4F4;
    // max-width: fit-content;
}   
</style>