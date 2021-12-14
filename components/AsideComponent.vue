<template>
    <aside class="page-aside">
        <!-- aside brand -->
        <div class="aside-brand">
            <nuxt-link to="/">
                <img src="https://www.gstatic.com/devrel-devsite/prod/v33e7b2dc41690dd155c39da725d6a2a9b37af85c625b82149b8b1a06c071a1a2/firebase/images/lockup.png" alt="">
            </nuxt-link>
        </div>
        <!-- End aside-brand -->

        <ul id="asideAccordion" class="accordion" >
            <h6 class="ps-3 py-1">Basic</h6>
            <li class="accordion-item">
                <nuxt-link to="/dashboard" class="single-nav-link">
                    <i class="bi bi-house"></i>
                    <span>Dashboard</span>
                </nuxt-link>
            </li>

            <li class="accordion-item">
                <nuxt-link to="/dashboard/user" class="single-nav-link">
                    <i class="bi bi-people"></i>
                    <span>User</span>
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
