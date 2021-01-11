<template>
    <div class="dashboard">
        <div class="container">
            <h1 @click="makeToast">Dashboard</h1>
        </div>
    </div>
</template>

<script>

export default {
    head:{
        title: 'Dashboard'
    },
    mounted(){
        
    },

    methods:{
        makeToast(){
            this.$bvToast.toast('User Successfully Loggedin')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
