<template>
    <div>
        <!-- sidebar -->
        <AsideComponent/>
        <!-- End sidebar -->

        <!-- page-aside-layer -->
        <PageAsideLayer/>


        <div class="mainbar">
            <HeaderComponent/>

            <div class="container">
                <h1>Dashboard</h1>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    head:{
        title: 'Dashboard'
    },
    middleware:['auth']
}
</script>

<style lang="scss" scoped>

</style>