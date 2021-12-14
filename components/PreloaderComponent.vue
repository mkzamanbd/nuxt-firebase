<template>
    <div v-if="isLoading" class="preloader">
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status"></div>
    </div>
</template>

<script>
    export default {
        name: "PreloaderComponent",
        computed:{
            isLoading(){
                return this.$store.getters['loading/getLoadingStatus'];
            }
        }
    }
</script>

<style lang="scss">
.preloader {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1024;
    background: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
