<template>
    <transition  name="fade">
      <div class="popup">
        <slot></slot>
      </div>
    </transition >
</template>

<script>
    export default {
        name: "my-popup"
    }
</script>

<style scoped lang="less">
  .popup{
    position: fixed;
    width:7.2rem;
    top:0;bottom:0;z-index:999;background: #eeeeee;
    overflow-y: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    transform: translateX(0);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-7.2rem);
  }
</style>
