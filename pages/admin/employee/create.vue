<template>
    <div>
        <div class="user-new-entry">
            <div class="container print-none">
                <ul class="nav nav-tabs mt-2">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/employee">All Records</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" to="/admin/employee/create">New Entry</nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="container">
                <div class="card mb-5 border-0">
                    <div class="card-header p-0 border-0 d-flex">
                        <!-- page title -->
                        <div class="mt-3">
                            <h5 class="main-title">New Employee</h5>
                        </div>
                        <!-- header icon -->
                        <nuxt-link to="/admin/employee" title="Go back"
                            class="pe-0 ms-auto print-none top-icon-button mb-2 mt-3">
                            <i class="bi bi-arrow-left"></i>
                        </nuxt-link>

                    </div>
                    <div class="card-body p-0 pt-3">
                        <!-- start form -->
                        <form action="#">

                            <div class="row g-3 justify-content-center">
                                <!-- type text -->
                                <div class="col-8">
                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="inline-text" class="form-label required mt-1">Name</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" id="inline-text" placeholder="Name" required autofocus>
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="corporate-number" class="form-label required mt-1">Corporate Number</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" id="corporate-number" placeholder="017 XX XXX XXX" required>
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="facebook" class="form-label required mt-1">Facebook</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" id="facebook" placeholder="Facebook Link" required>
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="blood-group" class="form-label required mt-1">Blood Group</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" id="blood-group" placeholder="Blood Group" required>
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="official-email" class="form-label required mt-1">Official Email Address</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" id="official-email" placeholder="Official Email Address" required>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </form>
                        <!-- end form -->
                    </div>
                </div>
            </div>

            <div>
                <ul>
                    <li v-for="name in names">{{ name.name}}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import _names from './name.json'

export default {
    head:{
        title: 'New Employee'
    },
    computed: {
        names(){
            return _names
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
