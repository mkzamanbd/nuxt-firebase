<template>
    <div>
        <aside class="page-aside">
        <!-- accordion menu -->

            <!-- aside brand -->
            <div class="aside-brand">
                <nuxt-link to="/admin">
                    <img src="~/assets/template/resources/images/logos/logo_with_name.svg" alt="">
                </nuxt-link>
            </div>
            <!-- End aside-brand -->

            <ul class="accordion" id="asideAccordion">
                <h6 class="ps-3 py-1">Basic</h6>
                <li class="accordion-item">
                    <nuxt-link to="/admin" class="single-nav-link">
                        <i class="bi bi-house"></i>
                        <span>Dashboard</span>
                    </nuxt-link>
                </li>

                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#purchase" aria-expanded="false" aria-controls="purchase">
                        <i class="bi bi-people"></i>
                        <span>Employee</span>
                    </a>

                    <ul id="purchase" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#asideAccordion">
                        <li><nuxt-link to="/admin/employee" class="nav-link">All Records</nuxt-link></li>
                        <li><nuxt-link to="/admin/employee/create" class="nav-link">New Entry</nuxt-link></li>
                    </ul>
                </li>

                <li class="accordion-item">
                    <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#sale" aria-expanded="false" aria-controls="sale">
                        <i class="bi bi-cart3"></i>
                        <span>Sales</span>
                    </a>

                    <ul id="sale" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#asideAccordion">
                        <li><a href="" class="nav-link">All Records</a></li>
                        <li><a href="" class="nav-link">New Entry</a></li>
                    </ul>
                </li>


            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isActive: ''
            }
        },

        mounted() {
            //console.log(this.isActive)
        }
    }
</script>

<style lang="scss" scoped>

</style>
