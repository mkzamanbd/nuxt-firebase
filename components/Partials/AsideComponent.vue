<template>
    <aside class="page-aside">
    <!-- accordion menu -->

        <!-- aside brand -->
        <div class="aside-brand">
            <nuxt-link to="/">
                <img src="@/assets/images/logo_with_name.svg" alt="">
            </nuxt-link>
        </div>
        <!-- End aside-brand -->

        <ul class="accordion" id="asideAccordion">
            <h6 class="ps-3 py-1">Basic</h6>
            <li class="accordion-item">
                <nuxt-link to="/" class="single-nav-link">
                    <i class="bi bi-house"></i>
                    <span>Dashboard</span>
                </nuxt-link>
            </li>

            <li class="accordion-item">
                <nuxt-link to="/employee" class="single-nav-link">
                    <i class="bi bi-people"></i>
                    <span>Employee</span>
                </nuxt-link>
            </li>

        </ul>
    </aside>
</template>

<script>
    export default {
        name:'AsideComponent',
        data(){
            return {
                isActive: ''
            }
        },

        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>
