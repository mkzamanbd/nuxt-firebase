<template>
    <div>
        <div class="page-aside-layer" @click="PageAsideLayer"></div>
    </div>
</template>

<script>
    export default {
        methods:{
            PageAsideLayer() {
                document.querySelector(".page-aside-layer").classList.remove("show")
                document.querySelector(".page-aside").classList.remove("hide")
                document.querySelector(".mainbar").classList.remove("expand")
            }
        }
    }
</script>