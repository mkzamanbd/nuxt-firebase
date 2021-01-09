<template>
    <div>
        <!-- sidebar -->
        <AsideComponent/>
        <!-- End sidebar -->

        <!-- page-aside-layer -->
        <PageAsideLayer/>

        <div class="mainbar">
            <!-- HeaderComponent -->
            <HeaderComponent/>

            <!-- table -->
            <Nuxt />

        </div>
        
    </div>
</template>

<script>
export default {
    name: "default",
    middleware: 'auth'
}
</script>