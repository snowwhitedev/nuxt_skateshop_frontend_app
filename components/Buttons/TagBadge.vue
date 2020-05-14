<template>
  <div class="tag-badge" :style="`background-color:${backColor}`">
    <svg class="badge-reward" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.3335H4.00002C3.26402 1.3335 2.66669 1.9315 2.66669 2.66683V9.3335C2.66669 12.3528 7.21869 14.3908 7.73669 14.6128C7.82135 14.6495 7.91002 14.6668 8.00002 14.6668C8.09002 14.6668 8.17869 14.6495 8.26335 14.6128C8.78135 14.3908 13.3334 12.3528 13.3334 9.3335V2.66683C13.3334 1.9315 12.736 1.3335 12 1.3335ZM12 2.66683V4.00016H4.00002V2.66683H12ZM12 9.3335C12 11.0328 9.32135 12.6462 8.00002 13.2688C6.67735 12.6468 4.00002 11.0375 4.00002 9.3335V5.3335H12V9.3335Z" fill="#FFECDD"/>
        <path d="M8.66665 8L7.99998 6L7.33331 8H5.33331L6.66665 9.33333L5.99998 11.3333L7.99998 10L9.99998 11.3333L9.33331 9.33333L10.6666 8H8.66665Z" fill="#FFECDD"/>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        backColor:{
            type: String,
            default: '#FFA057'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.tag-badge{
    height: 24px;
    padding-left: 5px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    font-family: $font-family-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.03em;
    color: #FFECDD;
    max-width: fit-content;
}
.badge-reward{
    margin-right: 5px;
}
</style>